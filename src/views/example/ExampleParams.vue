<template>
  <div>
    <el-divider content-position="left">路由传参</el-divider>

    <div>
      <el-tag type="info">params:</el-tag>
      <el-tag v-if="$route.params.test" type="success">{{ $route.params.test }}</el-tag>
    </div>
    <div>
      <el-tag type="info">query:</el-tag>
      <el-tag v-if="$route.query.test" type="success">{{ $route.query.test }}</el-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
console.log(route.params.test); //获取参数
console.log(route.query.test); //获取参数
//实例化路由
const router = useRouter();
console.log(router.currentRoute.value.params.test); //获取参数
console.log(router.currentRoute.value.query.test); //获取参数
</script>
