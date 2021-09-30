<template>
  <div>
    <h2>{{ childText }}</h2>
    <hr />
    <div>props</div>
    <div>{{ props.size }}</div>
    <div>{{ props.user.name }}</div>
    <div>{{ props.user.age }}</div>
    <hr />
    <div>
      <h4>渲染插槽solts</h4>
      <div v-if="slotDefault">
        slotDefault
        <slot>我是默认内容</slot>
      </div>

      <div v-if="slotMsg">
        slotMsg
        <slot name="msg" />
      </div>
      <div>
        <slot name="other" :msg="theme" />
      </div>
    </div>
    <button @click="clickEmit">Emit</button>

    <h3>demo5孙组件{{ theme }}</h3>
    <DemoSon />
  </div>
</template>

<script setup lang="ts">
import { inject, ref, useAttrs, useSlots, withDefaults } from 'vue';
import { ThemeKey } from '../../../types/symbols';
import DemoSon from './DemoSon.vue';

// 对象类型接口
interface User {
  id: number;
  name: string;
  age: number;
}

// define 编译器宏 无需导入且必须直接在 setup 中外层进行使用，你无法将其放在方法中
// props
const props = withDefaults(
  defineProps<{
    size?: number;
    user: User;
  }>(),
  {
    size: 3,
    user: () => {
      return { id: 1, name: 'test', age: 18 };
    }
  }
);

const theme = inject(ThemeKey, ref('green'));

//获取 attrs 包含class、属性、方法
const attrs = useAttrs();
console.log('attrs', attrs);

//判断<slot/>是否有传值
const slotDefault = !!useSlots().default;
//判断<slot name="msg"/>是否有传值
const slotMsg = !!useSlots().msg;
console.log('slot msg is ' + slotMsg);

//获取emit
const emit = defineEmits(['change']);
// ts声明式
// const emit = defineEmits<{ (e: 'change', theme: Ref<string>): void }>();

function clickEmit() {
  emit('change', theme);
}

const childText = ref('我是子组件');
const changeChildText = () => {
  childText.value += '>>';
};
//将属性或方法暴露在组件实例上，也就是父组件可以通过ref 或者子链可以获取到子组件所有的属性、方法
defineExpose({
  childText,
  changeChildText
});
</script>
