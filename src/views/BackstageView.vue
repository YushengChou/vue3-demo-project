<script setup>
import { useGlobalStore } from '@/stores/store.js'

import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

const globalStore = useGlobalStore()

function revertTheme () {
  globalStore.theme = ''
}
function changeTheme(item) {
  globalStore.theme = item
}
</script>

<template>
  <div>
    <Navbar></Navbar>
    <ul class="h-[calc(100vh-12.5rem)] bg-primary list-none p10 flex flex-justify-around">
      <li class="space-x-5">
        <label class="text-text">预设样式</label>
        <button class="btn" @click="revertTheme">default</button>
      </li>
      <li class="space-x-5">
        <label class="text-text">主题样式1</label>
        <button class="btn" @click="changeTheme('darkTheme')">black</button>
      </li>
      <li class="space-x-5">
        <label class="text-text">主题样式2</label>
        <button class="btn" @click="changeTheme('lightTheme')">light</button>
      </li>
      <li class="space-x-5">
        <label class="text-text">主題樣式3</label>
        <button class="btn" @click="changeTheme('brownTheme')">brown</button>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>