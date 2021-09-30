<template>
  <el-container style="height: 100vh">
    <el-aside width="200px">
      <el-menu style="height: 100%" router>
        <el-menu-item v-for="(menu, index) in menus" :key="index" :route="{ path: menu.path }" :index="menu.path">
          {{ menu.title }}
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const menus = reactive([
  { title: 'svg icon', path: '/example/svgicon' },
  { title: '全局组件', path: '/example/globalComponent' },
  { title: 'axios', path: '/example/axios' },
  { title: 'vuex', path: '/example/vuex' },
  { title: '组件', path: '/example/component' },
  { title: '路由params', path: '/example/params' },
  { title: '刷新当前页面', path: '/example/reload' }
  // { title: 'router鉴权', path: '/example/permission/router' }
]);
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}
.el-aside {
  color: var(--el-text-color-primary);
}
</style>
