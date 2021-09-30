<template>
  <div style="padding: 10px">
    <h1>模板语法</h1>
    <!-- 1.mustache的基本使用 -->
    <div>{{ message }} - {{ message }}</div>
    <!-- 2.是一个表达式 -->
    <div>{{ message.split(' ').reverse().join(' ') }}</div>
    <div>{{ num * 10 }}</div>
    <!-- 3.也可以调用函数 -->
    <!-- 可以使用computed(计算属性) -->
    <div>{{ getReverseMessage() }}</div>
    <!-- 4.三元运算符 -->
    <div>{{ isShow ? '三元展示' : '' }}</div>
    <button @click="toggleShow">切换</button>

    <h1>指令使用， <a href="https://v3.cn.vuejs.org/api/directives.html" target="_blank">文档</a></h1>
    <div>
      <h2>v-once 指定元素或者组件只渲染一次</h2>
      <div v-once>v-once:{{ counter }}</div>
      <div>{{ counter }}</div>
      <button @click="increment">+1</button>
    </div>
    <div>
      <h2>v-text 更新textContent</h2>
      <div v-text="message"></div>
      <!-- 等价于 -->
      <!-- <h3>{{message}}</h3> -->
    </div>
    <div>
      <h2>v-html 用于展示 html</h2>
      <div v-html="htmlmsg"></div>
    </div>
    <div>
      <h2>v-cloak 隐藏未编译的 Mustache 标签直到组件实 例准备完毕</h2>
      <div v-cloak>{{ message }}</div>
    </div>
    <div>
      <h2>v-bind 动态绑定属性， 缩写：“:”， <a href="https://v3.cn.vuejs.org/api/directives.html#v-bind" target="_blank">文档</a></h2>
      <img style="width: 100px" :src="imgUrl" alt="" />
      <a :href="link" target="_blank">百度一下</a>
      <hr />
      <h2>v-bind 绑定class</h2>
      <div :class="className">v-bind设置的class</div>
      <!-- 对象语法: {'active': boolean} -->
      <div :class="{ active: isActive }">active 样式</div>
      <button @click="toggleClass">切换</button>

      <!-- 也可以有多个键值对 -->
      <div :class="{ active: isActive, title: true }">title 样式</div>

      <!-- 默认的class和动态的class结合 -->
      <div class="desc" :class="{ active: isActive, title: true }">title 和 desc 样式</div>

      <!-- 将对象放到一个单独的属性中 -->
      <div class="desc" :class="classObj">对象绑定class</div>

      <!-- 将返回的对象放到一个methods(computed)方法中 -->
      <div class="desc" :class="getClassObj()">方法绑定class</div>
      <!-- style 中使用v-bind -->
      <div class="bind-text">v-bind来修改css</div>
      <button @click="changeClass">修改样式</button>
      <!-- v-bind绑定class-数组语法 -->
      <div :class="['desc', title]">数据绑定class</div>
      <div :class="['desc', title, isActive ? 'active' : '']">数据绑定class</div>
      <div :class="['desc', title, { active: isActive }]">数据绑定class</div>
      <hr />
      <h2>v-bind绑定style</h2>
      <div :style="{ color: finalColor, 'font-size': '15px' }">修改style</div>
      <div :style="{ color: finalColor, fontSize: '15px' }">修改style</div>
      <div :style="{ color: finalColor, fontSize: finalFontSize + 'px' }">修改style</div>

      <!-- 绑定一个data中的属性值, 并且是一个对象 -->
      <div :style="finalStyleObj">对象修改style</div>
      <!-- 调用一个方法修改style -->
      <div :style="getFinalStyleObj()">方法修改style</div>
      <!-- 数组修改style -->
      <div :style="[style1Obj, style2Obj]">数组修改style</div>
    </div>
    <hr />
    <div>
      <h2>v-on 绑定事件，缩写：“@”，文档：https://v3.cn.vuejs.org/api/directives.html#v-on</h2>
      <!-- 完整写法: v-on:监听的事件="methods中方法；语法糖使用@"

      -->
      <!-- 默认传入event对象, 可以在方法中获取 -->
      <button @click="btn1Click" @mousemove="mouseMove">按钮1</button>
      <div class="area" @mousemove="mouseMove">div</div>
      <!-- 绑定一个表达式: inline statement -->
      <button @click="counter++">{{ counter }}</button>
      <!-- 绑定一个对象 -->
      <div class="area" v-on="{ click: btn1Click, mousemove: mouseMove }"></div>
      <!-- <div class="area" @="{click: btn1Click, mousemove: mouseMove}"></div> -->
      <!-- $event可以获取到事件发生时的事件对象 -->
      <button @click="btn2Click($event, 'coderwhy', 18)">按钮2</button>
      <!-- v-on的修饰符 -->
      <div @click="divClick">
        <button @click.stop="btnClick">按钮</button>
      </div>
      <!-- 键盘回车事件 -->
      <input type="text" @keyup.enter="enterKeyup" />
    </div>
  </div>
  <hr />
  <div>
    <h2>v-if与v-show条件指令</h2>
    <h3 v-if="isShow">v-if</h3>
    <button @click="toggleShow">切换</button>
    <!-- 多个条件的渲染 if-else -->
    <input v-model="score" type="text" />
    <h2 v-if="score > 90">优秀</h2>
    <h2 v-else-if="score > 60">良好</h2>
    <h2 v-else>不及格</h2>
    <!-- template和v-if结合使用 -->
    <!-- template 不可见的标签，不能使用v-show -->
    <template v-if="isShow">
      <h3>哈哈哈哈</h3>
      <h3>哈哈哈哈</h3>
      <h3>哈哈哈哈</h3>
    </template>

    <template v-else>
      <h3>呵呵呵呵</h3>
    </template>
    <!-- v-show只是设置样式display:none，一直会渲染，如果在一些场景下很难出现，那么使用v-if。如果是一些固定的，条件内容都不怎么会改变的，频繁切换的，使用v-show会比较省性能。如果是子组件，每次切换子组件不执行生命周期，使用v-show，如果子组件需要重新执行生命周期，那么使用v-if才能触发。-->
    <h3 v-show="isShow">v-show</h3>
  </div>
  <hr />
  <div>
    <h2>v-for 列表渲染</h2>
    <h3>电影列表</h3>
    <ul>
      <!-- 遍历数组 -->
      <li v-for="(movie, index) in movies" :key="index">{{ index + 1 }}.{{ movie }}</li>
    </ul>
    <input v-model="newMovie" type="text" />
    <button @click="addMovie">添加电影</button>
    <h3>个人信息</h3>
    <ul>
      <!-- 遍历对象 -->
      <li v-for="(value, key, index) in info" :key="index">{{ value }}-{{ key }}-{{ index }}</li>
    </ul>
    <h3>遍历数字</h3>
    <ul>
      <li v-for="(number, index) in 10" :key="index">{{ number }}-{{ index }}</li>
    </ul>
    <h3>template 循环</h3>
    <ul>
      <template v-for="(value, key) in info" :key="key">
        <li>{{ key }}</li>
        <li>{{ value }}</li>
        <li>--------------</li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
