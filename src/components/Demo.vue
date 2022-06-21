<template>
  <!-- 在vue3中组件可以不止有一个根结点 -->
  <input type="text" v-model="txt" @keyup.enter="saveHandle" />
  <h1>这是一个组件</h1>
  <p>这是另一段话</p>
  <p>{{ txt }}</p>
  <button @click="clickHandle">按钮---{{ count }}</button>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.txt }}</li>
  </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const txt = ref('abc'); // 在vue3中使用ref定义一个响应式的数据
const count = ref(1); // proxy
const list = ref<App.Item[]>([]); // TypeScript又叫AnyScript
const clickHandle = () => {
  // alert(txt.value);
  count.value += 1; // 数据在模版中可以直接取，但是在js中需要使用value属性进行获取或者修改
};
const saveHandle = () => {
  if (txt.value) {
    list.value.push({
      id: Date.now(),
      txt: txt.value,
    });
    txt.value = '';
  }
};
</script>
