<template>
  <div class="flex p-8 pb-2">
    <div :style="{ background: item.color }" class="w-100px h-100px" v-for="(item, index) in SummerColors" :key="index"></div>
  </div>
  <div class="flex p-8">
    <div :style="{ background: item.color }" class="w-100px h-100px" v-for="(item, index) in SummerFestivalsColors" :key="index"></div>
  </div>
</template>

<script setup lang="ts">
import { SummerColors, SummerFestivalsColors } from './components/data'
</script>

<style scoped></style>
