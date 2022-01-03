<template>
  <div class="main-wrapper">
    <el-container>
      <side-bar></side-bar>
      <el-container class="flex-col">
        <top-bar></top-bar>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clientHeight = ref(0)
clientHeight.value = document.documentElement.clientHeight

let mainHeight = clientHeight.value + 'px'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303133;
}
body {
  margin: 0;
}
.text-regular {
  color: #606266;
  font-size: 16px;
}
.text-secondary {
  color: #909399;
  font-size: 14px;
}
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
.cur-pointer {
  cursor: pointer;
}
.el-header {
  background-color: #bad4ee;
  color: var(--el-text-color-primary);
  line-height: 60px;
  font-size: 16px;
}

.el-aside {
  color: var(--el-text-color-primary);
}
</style>

<style lang="scss" scoped>
.main-wrapper {
  // padding: 20px 20px 10px 20px;
  height: v-bind('mainHeight');
}
:deep(.el-container) {
  height: 100%;
}
:deep(.el-main) {
  padding: 10px 20px 10px;
}
</style>
