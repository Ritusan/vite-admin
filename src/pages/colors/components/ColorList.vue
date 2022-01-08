<template>
  <div class="flex p-8 pb-2">
    <div
      class="w-100px h-100px cursor-pointer"
      v-for="(item, index) in colorList"
      :key="index"
      :style="{ background: item.color }"
      @click="handleClipboard(item)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue'
import { SummerColors, SummerFestivalsColors } from './data'
import { handleClipboard } from '@/utils/clipboard'

interface ColorItem {
  name: string
  color: string
  desc: string
}
const props = defineProps({
  colorList: {
    type: Array as PropType <Array<ColorItem>>,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped></style>
