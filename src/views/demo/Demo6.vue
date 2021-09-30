<template>
  <div>
    <!-- 1.v-bind value的绑定 2.监听input事件, 更新message的值 -->
    <!-- <input type="text" :value="title" @input="inputChange"> -->
    <input v-model="title" type="text" />
    <!-- 1.绑定textarea -->
  </div>

  <label for="intro">
    <h4>自我介绍</h4>
    <textarea id="intro" v-model="intro" name="intro" cols="30" rows="10"></textarea>
  </label>
  <div>intro: {{ intro }}</div>
  <hr />
  <!-- 2.checkbox -->
  <!-- 2.1.单选框 -->
  <label for="agree"> <input id="agree" v-model="isAgree" type="checkbox" /> 同意协议 </label>
  <div>isAgree: {{ isAgree }}</div>
  <hr />
  <!-- 2.2.多选框 -->
  <span>你的爱好: </span>
  <label for="basketball"> <input id="basketball" v-model="hobbies" type="checkbox" value="basketball" /> 篮球 </label>
  <label for="football"> <input id="football" v-model="hobbies" type="checkbox" value="football" /> 足球 </label>
  <label for="tennis"> <input id="tennis" v-model="hobbies" type="checkbox" value="tennis" /> 网球 </label>
  <div>hobbies: {{ hobbies }}</div>
  <hr />
  <!-- 3.radio -->
  <span>你的爱好: </span>
  <label for="male"> <input id="male" v-model="gender" type="radio" value="male" />男 </label>
  <label for="female"> <input id="female" v-model="gender" type="radio" value="female" />女 </label>
  <div>gender: {{ gender }}</div>
  <hr />
  <!-- 4.select -->
  <span>喜欢的水果: </span>
  <select v-model="fruit" multiple size="2">
    <option value="apple">苹果</option>
    <option value="orange">橘子</option>
    <option value="banana">香蕉</option>
  </select>
  <div>fruit: {{ fruit }}</div>
  <hr />
  <div style="padding-bottom: 200px">
    <h3>自定义表单和双向数据绑定</h3>
    <DemoInput v-model="message" v-model:title.upperCase="title" />
    <h3>
      <span>{{ message }}</span>
    </h3>
    <h3>
      <span>{{ title }}</span>
    </h3>
  </div>
</template>

<script setup lang="ts">
/**
 * 双向数据绑定
 */
import { ref } from 'vue';
import DemoInput from './components/DemoInput.vue';

const title = ref('is title');
function inputChange(event: Event) {
  title.value = (<HTMLInputElement>event.target).value;
}

const intro = ref('Hello World');
const isAgree = ref(false);
const hobbies = ref(['basketball']);
const gender = ref('');
const fruit = ref(['orange']);

// 双向数据绑定
const message = ref('hello_vue3');
</script>

<style lang="scss">
span {
  background-color: bisque;
}
</style>
