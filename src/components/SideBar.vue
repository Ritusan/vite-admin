<template>
  <el-aside style="background-color: rgb(238, 241, 246)" class="my-aside">
    <el-menu default-active="2" class="my-menu" 
      :collapse="isCollapse" @open="handleOpen" @close="handleClose" 
      @select="selectItem"
      :collapse-transition="false">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>工作台</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Colors</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>TodoList</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const router = useRouter()
const selectItem = (val: string) => {
  console.log(val)
  switch (val) {
    case '2':
      router.push('/colors')
      break
    case '3':
      router.push('/todolist')
    break
    default:
      router.push('/colors')
    break
  }
}

const store = useStore()
let isCollapse = ref(store.state.sidebarIsCollapse)
let sidebarWidth = ref('200px')
watch(
  () => store.state.sidebarIsCollapse,
  (val) => {
    isCollapse.value = val
    if(val) {
      sidebarWidth.value = '60px'
    }else {
      sidebarWidth.value = '200px'
    }
  }
)

const clientHeight = ref('500px')

clientHeight.value = document.documentElement.clientHeight + 'px'
</script>

<style lang="scss" scoped>
.my-menu {
  height: v-bind(clientHeight);
}
:deep(.el-menu):not(.el-menu--collapse) {
  width: 200px;
}
:deep(.el-menu.el-menu--collapse) {
  width: 60px;
}
.my-aside {
  width: v-bind(sidebarWidth);
}
</style>
