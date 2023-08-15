<script setup>

const isRotate = ref(false)

function rotateImg() {
  isRotate.value = !isRotate.value
}

</script>

<template>
  <footer class="bg-container h-50 flex flex-justify-between flex-items-center px-10 md:h-35 overflow-hidden">
    <div class="w-50%">
      <ul class="flex flex-wrap list-none p0 md:space-x-10">
        <li class="w-100% md:w-a">
          <RouterLink to="/about" class="flex flex-items-center gap2 text-text hover:text-link-hover">
            <span block i-uiw-qq></span>ABOUT
          </RouterLink>
        </li>
        <li class="w-100% md:w-a">
          <RouterLink to="/product" class="flex flex-items-center gap2 text-text hover:text-link-hover">
            <span block i-uiw-dislike-o></span>PRODUCT
          </RouterLink>
        </li>
        <li class="w-100% md:w-a">
          <RouterLink to="/contact" class="flex flex-items-center gap2 text-text hover:text-link-hover">
            <span block i-uiw-github></span>CONTACT
          </RouterLink>
        </li>
        <li class="w-100% md:w-a">
          <RouterLink to="/faq" class="flex flex-items-center gap2 text-text hover:text-link-hover">
            <span block i-uiw-linux></span>FAQ
          </RouterLink>
        </li>
        <li class="w-100% md:w-a">
          <RouterLink to="/backend" class="flex flex-items-center gap2 text-text hover:text-link-hover">
            <span block i-uiw-like-o></span>BACKEND
          </RouterLink>
        </li>
      </ul>
      <div class="text-text-copy">
        © 2000-2050 版權所有
      </div>
    </div>
    <div>
      <div @click="rotateImg" :class="isRotate ? 'rotate-360 scale-180' : ''" transition-transform-500
        bg="urlbg center cover no-repeat" w="25" h="25">
      </div>
    </div>
  </footer>
</template>