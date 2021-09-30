<template>
  <div>
    {{ demo + showDemo }}
  </div>
</template>

<script setup lang="ts">
/**
 * 组件描述
 */
import { computed } from 'vue';
/**
 * 组件参数
 */
const props = defineProps({
  demo: {
    type: String,
    required: true,
    default: ''
  }
});

const showDemo = computed(() => props.demo);
/**
 * 组件发送事件
 */
const emit = defineEmits(['change']);
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
