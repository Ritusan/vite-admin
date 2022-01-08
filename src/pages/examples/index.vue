<template>
  <div class="preloader" v-if="!isShowImage">
    <div class="loader-wrapper">
      <div class="loader-inner">
        <span>欢</span>
        <span>迎</span>
        <span>来</span>
        <span>到</span>
        <span>这</span>
        <span>里</span>
      </div>
    </div>
  </div>
  <div v-else>红鲤鱼</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isShowImage = ref(false)
onMounted(() => {
  setTimeout(() => {
    isShowImage.value = true
  }, 4000)
})
</script>

<style lang="scss" scoped>
.preloader {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #d8e27f;
  z-index: 99;
  transition: opacity 0.65s;
  .loader-wrapper {
    height: 100%;
    width: 100%;
    .loader-inner {
      width: 100%;
      height: 100%;
      transform: translateY(47%);
      color: #fff;
      text-align: center;
      letter-spacing: 20px;
      span {
        font-size: 20px;
        opacity: 0;
        display: inline-block;
        &:nth-child(1) {
          font-size: 30px;
          animation: entrance 3s 0.5s 2 ease-in-out;
        }
        &:nth-child(2) {
          font-size: 30px;
          animation: entrance 3s 0.4s 2 ease-in-out;
        }
        &:nth-child(3) {
          font-size: 25px;
          animation: entrance 3s 0.3s 2 ease-in-out;
        }
        &:nth-child(4) {
          font-size: 25px;
          animation: entrance 3s 0.2s 2 ease-in-out;
        }
        &:nth-child(5) {
          font-size: 25px;
          animation: entrance 3s 0.1s 2 ease-in-out;
        }
        &:nth-child(6) {
          font-size: 25px;
          animation: entrance 3s 2 ease-in-out;
        }
      }
    }
  }
}
@keyframes entrance {
  0% {
    opacity: 0;
    transform: translateX(-280px);
  }
  33% {
    opacity: 1;
    transform: translateX(0);
  }
  66% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(280px);
  }
}
.Content-audit .contentLabel {
  color: #333;
  font-size: 12px;
  background-color: #fee4b2;
  width: 46px;
  height: 22px;
  position: absolute;
  top: 0;
  left: 10px;
  text-align: center;
  line-height: 22px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
