<template>
  <div class="flex p-8 pb-2">
    <div :style="{ background: item.color }" class="w-100px h-100px" v-for="(item, index) in WinterColors" :key="index"></div>
  </div>
  <div class="flex p-8">
    <div :style="{ background: item.color }" class="w-100px h-100px" v-for="(item, index) in WinterFestivalsColors" :key="index"></div>
  </div>
</template>

<script setup lang="ts">
import { WinterColors, WinterFestivalsColors } from './components/data'
</script>

<style scoped></style>
