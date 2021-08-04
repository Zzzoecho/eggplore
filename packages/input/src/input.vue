<template>
  <div class="egg-input">
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
// const EggInputType = ['text', 'password', 'hollow', 'text'];
const EggInputSize = ['medium', 'small', 'mini'];

export default {
  name: 'EggInput',
  props: {
    size: {
      type: String,
      validator: (val) => EggInputSize.includes(val),
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.egg-input {
  input {
    padding: 8px 12px;
    appearance: none;
    color: $--color-text-regular;
    background-color: $--color-white;
    border: 1px solid $--color-border-base;
    border-radius: 6px;
    outline: none;
    box-shadow: 0 7px 64px 0 rgba(0, 0, 0, 0.07);

    &::placeholder {
      font-size: 15px;
      color: $--color-text-secondary;
    }
  }
}
</style>
