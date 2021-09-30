<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script setup lang="ts">
import { nextTick, provide, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ReloadKey } from './types/symbols';

const store = useStore();
const route = useRoute();
const isRouterAlive = ref(true);

provide(ReloadKey, reload);
function reload() {
  isRouterAlive.value = false;
  nextTick(() => (isRouterAlive.value = true));
}

watch(
  () => route,
  (newVal, oldVal) => {
    store.commit('settings/setTitle', route.meta.title);
    if (newVal.name == oldVal.name) {
      reload();
    }
  }
);
</script>
