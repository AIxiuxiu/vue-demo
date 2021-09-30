/*
 * @Description: 使用 vuex getters
 * @Author: ahl
 * @Date: 2021-09-29 16:35:28
 * @LastEditTime: 2021-09-30 10:11:13
 */
import { computed, ComputedRef } from 'vue';
import { createNamespacedHelpers, mapGetters, useStore } from 'vuex';
import { StoreModuleName } from '../store/types';
import { GetterExampleMapper } from '../store/types/example-type';
import { GetterTokenMapper } from '../store/types/token-type';

/**
 * 使用 vuex getters
 * @param moduleName  modules 命名空间
 * @param mapper 方法名
 * @returns storeGetters是一个对象， key是字符串，value值是ref对象
 */
export const useGetters = function (moduleName: StoreModuleName, mapper: string[] | Record<string, string>) {
  let mapFn = mapGetters;
  if (moduleName) {
    mapFn = createNamespacedHelpers(moduleName).mapGetters;
  }
  const store = useStore();
  const mapFns = mapFn(mapper as any);
  const storeGetters: {
    [k: string]: ComputedRef<any>;
  } = {};
  Object.keys(mapFns).forEach((keyFn) => {
    const fn = mapFns[keyFn].bind({ $store: store });
    storeGetters[keyFn] = computed(fn);
  });

  return storeGetters;
};

/**
 * 直接指定 moduleName 的 getters
 */
export const useGettersExample = (mapper: GetterExampleMapper) => useGetters(StoreModuleName.EXAMPLE, mapper);
export const useGettersToken = (mapper: GetterTokenMapper) => useGetters(StoreModuleName.TOKEN, mapper);
