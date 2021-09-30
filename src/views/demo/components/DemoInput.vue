<template>
  <div>
    <input :value="inputValue" @input="inputChange" />
    <input v-model="titleValue" />
    <!-- 绑定到props中是不对的, props 应该是只读的 -->
    <!-- <input v-model="props.modelValue" /> -->
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

interface Modifiers {
  camelCase: boolean;
  upperCase: boolean;
}

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  modelModifiers: {
    type: Object as PropType<Modifiers>,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  },
  titleModifiers: {
    type: Object as PropType<Modifiers>,
    default: () => ({})
  }
});

const emits = defineEmits(['update:modelValue', 'update:title']);

const inputValue = computed(() => handModifiers(props.modelModifiers, props.modelValue));

const titleValue = computed({
  set(val: string) {
    val = handModifiers(props.titleModifiers, val);
    emits('update:title', val);
  },
  get() {
    return handModifiers(props.titleModifiers, props.title);
  }
});

function inputChange(e: Event) {
  let value = (<HTMLInputElement>e.target).value;
  value = handModifiers(props.modelModifiers, value);
  emits('update:modelValue', value);
}

const handModifiers = (modifiers: Modifiers, value: string) => {
  if (modifiers.camelCase) {
    value = value.replace(/_./g, (a) => {
      return a[1].toUpperCase();
    });
  }
  if (modifiers.upperCase) {
    value = value.toUpperCase();
  }
  return value;
};
</script>
