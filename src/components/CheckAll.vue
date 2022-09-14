<template>
  <div class="gap-y-2 flex flex-col">
    <label><input type="checkbox" v-model="checkAll" />全选</label>
    <hr />
    <ul>
      <li v-for="item in list" :key="item.id" class="my-2">
        <label
          ><input type="checkbox" v-model="item.chk" />{{ item.txt }}</label
        >
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';

type IItem = {
  id: number;
  txt: string;
  chk: boolean;
};

const list = ref<IItem[]>([
  {
    id: 1,
    txt: '商品1',
    chk: false,
  },
  {
    id: 2,
    txt: '商品2',
    chk: false,
  },
  {
    id: 3,
    txt: '商品3',
    chk: true,
  },
  {
    id: 4,
    txt: '商品4',
    chk: false,
  },
]);

// 计算属性实现
const checkAll = computed({
  set(v: boolean) {
    list.value.forEach((item) => (item.chk = v));
  },
  get() {
    return list.value.every((item) => item.chk);
  },
});
</script>
