<template>
  <div>
    <h3>theme:{{ theme }}</h3>
    <button @click="changeTheme">修改主题</button>
    <button @click="emitGolbEvent">发送全局事件</button>
  </div>
</template>

<script setup lang="ts">
import useCurrentInstance from '@/hooks/useCurrentInstance';
import { ThemeKey } from '@/types/symbols';
import { inject, ref } from 'vue';

const theme = inject(ThemeKey, ref('green'));
// 全局事件
const { $eventBus } = useCurrentInstance();
$eventBus.on('demo5Event', (e) => {
  console.log('接收到爷组件事件', e);
});

const changeTheme = inject('changeTheme') as unknown as any;

const emitGolbEvent = () => {
  console.log('孙组件发送全局事件', theme.value);
  $eventBus.emit('sonEvent', theme.value);
};
</script>
