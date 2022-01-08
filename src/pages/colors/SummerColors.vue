<template>
  <color-list :color-list="SummerColors"></color-list>
  <color-list :color-list="SummerFestivalsColors"></color-list>
</template>

<script setup lang="ts">
import { SummerColors, SummerFestivalsColors } from './components/data'
import ColorList from './components/ColorList.vue'
</script>

<style scoped></style>
