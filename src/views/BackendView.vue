<script setup>
import { useColorMode } from '@vueuse/core'
import { ref } from 'vue'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

const mode = useColorMode()

function changeTheme(val) {
  mode.value = val
}

const testVal = ref('')
</script>

<template>
  <div>
    <Navbar />
    <ul class="backend_list">
      <li class="space-x-5 mb-5">
        <label class="text-text">預設樣式</label>
        <button class="btn" @click="changeTheme('')">
          預設
        </button>
      </li>
      <li class="space-x-5 mb-5">
        <label class="text-text">主題色一</label>
        <button class="btn" @click="changeTheme('themeDark')">
          暗色
        </button>
      </li>
      <li class="space-x-5 mb-5">
        <label class="text-text">主題色二</label>
        <button class="btn" @click="changeTheme('themeLight')">
          亮色
        </button>
      </li>
      <li class="space-x-5 mb-5">
        <label class="text-text">主題色三</label>
        <button class="btn" @click="changeTheme('themeBrown')">
          咖啡
        </button>
      </li>
      <li>
        <input type="color" :value="testVal">
        <input type="color" :value="testVal">
        <input type="color" :value="testVal">
      </li>
    </ul>
    <Footer />
  </div>
</template>

<style scoped>
.backend_list {
  @apply min-h-[calc(100vh-16.25rem)] md:h-[calc(100vh-12.5rem)] bg-primary list-none p10 flex flex-col flex-items-center md:flex-row md:flex-justify-between md:flex-items-start;
}
</style>
