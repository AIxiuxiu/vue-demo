<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  list: {
    type: Array,
    default: () => {
      return [];
    }
  }
});
</script>
