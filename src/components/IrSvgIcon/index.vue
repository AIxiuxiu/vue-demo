<template>
  <svg
    class="svg-icon"
    :style="{
      width: size + 'px',
      height: size + 'px',
      color: color
    }"
  >
    <use :xlink:href="`#icon-${name}`" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
/**
 * svg组件
 */
defineProps({
  name: {
    type: String,
    required: true,
    default: ''
  },
  size: {
    type: Number,
    default: 32
  },
  color: {
    type: String,
    default: '#000'
  }
});
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
