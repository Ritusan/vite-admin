<template>
  <color-list :color-list="WinterColors"></color-list>
  <color-list :color-list="WinterFestivalsColors"></color-list>
</template>

<script setup lang="ts">
import { WinterColors, WinterFestivalsColors } from './components/data'
import ColorList from './components/ColorList.vue'
</script>

<style scoped></style>
