<template>
  <color-list :color-list="SpringColors"></color-list>
  <color-list :color-list="SpringFestivalsColors"></color-list>
</template>

<script setup lang="ts">
import { SpringColors, SpringFestivalsColors } from './components/data'
import ColorList from './components/ColorList.vue'

</script>

<style scoped></style>
