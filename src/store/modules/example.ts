import { ActionTree, MutationTree } from 'vuex';
import { ExampleApi } from '../../apis/exampleApi';
import { ActionExampleTypes, ExampleState, MutationExampleTypes } from '../types/example-type';

const state = (): ExampleState => ({
  news: []
});

const getters = {
  newsCount: (state: ExampleState) => {
    return state.news.length;
  }
};

const actions: ActionTree<ExampleState, ExampleState> = {
  [ActionExampleTypes.getNews]({ commit }) {
    ExampleApi.getNews().then((res) => {
      commit('setNews', res.data.list);
    });
  }
};

const mutations: MutationTree<ExampleState> = {
  [MutationExampleTypes.setNews](state: ExampleState, news: []) {
    state.news = news;
  },
  [MutationExampleTypes.removeLast](state: ExampleState) {
    state.news.splice(state.news.length - 1, 1);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
