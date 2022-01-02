<template>
  <div>
    <DashboardHeader />
    
    <div class="lg:flex">
      <div class="lg:w-7/10 w-full !mr-4 enter-y">
        <ProjectCardVue />
      </div>
      <div class="lg:w-3/10 w-full enter-y">
        <QuickNav />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from './components/DashboardHeader.vue'
import ProjectCardVue from './components/ProjectCard.vue'
import QuickNav from './components/QuickNav.vue'


</script>

<style scoped>

</style>