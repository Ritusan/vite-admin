<template>
  <div class="my-iframe">
    <iframe :src="frameSrc" ref="frameRef" @load="hideLoading"></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const frameSrc = ref('https://element-plus.gitee.io/zh-CN/component/timeline.html')

const hideLoading = () => {
  console.log()
}
</script>

<style scoped lang="scss">
.my-iframe {
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
