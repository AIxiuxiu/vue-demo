<template>
  <div>
    <button type="button" @click="getNews">获取数据</button>
    <button type="button" @click="removeLast">删除最后一条数据</button>
    <button type="button" @click="cleanNews">删除数据</button>
    <button type="button" @click="getLength">获取数据长度</button>
    <p v-for="(item, index) in news" :key="index">
      {{ item.title }}
    </p>
    <h3>news1</h3>
    <p v-for="(item, index) in news1" :key="index">
      {{ item.title }}
    </p>
    <strong v-if="newsCount">现在你可以切换路由，你会发现，切换回来后，数据还在。</strong>
  </div>
</template>

<script setup lang="ts">
import { useActionsExample } from '../../hooks/useActions';
import { useGettersExample } from '../../hooks/useGetters';
import { useMutationsExample } from '../../hooks/useMutations';
import { useStateExample } from '../../hooks/useState';
import { ActionExampleTypes, GetterExampleTypes, MutationExampleTypes } from '../../store/types/example-type';

const { news } = useStateExample(['news']);
const { newsCount } = useGettersExample([GetterExampleTypes.newsCount]);
const { getNews } = useActionsExample([ActionExampleTypes.getNews]);
const { setNews, removeLast } = useMutationsExample([MutationExampleTypes.setNews, MutationExampleTypes.removeLast]);

const { news1 } = useStateExample({ news1: 'news' });

const { setNews1 } = useMutationsExample({ setNews1: MutationExampleTypes.setNews });

// const store = useStore();
// // let news = computed(() => store.state.example.news);
// const newsCount = computed(() => store.getters['example/newsCount']);

// function getNews() {
//   return store.dispatch('example/getNews');
// }

// function setNews(data: any) {
//   return store.commit('example/setNews', data);
// }

// function removeLast() {
//   return store.commit('example/removeLast');
// }

function cleanNews() {
  // setNews([]);
  setNews1([]);
}

function getLength() {
  alert(newsCount.value);
}
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: 300px;
}
</style>
