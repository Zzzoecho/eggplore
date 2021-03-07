<template>
  <div
    :class="[
      'egg-button',
      { disabled: disabled },
      type ? `is-${type}` : '',
      size ? `egg-button--${size}` : '',
      semantic ? `egg-button--${semantic}` : '',
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
@import "../../assets/styles/variables.scss";

.egg-button {
  padding: 8px 20px;
  box-sizing: border-box;
  display: inline-block;
  flex: none;
  font-size: 16px;
  font-weight: 400;
  color: $--color-primary;
  text-align: center;
  letter-spacing: 0.5px;
  border: 2px solid #6979f8;
  border-radius: 6px;
  transition: all 200ms;
  cursor: pointer;

  // size
  &.egg-button--medium {
    padding: 6px 15px;
    font-size: 14px;
  }
  &.egg-button--small {
    padding: 4px 10px;
    font-size: 13px;
  }
  &.egg-button--mini {
    padding: 2px 8px;
    font-size: 12px;
  }

  // type
  &.is-primary {
    color: $--color-white;
    background-color: $--color-primary;

    &:hover {
      background-color: $--color-primary-light-1;
      border-color: $--color-primary-light-1;
    }
  }
  &.is-hollow {
    background-color: $--color-white;
    border-width: 2px;

    &:hover {
      background-color: $--color-primary-light-9;
    }
  }
  &.is-secondary {
    background-color: $--color-primary-light-8;
    border-color: transparent;

    &:hover {
      background-color: $--color-primary-light-7;
    }
  }
  &.is-text {
    background-color: unset;
    border: none;

    &:hover {
      opacity: 0.8;
    }
  }

  // disabled
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // semantic
  &.egg-button--success {
    &.is-primary {
      color: $--color-white;
      background-color: $--color-primary;

      &:hover {
        background-color: $--color-primary-light-1;
        border-color: $--color-primary-light-1;
      }
    }
    &.is-hollow {
      background-color: $--color-white;
      border-width: 2px;

      &:hover {
        background-color: $--color-primary-light-9;
      }
    }
    &.is-secondary {
      background-color: $--color-primary-light-8;
      border-color: transparent;
    }
    &.is-text {
      background-color: unset;
      border: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }
  &.egg-button--small {
    padding: 4px 10px;
    font-size: 13px;
  }
  &.egg-button--mini {
    padding: 2px 8px;
    font-size: 12px;
  }

}
</style>
