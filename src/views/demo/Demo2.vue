<template>
  <div>
    <div>num:{{ num }}</div>
    <div>numStr:{{ numStr }}</div>
    <div>numStr:{{ numStr }}</div>
    <div>getNumStr:{{ getNumStr() }}</div>
    <div>getNumStr:{{ getNumStr() }}</div>
    <div>numCom:{{ numCom }}</div>
    <div>-------------</div>
    <div>count:{{ status.count }}</div>
    <div>count2:{{ count }}</div>
    <div>double:{{ status.double }}</div>
    <button @click="increment">加一</button>
    <input ref="inputEl" v-model="count" type="text" />
    <div>自定义 customRef</div>
    <input v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup lang="ts">
/**
 * 响应式 ref 和 计算属性 computed
 */
import { computed, onMounted, reactive, ref, toRefs } from 'vue';
import debounceRef from './hooks/useDebounceRef';

type Status = {
  count: number;
  double: number;
};
// ref 就是一般的某个基础数据创建了一个响应式引用，用于简单的数据类型
const num = ref(100);

// 计算属性 ,带缓存
const numStr = computed(() => {
  console.log('computed的numStr中的计算');
  return `--${num.value}--`;
});

// numStr.value++; // 计算属性是只读的
const getNumStr = () => {
  console.log('methods:getNumStr中的计算');
  return `<<${num.value}>>`;
};
// 对象包含getter/setter
const numCom = computed({
  get: () => num.value * 2,
  set: (val: number) => {
    num.value = val;
  }
});
numCom.value = Number.parseInt(`${Math.random() * 100}`);

// reactive 用于复杂的数据类型
const status: Status = reactive({
  count: 1,
  double: computed(() => status.count * 2)
});

// toRefs 解包
const { count, double } = toRefs(status);
// const count = toRef(status, 'count');

// templateRefs 用于操作dom  一般标签 HTMLElement 组件
const inputEl = ref<HTMLInputElement | null>(null); // ref(null) 即表示是dom元素

function increment() {
  num.value++;
  status.count++;
  count.value++;
  if (inputEl.value) {
    console.log('inputEl value:', inputEl.value.value);
  }
}

// DOM首次渲染完成才能获取到真实的dom
onMounted(() => {
  console.log(inputEl.value);
  inputEl.value && inputEl.value.focus();
});

// 自定义 customRef 防抖动
const message = debounceRef('Hello World');
</script>

<style scope lang="scss">
//scss
</style>
