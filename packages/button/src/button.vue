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
@import '../../assets/styles/variables.scss';

.egg-button {
  box-sizing: border-box;
  display: inline-block;
  flex: none;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 400;
  color: $--color-primary;
  text-align: center;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: 2px solid #6979f8;
  border-radius: 6px;
  transition: all 200ms;

  & + .egg-button {
    margin-left: 10px;
  }

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
    border-width: 1px;

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
    cursor: not-allowed;
    opacity: 0.5;
  }

  // semantic
  &.egg-button--success {
    color: $--color-white;
    &.is-primary {
      background-color: $--color-green;
      border-color: $--color-green;

      &:hover {
        opacity: 0.8;
      }
    }
    &.is-hollow {
      color: $--color-green;
      background-color: $--color-green-lightest;
      border-color: $--color-green;

      &:hover {
        color: $--color-white;
        background-color: $--color-green;
      }
    }
    &.is-secondary {
      color: $--color-green;
      background-color: $--color-green-lightest;
      &:hover {
        color: $--color-white;
        background-color: $--color-green-lighter;
      }
    }
    &.is-text {
      color: $--color-green;
    }
  }
  &.egg-button--warning {
    color: $--color-white;
    &.is-primary {
      background-color: $--color-amber;
      border-color: $--color-amber;

      &:hover {
        opacity: 0.8;
      }
    }
    &.is-hollow {
      color: $--color-amber;
      background-color: $--color-amber-lightest;
      border-color: $--color-amber;

      &:hover {
        color: $--color-white;
        background-color: $--color-amber;
      }
    }
    &.is-secondary {
      color: $--color-amber;
      background-color: $--color-amber-lightest;
      &:hover {
        color: $--color-white;
        background-color: $--color-amber-lighter;
      }
    }
    &.is-text {
      color: $--color-amber;
    }
  }
  &.egg-button--danger {
    color: $--color-white;
    &.is-primary {
      background-color: $--color-coral;
      border-color: $--color-coral;

      &:hover {
        opacity: 0.8;
      }
    }
    &.is-hollow {
      color: $--color-coral;
      background-color: $--color-coral-lightest;
      border-color: $--color-coral;

      &:hover {
        color: $--color-white;
        background-color: $--color-coral;
      }
    }
    &.is-secondary {
      color: $--color-coral;
      background-color: $--color-coral-lightest;
      &:hover {
        color: $--color-white;
        background-color: $--color-coral-lighter;
      }
    }
    &.is-text {
      color: $--color-coral;
    }
  }
  &.egg-button--info {
    color: $--color-white;
    &.is-primary {
      background-color: $--color-grey;
      border-color: $--color-grey;

      &:hover {
        opacity: 0.8;
      }
    }
    &.is-hollow {
      color: $--color-grey;
      background-color: $--color-grey-lightest;
      border-color: $--color-grey;

      &:hover {
        color: $--color-white;
        background-color: $--color-grey;
      }
    }
    &.is-secondary {
      color: $--color-grey;
      background-color: $--color-grey-lightest;
      &:hover {
        color: $--color-white;
        background-color: $--color-grey-lighter;
      }
    }
    &.is-text {
      color: $--color-grey;
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
