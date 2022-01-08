<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>便捷入口</span>
        <el-button class="button" type="text">更多</el-button>
      </div>
    </template>
    <div
      v-for="(item, index) in navItems"
      :key="index"
      class="nav-item cursor-pointer"
      @click="gotoDetail(item.url)"
    >
      <div class="flex flex-col items-center">
        <!-- <span>{{ item.icon }}</span> -->
        <el-icon :size="20" :color="item.color"><component :is="item.icon"></component></el-icon>
        <span class="text-md mt-2">{{ item.title }}</span>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { navItems } from './data'
import { useRouter } from 'vue-router'

const router = useRouter()
const gotoDetail = (url: string) => {
  router.push(url)
}
</script>

<style scoped lang="scss">
.box-card {
  margin-bottom: 1em;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-item {
  padding: 20px;
  box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0, 1px 0 0 0 #f0f0f0 inset,
    0 1px 0 0 #f0f0f0 inset;
  transition: all 0.3s;
  box-sizing: border-box;
  flex-basis: 33.33333%;
  &:hover {
    z-index: 1;
    box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  }
}
:deep(.el-card__header) {
  padding: 10px 20px;
}
:deep(.el-card__body) {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
</style>
