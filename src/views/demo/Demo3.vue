<template>
  <div>
    <div class="text">num:{{ num }}</div>
  </div>
</template>

<script setup lang="ts">
/**
 * watch 和 watchEffect
 */
import { reactive, ref, watch, watchEffect } from 'vue';

let num = ref(100);
setTimeout(() => {
  num.value++;
}, 1000);

watch(
  () => num.value,
  (newVal, oldVal) => {
    console.log(`监听到num的值newVal:${newVal}  oldVal:${oldVal}`);
  },
  {
    immediate: true // 创建时立即执行
  }
);

let status = reactive({ count: { mix: 1, max: 100 } });
setTimeout(() => {
  status.count.mix++;
}, 1000);
setTimeout(() => {
  status.count.max--;
}, 2000);

watch(
  () => status.count.mix,
  (newVal, oldVal) => {
    console.log(`监听到status的值newVal:${JSON.stringify(newVal)}  oldVal:${JSON.stringify(oldVal)}`);
  },
  {
    deep: true // 监听对象下所有属性，最好直接表明监听那个属性，避免性能问题
  }
);

watch(
  () => status.count.max,
  (newVal, oldVal) => {
    console.log(`监听到status.count.max的值newVal:${JSON.stringify(newVal)}  oldVal:${JSON.stringify(oldVal)}`);
  }
);

const id = ref(101);
//  watchEffect 与 watch 的不同
// 不需要指定监听的属性，他会自动的收集依赖，只要我们回调中引用到了响应式的属性， 那么当这些属性变更的时候，这个回调都会执行
// watch 可以获取到新值与旧值（更新前的值），而 watchEffect 只能获取到最新值
// watchEffect 如果存在的话，在组件初始化的时候就会执行一次用以收集依赖（与computed同理），而后收集到的依赖发生变化，这个回调才会再次执行，而 watch 不需要，因为他一开始就指定了依赖
const stop = watchEffect((onInvalidate) => {
  console.log(`watchEffect监听到id变化:${id.value}`);
  console.log(`watchEffect监听到id变化:${num.value}`);
  // 异步调用
  const asyncTime = setTimeout(() => {
    console.log('watchEffect 异步执行');
  }, 2000);

  // 清除副作用（onInvalidate ）
  onInvalidate(() => {
    // 取消异步的调用。
    clearTimeout(asyncTime);
  });
});

setTimeout(() => {
  id.value = 10101;
}, 1000);

// 取消监听
setTimeout(() => {
  stop();
  id.value = 101010101;
}, 3000);
</script>
