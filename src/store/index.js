import { createStore } from 'vuex';

const initialState = {
  count: 1
};

export const store = createStore({
  state: initialState,
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {},
  modules: {}
});
