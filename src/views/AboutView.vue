<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <div class="about">
    <Navbar></Navbar>
    <div class="min-h-[calc(100vh-16.25rem)] bg-primary p10 flex flex-justify-around md:h-[calc(100vh-12.5rem)]">
      <p class="text-text text-lg md:text-xl">
        <span fs-24 fw-500>About</span><br><br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolorum fugiat sapiente qui quas vero quibusdam itaque voluptatibus harum at!
        <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia nemo ducimus cumque distinctio temporibus magnam! Esse iure illum, iusto corporis doloremque dolorum dolorem perspiciatis sequi officia eveniet recusandae enim.
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>
