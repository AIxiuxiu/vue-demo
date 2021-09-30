/*
 * @Description: 使用 vuex state
 * @Author: ahl
 * @Date: 2021-09-29 16:35:28
 * @LastEditTime: 2021-09-30 10:08:36
 */
import { computed, ComputedRef } from 'vue';
import { createNamespacedHelpers, mapState, useStore } from 'vuex';
import { StoreModuleName } from '../store/types';
import { StateExampleMapper } from '../store/types/example-type';
import { StateTokenMapper } from '../store/types/token-type';
/**
 * 使用 vuex state
 * @param moduleName  modules 命名空间
 * @param mapper 属性名数组
 * @returns storeState 是一个对象， key是字符串， value值是ref对象
 */

export const useState = function (moduleName: StoreModuleName, mapper: string[] | Record<string, string>) {
  let mapFn = mapState;
  if (moduleName) {
    mapFn = createNamespacedHelpers(moduleName).mapState;
  }
  const store = useStore();
  const mapFns = mapFn(mapper as any);
  const storeState: {
    [k: string]: ComputedRef<any>;
  } = {};
  Object.keys(mapFns).forEach((keyFn) => {
    const fn = mapFns[keyFn].bind({ $store: store });
    storeState[keyFn] = computed(fn);
  });
  return storeState;
};

/**
 * 直接指定 moduleName 的 state
 */
export const useStateExample = (mapper: StateExampleMapper) => useState(StoreModuleName.EXAMPLE, mapper);
export const useStateToken = (mapper: StateTokenMapper) => useState(StoreModuleName.TOKEN, mapper);
