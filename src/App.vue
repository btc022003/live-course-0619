<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue';
import Demo from './components/Demo.vue';
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <Demo /> -->
  <router-link :to="{ name: 'Home' }">【首页】</router-link>
  <router-link :to="{ name: 'List' }">【列表】</router-link>
  <router-link :to="{ name: 'About' }">【关于】</router-link>
  <router-link :to="{ name: 'Todos' }">【TodoList】</router-link>
  <hr />
  <router-view></router-view>
</template>

<style></style>
