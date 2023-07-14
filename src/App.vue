<script setup>
import { RouterView } from 'vue-router'
import { useGlobalStore } from '@/stores/store.js'

const globalStore = useGlobalStore()
</script>

<template>
  <div :class="globalStore.theme">
    <RouterView />
  </div>
</template>
