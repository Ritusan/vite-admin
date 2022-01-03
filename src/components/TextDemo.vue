<template>
  <div>

    <el-button @click="handleClick"></el-button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  pic: {
    type: Array as () => Array<string>,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['myClick'])
const handleClick = () => {
  emit('myClick')
}
</script>

<style scoped>

</style>