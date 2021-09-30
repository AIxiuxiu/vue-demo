<template>
  <h3>父组件</h3>
  <button @click="theme = 'blue'">{{ theme }}</button>
  <hr />
  <DemoChild ref="childRef" :size="100" :user="user" class="child" msg="textMsg" @click="clickChild" @change="childChange">
    <div style="color: rgb(34, 27, 34)">默认solts</div>
    <!-- 具名插槽 -->
    <template #msg>
      <div>msg内容</div>
    </template>
    <!-- 获取子组件的值 -->
    <template #other="scope"> other solt {{ scope.msg }} </template>
  </DemoChild>
  <br />
  <hr />
  <button @click="changeChildText">调用子组件方法</button>
  <div v-for="i in 2" :key="i" :ref="(el) => setRefs(el, i)">索引{{ i }}</div>
</template>

<script setup lang="ts">
/**
 * 父子组件通信 provide 和  inject
 */
import useCurrentInstance from '@/hooks/useCurrentInstance';
import { onMounted, provide, readonly, ref, Ref, watchEffect } from 'vue';
import { ThemeKey } from '../../types/symbols';
import DemoChild from './components/DemoChild.vue';

const theme = ref('dark');
const changeTheme = () => {
  theme.value = 'red';
};

provide(ThemeKey, readonly(theme));
provide('changeTheme', readonly(changeTheme));

const user = { id: 2, name: 'parent', age: 20 };
const childChange = (theme: Ref<string>) => {
  console.log(theme);
};

const childRef = ref<any>(null);
childRef.value && console.log(childRef.value['childText']);
const changeChildText = () => childRef.value.changeChildText();

const clickChild = () => {
  console.log('click child');
};

// 循环获取refs
let refs = ref<any[]>([]);
let setRefs = (el: any, index: number) => (refs.value[index] = el);
onMounted(() => {
  for (const el of refs.value) {
    console.log(el);
  }
});

// 全局事件
const { $eventBus } = useCurrentInstance();
$eventBus.on('sonEvent', (e) => {
  console.log('孙组件的事件 sonEvent', e);
});

watchEffect(() => {
  $eventBus.emit('demo5Event', theme.value);
});
</script>

<style>
div {
  color: v-bind(theme);
}
</style>
