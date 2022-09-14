import { ref } from "vue";
import { defineStore } from "pinia";

// option写法
// export default defineStore("counter", {
//   state: () => ({
//     count: 1,
//   }),
//   actions: {
//     plus() {
//       this.count++;
//     },
//   },
// });

type IList = {
  name: string;
  id: string;
}[];

// setup写法
export default defineStore("counter", () => {
  const count = ref(10);
  const list = ref<IList>([]);
  const plus = () => count.value++;
  fetch("http://sails.penkuoer.com/api/v1/products?per=20")
    .then((res) => res.json())
    .then((res) => {
      list.value = res.data;
    });
  return { count, plus, list };
});
// export default useCounterStore;
