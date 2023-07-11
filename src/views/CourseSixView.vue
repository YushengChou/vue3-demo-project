<script setup>
import { useFetchMenu } from '@/stores/useFetchMenu'

const { isLoading, result, fetchMenu } = useFetchMenu()
fetchMenu()
</script>

<template>
  <h1>Vue Tree</h1>
  <p>{{ result }}</p>
</template>

<style scoped></style>
