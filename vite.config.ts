import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import createVitePlugins from './vite/plugins';

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  // 全局 scss 资源
  const scssResources = [];
  fs.readdirSync('src/assets/styles/resources').map((dirname) => {
    if (fs.statSync(`src/assets/styles/resources/${dirname}`).isFile()) {
      scssResources.push(`@import "src/assets/styles/resources/${dirname}";`);
    }
  });
  return defineConfig({
    base: './',
    // 开发服务器选项 https://cn.vitejs.dev/config/#server-options
    server: {
      port: 4188,
      open: true,
      proxy: {
        '/proxy': {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY == 'true',
          rewrite: (path) => path.replace(/\/proxy/, '')
        }
      }
    },
    // 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
    build: {
      outDir: `dist/${mode}`,
      sourcemap: env.VITE_BUILD_SOURCEMAP == 'true',
      terserOptions: {
        compress: {
          drop_console: env.VITE_BUILD_DROP_CONSOLE == 'true'
        }
      }
    },
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: scssResources.join('')
        }
      }
    }
  });
};
