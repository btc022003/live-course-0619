import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 1,
  }),
  actions: {
    plus() {
      this.count++;
    },
  },
});

export default useCounterStore;
