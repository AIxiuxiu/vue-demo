import { createLogger, createStore, ModuleTree } from 'vuex';

const modules: ModuleTree<void> = {};
const modulesContext = import.meta.globEager('./modules/*.ts');
for (const path in modulesContext) {
  modules[path.slice(10, -3)] = modulesContext[path].default;
}

/**
 * store 自动注册
 * 使用方式
 */
export default createStore({
  modules,
  strict: !import.meta.env.PROD,
  plugins: !import.meta.env.PROD ? [createLogger()] : []
});
