<template>
  <input
    type="text"
    v-model="txt"
    placeholder="请输入内容"
    class="p-2 w-full border my-2"
    @keyup.enter="save"
  />
  <ul>
    <li v-for="item in list">{{ item.txt }}</li>
  </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { todo } from './data';
const txt = ref('');
const list = ref<todo[]>([]);
const save = () => {
  // 在vue3中没有this
  if (txt.value) {
    list.value.push({
      id: Date.now(),
      txt: txt.value,
    });
    txt.value = '';
  }
};
</script>
