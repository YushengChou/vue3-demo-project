<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <main>
    <Navbar />
    <div p10 flex flex-justify-around bg="primary" class="min-h-[calc(100vh-16.25rem)] md:h-[calc(100vh-12.5rem)]">
      <p text-text fs-16 font-lobster class="txt-shadow-1.5-1-5-#4d4d4d">
        <span fs-32 leading-normal font-monoton text-transparent class="bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">HOME</span><br><br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fugiat in dolorum sapiente. Dolorum, alias officiis.
        Deserunt impedit itaque harum sunt numquam minus illo eaque. Amet, pariatur! Perspiciatis, vel eaque?
        <br>
        <i block w10 h10 />
      </p>
    </div>
    <Footer />
  </main>
</template>
