<template>
  <div>
    <el-card class="box-card">
      <div v-for="(item, index) in colorList" :key="index" class="w-100px h-60px" :style="{ background: item.color }">
        
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const colorList = reactive([
  {
    title: 'Flower',
    icon: 'mdi:flower',
    color: '#e098ba',
    desc: '跟我一起去认识生活中的五彩。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Music',
    icon: 'clarity:music-note-solid',
    color: '#c59abf',
    desc: '你说你喜欢猫，我带你去猫咖。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Mood',
    icon: 'noto-v1:sunflower',
    color: '#e18525',
    desc: '这世界有很多的美好等待你去探索。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Weather',
    icon: 'bi:sun-fill',
    color: '#f7ca11',
    desc: '不如跟我走，带你去兜风。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Photo',
    icon: 'emojione:camera-with-flash',
    color: '#c59abf',
    desc: '我摘下星星⭐️为你营业。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Seasons',
    icon: 'bi:snow',
    color: '#81a0d3',
    desc: '你所有心愿，他都能实现。',
    group: 'winter',
    date: '2022-01-02',
  },
])
</script>

<style scoped lang="scss"></style>
