import { ref, watch } from 'vue';

export default function (key: string, value?: any) {
  const data = ref(value);

  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    value = localStorage.getItem(key);
    data.value = value ? JSON.parse(value) : '';
  }

  watch(data, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
  });

  return data;
}

// 一个参数: 取值
// const data = useLocalStorage("name");

// // 二个参数: 保存值
// const data = useLocalStorage("name", "value");

// data.value = "value";
