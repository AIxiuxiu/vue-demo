/*
 * @Description: 使用 vuex mutations
 * @Author: ahl
 * @Date: 2021-09-29 16:35:28
 * @LastEditTime: 2021-09-30 10:08:17
 */
import { createNamespacedHelpers, mapMutations, MutationMethod, useStore } from 'vuex';
import { StoreModuleName } from '../store/types';
import { MutationExampleMapper } from '../store/types/example-type';
import { MutationTokenMapper } from '../store/types/token-type';

/**
 * 使用 vuex mutations
 * @param moduleName  modules 命名空间
 * @param mapper 方法名
 * @returns storeMutations是一个对象， key是字符串， value值是MutationMethod 方法
 */
export const useMutations = function (moduleName: StoreModuleName, mapper: string[] | Record<string, string>) {
  let mapFn = mapMutations;
  if (moduleName) {
    mapFn = createNamespacedHelpers(moduleName).mapMutations;
  }
  const store = useStore();
  const mapFns = mapFn(mapper as any);
  const storeMutations: {
    [k in string]: MutationMethod;
  } = {};
  Object.keys(mapFns).forEach((keyFn) => {
    storeMutations[keyFn] = mapFns[keyFn].bind({ $store: store });
  });
  return storeMutations;
};

/**
 * 直接指定 moduleName 的 mutations
 */
export const useMutationsExample = (mapper: MutationExampleMapper) => useMutations(StoreModuleName.EXAMPLE, mapper);
export const useMutationsToken = (mapper: MutationTokenMapper) => useMutations(StoreModuleName.TOKEN, mapper);
