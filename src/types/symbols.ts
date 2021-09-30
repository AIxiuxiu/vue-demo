/**
 * Inject 类型说明
 */

import { InjectionKey, Ref } from 'vue';

export const ThemeKey: InjectionKey<Ref<string>> = Symbol('theme');

export const ProductKey: InjectionKey<Product> = Symbol('Product');

export const ReloadKey: InjectionKey<Function> = Symbol('Reload');
