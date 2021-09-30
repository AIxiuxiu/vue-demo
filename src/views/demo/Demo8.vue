<template>
  <div>
    <h2>自定义指令</h2>
    <input v-model="label" v-focus type="text" />
    <div v-why>指令生命周期</div>

    <h2>全局指令</h2>
    <h4 v-format-time>{{ timestamp }}</h4>
    <h4 v-format-time="'YYYY/MM/DD'">{{ timestamp }}</h4>
  </div>
</template>

<script lang="ts">
export default {
  // 局部指令
  directives: {
    focus: {
      mounted(el: HTMLInputElement) {
        el.focus();
      }
    },
    // 声明周期
    why: {
      created(el: HTMLElement, bindings: { value: any; modifiers: any }, vnode: any, preVnode: any) {
        console.log('why created', el, bindings, vnode, preVnode);
        console.log(bindings.value);
        console.log(bindings.modifiers);
      },
      beforeMount() {
        console.log('why beforeMount');
      },
      mounted() {
        console.log('why mounted');
      },
      beforeUpdate() {
        console.log('why beforeUpdate');
      },
      updated() {
        console.log('why updated');
      },
      beforeUnmount() {
        console.log('why beforeUnmount');
      },
      unmounted() {
        console.log('why unmounted');
      }
    }
  }
};
</script>
<script setup lang="ts">
/**
 * 自定义指令
 */
import { ref } from 'vue';

const label = ref('label');
const timestamp = ref(1624452193);
</script>
