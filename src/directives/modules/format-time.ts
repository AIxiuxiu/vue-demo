import dayjs from 'dayjs';
import { App, DirectiveBinding } from 'vue';

export default function (app: App<Element>) {
  app.directive('format-time', {
    created(el: any, bindings: DirectiveBinding) {
      if (!bindings.value) {
        bindings.value = 'YYYY-MM-DD HH:mm:ss';
      }
    },
    mounted(el: any, bindings: DirectiveBinding) {
      const textContent = el.textContent;
      let timestamp = parseInt(textContent);
      if (textContent.length === 10) {
        timestamp = timestamp * 1000;
      }
      el.textContent = dayjs(timestamp).format(bindings.value);
    }
  });
}
