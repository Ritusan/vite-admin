<template>
  <iframe ref="frameRef" @load="hideLoading" :src="frameSrc"></iframe>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const frameRef = ref<HTMLIFrameElement>()
const frameSrc = ref('https://element-plus.gitee.io/zh-CN/component/timeline.html')

let iframeShow = ref(true)

const route = useRoute()

const loading = ref(true)
const hideLoading = (e: any) => {
  loading.value = false
  window.history.back()
}
</script>

<style scoped lang="scss">
iframe {
  width: 100%;
  height: 100%;
}
</style>