/**
 * 模板和基本指令
 */
import { reactive, ref } from 'vue';

// 模板
const message = ref('hello vue3');
function getReverseMessage() {
  return message.value.split(' ').reverse().join(' ');
}

// const getReverseMessage = () => {
//   return message.value.split(' ').reverse().join(' ');
// };

const num = ref(100);

const isShow = ref(true);
const toggleShow = () => {
  isShow.value = !isShow.value;
};

// 指令
const counter = ref(1);
const increment = () => {
  counter.value++;
};
const htmlmsg = ref('<span style="color:red; background: blue;">一段html代码</span>');

// v-bind
const imgUrl = ref('https://v3.vuejs.org/logo.png');
const link = ref('https://www.baidu.com');
// v-bind class
const className = ref('bind-class');
const isActive = ref(true);
const classObj = reactive({
  active: true,
  title: true
});
const getClassObj = () => {
  return {
    active: true,
    title: true
  };
};

const title = ref('title');
const toggleClass = () => {
  isActive.value = !isActive.value;
};

// 修改css
let color = ref('red');
const font = reactive({
  size: '30px'
});
const changeClass = () => {
  color.value = 'blue';
  font.size = '50px';
};

// v-bind绑定style
const finalColor = ref('red');
const finalFontSize = ref(30);
const finalStyleObj = reactive({
  'font-size': '30px',
  fontWeight: 700,
  backgroundColor: 'red'
});
const getFinalStyleObj = () => {
  return {
    'font-size': '30px',
    fontWeight: 700,
    backgroundColor: 'red'
  };
};
const style1Obj = reactive({
  color: 'red',
  fontSize: '30px'
});
const style2Obj = reactive({
  textDecoration: 'underline'
});

// v-on 绑定事件
const btn1Click = (event: MouseEvent) => {
  console.log((<HTMLElement>event.target).innerText + '发生了点击');
};
const mouseMove = (event: MouseEvent) => {
  console.log(`鼠标移动 x:${event.x} y:${event.y}`);
};
const btn2Click = (event: Event, name: string, age: number) => {
  console.log(name, age, event);
};
const divClick = () => {
  console.log('divClick');
};
const btnClick = () => {
  console.log('btnClick');
};
const enterKeyup = (event: KeyboardEvent) => {
  console.log('keyup', (<HTMLInputElement>event.target).value);
};

// 条件指令
const score = ref(95);

// v-for
const movies = ref(['美丽人生', '盗梦空间', '大话西游', '千与千寻']);
const newMovie = ref('');
const addMovie = () => {
  movies.value.push(newMovie.value);
  newMovie.value = '';
  movies.value = movies.value.filter((item) => item.length > 2);
};

const info = reactive({
  name: '剑仙',
  age: 18,
  height: 1.88
});
</script>

<!-- scoped 样式作用于当前组件 -->
<style scope lang="scss">
//scss
[v-cloak] {
  display: none;
}
.bind-class {
  color: greenyellow;
}
.title {
  font-size: 28px;
  color: darkmagenta;
}
.desc {
  background-color: #3498db;
}
.bind-text {
  color: v-bind(color);
  font-size: v-bind('font.size');
}
.active {
  color: red;
}
.area {
  width: 200px;
  height: 80px;
  background: red;
}

// 基础样式
h1 {
  font-size: 1.75em;
  color: #3498db;
  border-bottom: 1px solid #efeaea;
}
h2 {
  font-size: 1.5em;
  color: #1abc9c;
}
h3 {
  font-size: 1.25em;
  color: #f39c12;
}
</style>
