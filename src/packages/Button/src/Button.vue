<template>
  <div :class="['egg-button', {'is-plain' : plain}, `egg-button--${type}`]">
    <slot></slot>
  </div>
</template>

<script>
    const EggButtonType = ['primary', 'secondary', 'info', 'text']
    const EggButtonSize = ['large', 'medium', 'small', 'mini']

    export default {
        name: 'EggButton',
        props: {
            size: {
                type: String,
                default: 'large',
                validator: (val) => {
                    return EggButtonSize.includes(val)
                }
            },
            // 不同颜色
            type: {
                type: String,
                default: 'default',
                validator: (val) => {
                    return EggButtonType.includes(val)
                }
            },
            plain: {
                type: Boolean,
                default: false,
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

<style lang="scss">
  .egg-button {
    border: 1px solid #6979F8;

    &.egg-button--default {
      border-color: $--color-primary;
    }

    &.egg-button--primary {
      background-color: $--color-primary;
    }

    &.egg-button--secondary {
      background-color: $--color-primary-light-1;
    }
  }
</style>