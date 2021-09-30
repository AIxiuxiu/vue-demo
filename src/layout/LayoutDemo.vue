<template>
  <div>
    <div id="nav">
      <router-link v-for="(route, index) in demoRoute.children" :key="index" :to="`${demoRoute.path}/${route.path}`">{{ route.meta.title }}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import demoRoute from '@/router/modules/demo';

// const demoRoute = computed(() => demoRoute);
</script>

<style lang="scss" scoped>
#nav {
  margin-bottom: 10px;
  a {
    text-decoration: none;
    font-size: 14px;
    &::after {
      content: '|';
      margin: 0 10px;
      font-weight: normal;
      font-size: 14px;
    }
    &:last-child::after {
      content: none;
    }
    &.router-link-active {
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
