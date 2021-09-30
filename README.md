# vue3 学习

## 环境搭建

### 安装 Node 环境

下载最新稳定版本安装即可（node12 以上版本）
安装 node.js [下载地址](https://nodejs.org/zh-cn/download/)https://nodejs.org/zh-cn/
打开命令端输入 `node -v 和 npm -v` 打印版本号即安装成功

### 安装依赖

npm 默认和 node 一起安装，但使用时需要代理，不然有些可能无法下载，推荐使用[yarn](https://yarn.bootcss.com/)

```shell
# 安装yarn
npm install -g yarn
# 查看版本
yarn -v
```

## composition api

从 options api 切换到 composition api 最大的问题无异于最大的问题就是没有强制的代码分区，如果书写的人没有很好的代码习惯，代码将会很难维护

最好遵循一定规范：

- 组件抽离：将页面拆成两个文件夹，一个为 views，一个为 components。views 和 components 文件夹下有各自的文件。views 文件夹中为页面入口，掌管数据，而 components 则为页面中一些组件抽离。如果是公共组件，再抽离到 components 文件夹下其他位置

- hook 抽离：尽可能将逻辑抽离，并不一定要进行复用。

## 已完成功能

- 结合 插件、ESlint 、stylelint 、Git 钩子，实现团队代码规范
- 集成 vue-router
- 已集成 vuex
- 全局 SCSS 资源引入
- 全局组件自动注册
- 支持 SVG 图标
- 支持 mock 数据，可摆脱后端束缚独立开发
- 支持 gzip / brotli 优化项目体积，提高加载速度

## 代码文件自动生成

基于 [plop](https://www.npmjs.com/package/plop) 实现

模板默认提供了 3 种模式，通过 pnpm run new 指令可以自行选择。

- page 页面文件
- component 组件文件
- store Vuex 全局状态文件

## 目录

```
├── dist/           // 打包后的项目文件
├── publish/        // 不会被打包处理的静态资源
└── src/
  ├── apis/           // 接口请求目录
  ├── assets/         // 静态文件目录：包含字体、图标、图片、样式等静态资源
  ├── common/         // 通用类库目录
  ├── components/     // 公共组件目录
  ├── directives/     // 全局指令目录
  ├── hooks/          // 全局hooks目录
  ├── layout/         // 布局组件目录
  ├── mock/           // 模拟数据mock目录
  ├── router/         // 路由配置目录
  ├── store/          // 状态管理vuex目录
  ├── types/          // 类型声明目录
  ├── style/          // 通用 CSS 目录
  ├── utils/          // 工具函数目录
  ├── views/          // 页面组件目录
  ├── App.vue         // 页面入口文件
  └── main.ts         // 主入口
├── env.d.ts        // vue声明
├── index.html      // 入口页面
├── .env.*          // 配置文件
├── .eslintrc.js    // eslint配置
├── .prettierrc     // perttier配置
├── .stylelintrc    // stylelint配置
├── tsconfig.json   // TypeScript 配置文件
├── vite.config.ts  // Vite 配置文件
├── package.json    // 项目基本信息和依赖
└── README.md       // 项目说明

```

## 命名规范

一般文件夹命名使用 kebab-case 命名
局通用的组件放在 /src/components 下使用单词大写开头 (PascalCase)， 其它.vue 文件统一大写开头（Pascal case）

除 index.vue 之外，其他.vue 文件统一用 PascalBase 风格

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)

## 其他

[vue3 文档](https://v3.cn.vuejs.org)
[Vue3 One Piece](https://vue3js.cn)
[风格指南](https://v3.cn.vuejs.org/style-guide/)

[typescript 文档](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)
[TypeScript 入门教程](https://ts.xcatliu.com)

[做了一夜动画，就为让大家更好的理解 Vue3 的 Composition Api](https://mp.weixin.qq.com/s/UZGnk8vhyXuSUFhH6nXHTA)
[Vue2.x Vue3.0 dom diff 算法源码分析+动图展示](https://segmentfault.com/a/1190000023774485)
[Vue3 的 Proxy 能做到哪些精确的拦截操作？原理揭秘](https://zhuanlan.zhihu.com/p/148937064)
[Vue3.x 知识图谱](https://gitee.com/jishupang/vue3-knowledge-map)
