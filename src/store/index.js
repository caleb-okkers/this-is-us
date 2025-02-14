import axios from "axios";

export default {
  namespaced: true,
  state: {
    memories: [],
  },
  mutations: {
    SET_MEMORIES(state, data) {
      state.memories = data;
    },
  },
  actions: {
    async fetchMemories({ commit }) {
      try {
        const response = await axios.get(
          "https://caleb-okkers.github.io/this-is-us-api/"
        );
        commit("SET_MEMORIES", response.data);
      } catch (error) {
        console.error("Error fetching memories:", error);
      }
    },
  },
  getters: {
    getYears: (state) => state.memories,
    getMonths: (state) => (year) => {
      const foundYear = state.memories.find((y) => y.year === year);
      return foundYear ? foundYear.months : [];
    },
  },
};
