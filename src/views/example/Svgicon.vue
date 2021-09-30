<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Svg Icon 图标</span>
        </div>
      </template>
      <ir-svg-icon name="example" class="example-icon" />
      <IrSvgIcon name="example" color="red" :size="20" class="example-icon" />
      <ir-svg-icon name="example.color" class="example-icon" />

      <el-divider content-position="left">使用方法：</el-divider>
      <ol>
        <li>上 <el-link type="primary" href="https://www.iconfont.cn/" target="_blank">Iconfont</el-link> 下载需要的 svg 图标</li>
        <li>将 svg 文件放入 <i class="red">assets/icons</i> 目录，文件名即为 name</li>
      </ol>
    </el-card>
  </div>
</template>

<style scoped>
.example-icon {
  font-size: 48px;
}
</style>
