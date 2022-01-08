<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>收藏夹</span>
        <el-button class="button" type="text">更多</el-button>
      </div>
    </template>
    <div
      v-for="(item, index) in groupItems"
      :key="index"
      class="group-item cursor-pointer"
      @click="gotoDetail(item.url)"
    >
      <div class="flex items-center">
        <!-- <el-icon :size='20' :color="item.color"><component :is="item.icon"></component></el-icon> -->
        <span
          class="iconify"
          :data-icon="item.icon"
          data-width="24"
          :style="{ color: item.color }"
        ></span>
        <span class="text-lg ml-2">{{ item.title }}</span>
      </div>
      <div class="text-regular">
        <span class="mt-2 mb-2 text-ellipsis">{{ item.desc }}</span>
      </div>
      <div class="flex justify-between text-secondary">
        <span>{{ item.group }}</span>
        <span>{{ item.date }}</span>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { groupItems } from './data'

const gotoDetail = (url: string) => {
  window.open(url)
}
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
  margin-bottom: 1em;
}
.group-item {
  padding: 1em;
  box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 1px 1px 0 0 #f0f0f0, 1px 0 0 0 #f0f0f0 inset,
    0 1px 0 0 #f0f0f0 inset;
  transition: all 0.3s;
  box-sizing: border-box;
  flex-basis: 33.33333%;
  overflow: auto;
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
  // flex-direction: column;
}
</style>
