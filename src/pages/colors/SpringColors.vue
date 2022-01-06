<template>
  <div class="flex p-8 pb-2">
    <div :style="{ background: item.color }" 
      class="w-100px h-100px cursor-pointer" v-for="(item, index) in SpringColors" 
      :key="index"
      v-clipboard:copy="item.color"
      v-clipboard:success="onSuccess(item)"></div>
  </div>
  <div class="flex p-8">
    <div :style="{ background: item.color }" 
      class="w-100px h-100px cursor-pointer" v-for="(item, index) in SpringFestivalsColors" 
      :key="index"
      @click="copy(item)"></div>
  </div>
</template>

<script setup lang="ts">
import { SpringColors, SpringFestivalsColors } from './components/data'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import useClipboard from 'vue-clipboard3'

const onSuccess = (item: any) => {
  console.log('success'+item.name)
}
const { toClipboard } = useClipboard()
const copy = async (item: any) => {
  try {
    let value = item.desc+':'+item.color
    await toClipboard(value)
    ElMessage({
      message: value +' Copy successfully',
      type: 'success'
    })
  }catch(e) {
    ElMessage.error('Copy failed: '+e)
  }
}
</script>

<style scoped></style>
