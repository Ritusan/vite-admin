<template>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clientHeight = ref(0)

clientHeight.value = document.documentElement.clientHeight - 60 - 40

let mainHeight = clientHeight.value + 'px'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>

<style lang="scss" scoped>
.main-wrapper {
  padding: 20px 20px 10px 20px;
  min-height: v-bind('mainHeight');
}
</style>
