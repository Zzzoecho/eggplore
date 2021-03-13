<template>
  <div class="egg-row">
    <slot></slot>
  </div>
</template>

<script>
const EggRowJustify = ['start', 'end', 'center', 'space-around', 'space-between'];
const EggRowAlign = ['top', 'middle', 'bottom'];

export default {
  name: 'EggRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      validator: (val) => EggRowJustify.includes(val),
    },
    align: {
      type: String,
      validator: (val) => EggRowAlign.includes(val),
    },
  },
};
</script>

<style lang="scss" scoped>
.egg-row {
  display: flex;
  margin-bottom: 20px;
  user-select: none;
}
</style>
