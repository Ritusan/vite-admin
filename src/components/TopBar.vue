<template>
  <el-header class="flex items-center justify-between pl-2 pr-4">
    <el-icon size="20" @click="handleCollapse" class="cursor-pointer">
      <DArrowLeft v-if="!isCollapse" />
      <DArrowRight v-else />
    </el-icon>
    <div class="flex items-center">
      <el-avatar size="default" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <span class="pl-2">Akira</span>
      <el-dropdown>
        <el-icon class="ml-4" size="20"><setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { DArrowLeft, DArrowRight, Setting } from '@element-plus/icons-vue'

const store = useStore()

// let isCollapse = ref(store.state.sidebarIsCollapse)
let isCollapse = ref(store.state.sidebarIsCollapse)
const handleCollapse = () => {
  store.state.sidebarIsCollapse = !store.state.sidebarIsCollapse
  isCollapse.value = !isCollapse.value
  console.log(store)
}

</script>

<style scoped></style>
