<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <main>
    <Navbar></Navbar>
    <div class="h-[calc(100vh-12.5rem)] bg-primary list-none p10 flex flex-justify-around">
      <p class="text-text">
        HOME
      </p>
    </div>
    <Footer></Footer>
  </main>
</template>
