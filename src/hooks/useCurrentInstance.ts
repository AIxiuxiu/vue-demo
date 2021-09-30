/*
 * @Description: 全局变量 globalProperties
 * @Author: ahl
 * @Date: 2021-09-28 17:43:19
 * @LastEditTime: 2021-09-29 10:41:21
 */

import { ComponentCustomProperties, ComponentInternalInstance, getCurrentInstance } from 'vue';

export default function useCurrentInstance() {
  // ctx 只是为了便于在开发模式下通过控制台检查，在 prod 模式是一个空对象
  const { appContext, proxy } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties as ComponentCustomProperties;
  return {
    proxy: proxy || {}, //尽量不要使用proxy
    globalProperties,
    $http: globalProperties.$http,
    $dayjs: globalProperties.$dayjs,
    $eventBus: globalProperties.$eventBus
  };
}
