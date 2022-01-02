<template>
  <div class="dashboard-header flex">
    <div>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </div>
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
      <h1 class="md:text-lg text-md">早安, Akira, 开始您新一天的工作吧！</h1>
      <span class="text-secondary"> 今日多云转晴，0℃ - 12℃！ </span>
    </div>
    <div class="flex flex-1 justify-end md:mt-0 mt-4">
      <div class="flex flex-col justify-center text-right cur-pointer" @click="gotoTodolist">
        <span class="text-secondary"> 待办 </span>
        <span class="text-2xl">6/6</span>
      </div>
      <div class="flex flex-col justify-center text-right md:mx-16 mx-12 cur-pointer">
        <span class="text-secondary"> 项目 </span>
        <span class="text-2xl">6</span>
      </div>
      <div class="flex flex-col justify-center text-right md:mr-10 mr-4 cur-pointer">
        <span class="text-secondary"> 团队 </span>
        <span class="text-2xl">66</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const gotoTodolist = () => {
  router.push('/todolist')
}

</script>

<style scoped lang="scss">
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5em;
  font-weight: 500;
}
.dashboard-header {
  padding: 10px 0;
}
</style>