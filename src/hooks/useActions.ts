/*
 * @Description: 使用 vuex actions
 * @Author: ahl
 * @Date: 2021-09-29 16:35:28
 * @LastEditTime: 2021-09-30 10:08:26
 */
import { ActionMethod, createNamespacedHelpers, mapActions, useStore } from 'vuex';
import { StoreModuleName } from '../store/types';
import { ActionExampleMapper } from '../store/types/example-type';
import { ActionTokenMapper } from '../store/types/token-type';

/**
 * 使用 vuex actions
 * @param moduleName  modules 命名空间
 * @param mapper 方法名数组
 * @returns storeActions是一个对象， key是字符串， value值是ActionMethod 方法
 */
export const useActions = function (moduleName: StoreModuleName, mapper: string[] | Record<string, string>) {
  let mapFn = mapActions;
  if (moduleName) {
    mapFn = createNamespacedHelpers(moduleName).mapActions;
  }
  const store = useStore();
  const mapFns = mapFn(mapper as any);
  const storeActions: {
    [k in string]: ActionMethod;
  } = {};
  Object.keys(mapFns).forEach((keyFn) => {
    storeActions[keyFn] = mapFns[keyFn].bind({ $store: store });
  });
  return storeActions;
};

/**
 * 直接指定 moduleName 的 actions
 */
export const useActionsExample = (mapper: ActionExampleMapper) => useActions(StoreModuleName.EXAMPLE, mapper);
export const useActionsToken = (mapper: ActionTokenMapper) => useActions(StoreModuleName.TOKEN, mapper);
