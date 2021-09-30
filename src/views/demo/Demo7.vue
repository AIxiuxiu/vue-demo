<template>
  <div>
    <h2>综合使用案例</h2>
    <h3>当前计数: {{ counter }}</h3>
    <h3>计数*2: {{ doubleCounter }}</h3>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h3>{{ data }}</h3>
    <button @click="changeData">修改data</button>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scrollX: {{ scrollX }}</div>
      <div class="scroll-y">scrollY: {{ scrollY }}</div>
    </div>
    <div class="mouse">
      <div class="mouse-x">mouseX: {{ mouseX }}</div>
      <div class="mouse-y">mouseY: {{ mouseY }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 综合使用
 */
import { useCounter, useLocalStorage, useMousePosition, useScrollPosition, useTitle } from './hooks';

// counter
const { counter, doubleCounter, increment, decrement } = useCounter();

// title
const titleRef = useTitle('coderwhy');
setTimeout(() => {
  titleRef.value = 'kobe';
}, 3000);

// 滚动位置
const { scrollX, scrollY } = useScrollPosition();

// 鼠标位置
const { mouseX, mouseY } = useMousePosition();

// localStorage
const data = useLocalStorage('info');
const changeData = () => (data.value = `哈哈哈哈${new Date().getTime()}`);
</script>
