<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-container h-15 flex flex-justify-between flex-items-center px-10">
    <RouterLink to="/" class="text-text hover:text-link-hover">
      <h1 class="text-text">
        HOME
      </h1>
    </RouterLink>
    <ul class="flex list-none space-x-10">
      <li>
        <RouterLink to="/about" class="text-text hover:text-link-hover">
          ABOUT
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="text-text hover:text-link-hover">
          PRODUCT
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="text-text hover:text-link-hover">
          CONTACT
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="text-text hover:text-link-hover">
          FAQ
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/backstage" class="text-text hover:text-link-hover">
          BACKSTAGE
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>