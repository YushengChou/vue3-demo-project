<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="min-h-[calc(100vh-16.25rem)] bg-primary p10 flex flex-justify-around md:h-[calc(100vh-12.5rem)]">
      <p class="text-text text-lg md:text-xl">
        <span fs-24 fw-500>Faq</span><br><br>
      </p>
    </div>
    <Footer />
  </div>
</template>
