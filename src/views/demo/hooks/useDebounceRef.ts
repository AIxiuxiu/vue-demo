import { customRef } from 'vue';

// 自定义
export default function (value: string, delay = 300) {
  let timer: any = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: string) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    };
  });
}
