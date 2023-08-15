<script setup>
import { RouterView } from 'vue-router'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()

</script>

<template>
  <div :class="mode">
    <RouterView />
  </div>
</template>
