<template>
  <div>
    <!-- 模板语法需要使用data.属性来调用（单独使用reactive函数） -->
    <button @click="data.count++">count is: {{ data.count }}</button>
    <button @click="clickMe()">点我弹窗</button>
  </div>
</template>

<script setup lang="ts">
/**
    除了beforecate和created(它们被setup方法本身所取代)，我们可以在setup方法中访问的API生命周期钩子有9个选项:
    onBeforeMount – 在挂载开始之前被调用：相关的 render 函数首次被调用。
    onMounted – 组件挂载时调用
    onBeforeUpdate – 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    onUpdated – 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    onBeforeUnmount – 在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。
    onUnmounted – 卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。
    onActivated – 被 keep-alive 缓存的组件激活时调用。
    onDeactivated – 被 keep-alive 缓存的组件停用时调用。
    onErrorCaptured – 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。
    */
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, reactive } from 'vue';

console.log('1-开始创建组件-----setup()');

// reactive 创建响应式对象
let data = reactive({
  // 定义响应式数据
  count: 0
});

const clickMe = () => {
  data.count++;
  alert('hi' + data.count);
};

onBeforeMount(() => {
  console.log('2-组件挂载到页面之前执行-----onBeforeMount()');
});

// 用的最多的生命周期，可操作dom
onMounted(() => {
  console.log('3-组件挂载到页面之后执行-----onMounted()');
});

onBeforeUpdate(() => {
  console.log('4-组件更新之前-----onBeforeUpdate()');
});

onUpdated(() => {
  console.log('5-组件更新之后-----onUpdated()');
});

onBeforeUnmount(() => {
  console.log('6-组件卸载之前-----onBeforeUnmount()');
});

onBeforeUnmount(() => {
  console.log('7-组件卸载之后-----onUnmounted()');
});
</script>
