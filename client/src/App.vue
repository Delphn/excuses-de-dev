<template>
  <RouterView />
</template>

<script setup lang="ts">
import store from '@/store';  
import { provide } from 'vue'
import { RouterView } from 'vue-router'

// make the store available to all vue components
provide('store', store)
</script>

<style scoped>
</style>
