<template>
  <div>
    <button type="button" @click="getNewsList">获取 mock 数据</button>
    <button type="button" @click="getNewsList1">获取 mock 数据1</button>

    <div>
      <p v-for="(item, index) in news" :key="index">{{ item.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCurrentInstance from '@/hooks/useCurrentInstance';
import { ref } from 'vue';
import { ExampleApi } from '../../apis/exampleApi';

const { $http } = useCurrentInstance();

let news = ref<{ title: string }[]>([]);

const getNewsList1 = async () => {
  const res = await ExampleApi.getNews();
  news.value = res.data.list;
};

const getNewsList = () => {
  Promise.all([
    $http.get('news/list', {
      baseURL: '/mock/'
    }),
    $http.get('news/list', {
      baseURL: '/mock/'
    })
  ]).then((res) => {
    news.value = res[0].data.list.concat([{ title: '---------------' }]).concat(res[1].data.list);
  });
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: 300px;
}
</style>
