// import api from '@/api'
import { ActionTree, MutationTree } from 'vuex';
import { TokenState } from '../types/token-type';

const state = (): TokenState => ({
  token: localStorage.token,
  failuretime: localStorage.failuretime
});

const getters = {
  isLogin: (state: TokenState) => {
    let retn = false;
    if (state.token != null) {
      const unix = new Date().getTime();
      if (state.failuretime && unix < state.failuretime * 1000) {
        retn = true;
      }
    }
    return retn;
  }
};

const actions: ActionTree<TokenState, TokenState> = {
  login({ commit }) {
    return new Promise((resolve) => {
      // 模拟登录成功，写入 token 信息
      commit('setData', {
        token: '1234567890',
        failuretime: new Date().getTime() / 1000 + 24 * 60 * 60
      });
      resolve(true);
    });
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      // 模拟退出登录，清除 token 信息
      commit('removeData');
      resolve(true);
    });
  }
};

const mutations: MutationTree<TokenState> = {
  setData(state: TokenState, data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('failuretime', data.failuretime);
    state.token = data.token;
    state.failuretime = data.failuretime;
  },
  removeData(state: TokenState) {
    localStorage.removeItem('token');
    localStorage.removeItem('failuretime');
    state.token = null;
    state.failuretime = null;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
