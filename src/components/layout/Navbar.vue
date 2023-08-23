<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const data = reactive({
  flag: false,
})

function showIcon() {
  data.flag = !data.flag
}
</script>

<template>
  <nav class="bg-container h-15 flex flex-justify-between flex-items-center px-10">
    <RouterLink to="/" class="text-text hover:text-link-hover">
      <h1 class="text-text text-size-0">
        LOGO
      </h1>
      <svg
        class="w-10 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"
        xmlns:v="https://vecta.io/nano"
      >
        <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883" />
        <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e" />
      </svg>
    </RouterLink>
    <div :class="{ 'absolute right-10 top-4 z-2': data.flag }">
      <div class="cursor-pointer text-text md:hidden text-lg" @click="showIcon">
        <span v-show="!data.flag">
          ☰
        </span>
        <span v-show="data.flag" :class="{ 'text-white': data.flag }" class="block text-right mb-10">
          X
        </span>
      </div>
      <ul
        :class="{ hidden: !data.flag }"
        class="list-none flex-col space-y-5 text-end md:flex md:space-x-10 md:flex-row md:space-y-0"
      >
        <li>
          <RouterLink
            to="/about" :class="{ 'text-white': data.flag }"
            class="text-text hover:text-link-hover md:text-text"
          >
            ABOUT
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/product" :class="{ 'text-white': data.flag }" class="text-text hover:text-link-hover md:text-text">
            PRODUCT
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" :class="{ 'text-white': data.flag }" class="text-text hover:text-link-hover md:text-text">
            CONTACT
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/faq" :class="{ 'text-white': data.flag }" class="text-text hover:text-link-hover md:text-text">
            FAQ
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/backend" :class="{ 'text-white': data.flag }"
            class="text-text hover:text-link-hover md:text-text"
          >
            BACKEND
          </RouterLink>
        </li>
      </ul>
    </div>

    <div
      :class="{ 'opacity-60 bg-mask inset-0': data.flag }" class="fixed z-1 transition-all duration-300 md:z--1"
      @click="showIcon"
    />
  </nav>
</template>
