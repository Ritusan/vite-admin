<template>
  <color-list :color-list="AutumnColors"></color-list>
  <color-list :color-list="AutumnFestivalsColors"></color-list>
</template>

<script setup lang="ts">
import { AutumnColors, AutumnFestivalsColors } from './components/data'
import ColorList from './components/ColorList.vue'

</script>

<style scoped></style>
