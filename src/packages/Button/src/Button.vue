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
const EggButtonType = ['primary', 'secondary', 'hollow', 'text']
const EggButtonSize = ['medium', 'small', 'mini']
const EggButtonSemantic = ['', 'success', 'warning', 'info', 'danger']

export default {
  name: 'EggButton',
  props: {
    size: {
      type: String,
      validator: (val) => {
        return EggButtonSize.includes(val)
      },
    },
    // 不同层级的按钮
    type: {
      type: String,
      default: 'hollow',
      validator: (val) => {
        return EggButtonType.includes(val)
      },
    },
    semantic: {
      type: String,
      validator: (val) => {
        return EggButtonSemantic.includes(val)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.egg-button {
  padding: 11px 74px;
  display: inline-block;
  border-radius: 6px;
  border: 1px solid #6979f8;
  font-size: 17px;
  font-family: Helvetica;
  letter-spacing: 2px;
  color: $--color-primary;
  line-height: 22px;
  cursor: pointer;

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
  }
  &.egg-button--hollow {
    border-width: 2px;
    background-color: $--color-white;
  }
  &.egg-button--secondary {
    border: none;
    background-color: $--color-primary-lightest;
  }
  &.egg-button--text {
    border: none;
    background-color: unset;
  }

  &.egg-button--secondary {
  }
}

@mixin eggButtonSize($size) {
}
</style>
