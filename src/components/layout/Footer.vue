<script setup>

</script>

<template>
  <div class="bg-container h-35 flex flex-justify-between flex-items-center px-10">
    <div>
      <ul class="flex list-none space-x-10 p0">
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
      <div class="text-text-s">
        © 2020-2030 版权所有
      </div>
    </div>
    <div>
      <RouterLink to="/" class="border-1">
        <img src="https://picsum.photos/100/50?random=1" alt="">
      </RouterLink>
    </div>
  </div>
</template>