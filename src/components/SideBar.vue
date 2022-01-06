<template>
  <el-aside style="background-color: rgb(238, 241, 246)" class="my-aside">
    <el-menu default-active="2" class="my-menu" 
      :collapse="isCollapse" @open="handleOpen" @close="handleClose" 
      @select="selectItem"
      :collapse-transition="false">
      <el-menu-item index="0">
        <el-icon><coffee-cup /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><magic-stick /></el-icon>
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
        <el-icon><finished /></el-icon>
        <template #title>TodoList</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><coin /></el-icon>
        <template #title>组件实例</template>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><pie-chart /></el-icon>
        <template #title>图表</template>
      </el-menu-item>
      <el-menu-item index="6">
        <el-icon><calendar /></el-icon>
        <template #title>日程表</template>
      </el-menu-item>
      <el-menu-item index="7">
        <el-icon><edit /></el-icon>
        <template #title>写作</template>
      </el-menu-item>
      <el-menu-item index="8">
        <el-icon><bell /></el-icon>
        <template #title>消息通知</template>
      </el-menu-item>
      <el-menu-item index="9">
        <el-icon><moon-night /></el-icon>
        <template #title>天气</template>
      </el-menu-item>
      <el-menu-item index="10">
        <el-icon><flag /></el-icon>
        <template #title>Flag</template>
      </el-menu-item>
      <el-menu-item index="15">
        <el-icon><search /></el-icon>
        <template #title>外部页面</template>
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
  switch (val) {
    case '0':
      router.push('/')
    break
    case '2':
      router.push('/colors')
      break
    case '3':
      router.push('/todolist')
    break
    case '4':
      router.push('/examples')
    break
    case '5':
      router.push('/chart')
    break
    case '6':
      router.push('/calendar')
    break
    case '7':
      router.push('/write')
    break
    case '8':
      router.push('/notice')
    break
    case '9':
      router.push('/weather')
    break
    case '10':
      router.push('/flag')
    break
    case '15':
      router.push('/frame')
    break
    default:
      router.push('/')
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
