<template>
  <div
    :class="[
      'egg-button',
      { disabled: disabled },
      type ? `egg-button--${type}` : '',
      size ? `egg-button--${size}` : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
const EggButtonType = ['primary', 'secondary', 'hollow', 'text'];
const EggButtonSize = ['medium', 'small', 'mini'];
const EggButtonSemantic = ['', 'success', 'warning', 'info', 'danger'];

export default {
  name: 'EggButton',
  props: {
    size: {
      type: String,
      validator: (val) => EggButtonSize.includes(val),
    },
    // 不同层级的按钮
    type: {
      type: String,
      default: 'hollow',
      validator: (val) => EggButtonType.includes(val),
    },
    semantic: {
      type: String,
      validator: (val) => EggButtonSemantic.includes(val),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.egg-button {
  box-sizing: border-box;
  display: inline-block;
  padding: 12px 70px;
  font-family: Helvetica;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  color: $--color-primary;
  text-align: center;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: 1px solid #6979f8;
  border-radius: 6px;
  transition: all 200ms;

  // size
  &.egg-button--medium {
    padding: 10px 50px;
    font-size: 14px;
  }
  &.egg-button--small {
    padding: 5px 20px;
    font-size: 13px;
  }
  &.egg-button--mini {
    padding: 4px;
    font-size: 12px;
  }

  // type
  &.egg-button--primary {
    color: $--color-white;
    background-color: $--color-primary;

    &:hover {
      background-color: $--color-primary-light-1;
      border-color: $--color-primary-light-1;
    }
  }
  &.egg-button--hollow {
    background-color: $--color-white;
    border-width: 2px;

    &:hover {
      background-color: $--color-primary-light-9;
    }
  }
  &.egg-button--secondary {
    background-color: $--color-primary-light-8;
    border: none;

    &:hover {
      background-color: $--color-primary-light-7;
    }
  }
  &.egg-button--text {
    padding: 12px 0;
    background-color: unset;
    border: none;
  }
}
</style>
