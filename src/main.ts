// 全局样式
import '@/assets/styles/globals.scss';
import router from '@/router';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import mitt from 'mitt';
// 加载 svg 图标
import 'virtual:svg-icons-register';
import { App, createApp } from 'vue';
import http from './apis';
import AppVue from './App.vue';
import registerDirectives from './directives';
import store from './store';

const app: App<Element> = createApp(AppVue);

app.use(router);
app.use(store);

// http
app.config.globalProperties.$http = http;
// dayjs 时间库
dayjs.locale('zh-cn');
app.config.globalProperties.$dayjs = dayjs;
// 全局事件 $eventBus
app.config.globalProperties.$eventBus = mitt();

// 注册全局指令
registerDirectives(app);

app.mount('#app');
