<template>
  <div>
    <div>点击进入<router-link :to="{ path: '/example/params/param/123' }"> id传参 </router-link></div>
    <div>点击进入<router-link :to="{ name: 'Params', params: { test: 12345 } }"> params传参 </router-link></div>
    <div>点击进入<router-link :to="{ path: '/example/params/query', query: { test: 1234567 } }"> query传参 </router-link></div>

    <el-button size="mini" type="primary" @click="pathParams('路径传参')">路径传参</el-button>
    <el-button size="mini" type="primary" @click="paramsParams('params传参')">params传参</el-button>
    <el-button size="mini" type="primary" @click="queryParams('query传参')">query传参</el-button>
    <div style="background-color: white">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const pathParams = (test: string) => {
  router.push({
    path: `/example/params/param/${test}`
  });
};

const paramsParams = (test: string) => {
  router.push({
    // path: `/example/params/param`, //失败
    name: 'Params',
    params: {
      test: test
    }
  });
};

const queryParams = (test: string) => {
  router.push({
    path: `/example/params/query`,
    query: {
      test: test
    }
  });
};
</script>
