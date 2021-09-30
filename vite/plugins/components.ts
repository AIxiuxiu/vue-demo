import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

/**
 * 组件自动按需导入
 */
export default function createComponents() {
  return Components({
    dts: true,
    dirs: ['src/components'],
    resolvers: [ElementPlusResolver()]
  });
}
