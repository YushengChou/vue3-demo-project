<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <main>
    <Navbar></Navbar>
    <div p10 flex flex-justify-around bg="primary" class="min-h-[calc(100vh-16.25rem)] md:h-[calc(100vh-12.5rem)]">
      <p text-text fs-16 font-aguafina class="txt-shadow-1-1-5-#4d4d4d">
        <span fs-32 font-lobster leading-normal>HOME</span><br><br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fugiat in dolorum sapiente. Dolorum, alias officiis.
        Deserunt impedit itaque harum sunt numquam minus illo eaque. Amet, pariatur! Perspiciatis, vel eaque?
      </p>
    </div>
    <Footer></Footer>
  </main>
</template>
