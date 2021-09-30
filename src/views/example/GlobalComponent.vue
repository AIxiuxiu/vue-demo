<template>
  <div>
    <ir-demo demo="demo全局组件"></ir-demo>
    <el-divider content-position="left">全局组件无需手动引入，可直接使用</el-divider>
    <ol>
      <li>
        全局组件相关文件存放在 <span class="red">./src/components/ </span> 目录下，需要注意各个组件按文件夹区分，文件夹名称即为组件名，可参考
        <router-link to="/example/IrDemo"> IrDemo </router-link> 组件写法
      </li>
      <li>文件夹内必须有文件名为 index.vue 的组件入口</li>
      <li>文件夹名称已Ir开始，来说明是全局组件</li>
    </ol>
  </div>
</template>
