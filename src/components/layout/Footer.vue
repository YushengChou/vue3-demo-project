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
            <i i-uiw-qq />ABOUT
          </RouterLink>
        </li>
        <li class="w-100% md:w-a">
          <RouterLink to="/product" class="flex flex-items-center gap2 text-text hover:text-link-hover">
            <i i-uiw-dislike-o />PRODUCT
          </RouterLink>
        </li>
        <li class="w-100% md:w-a">
          <RouterLink to="/contact" class="flex flex-items-center gap2 text-text hover:text-link-hover">
            <i i-uiw-github />CONTACT
          </RouterLink>
        </li>
        <li class="w-100% md:w-a">
          <RouterLink to="/faq" class="flex flex-items-center gap2 text-text hover:text-link-hover">
            <i i-uiw-linux />FAQ
          </RouterLink>
        </li>
        <li class="w-100% md:w-a">
          <RouterLink to="/backend" class="flex flex-items-center gap2 text-text hover:text-link-hover">
            <i i-uiw-like-o />BACKEND
          </RouterLink>
        </li>
      </ul>
      <div class="text-text-copy">
        © 2000-2050 版權所有
      </div>
    </div>
    <div>
      <div
        :class="isRotate ? 'rotate-360 scale-180' : ''" transition-transform-500 bg="urlbg center cover no-repeat"
        w="25" h="25" @click="rotateImg"
      />
    </div>
  </footer>
</template>
