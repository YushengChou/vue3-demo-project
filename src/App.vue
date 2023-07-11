<script setup>
import { RouterLink, RouterView } from 'vue-router'

const mode = import.meta.env.MODE
const url = import.meta.env.VITE_WEATHER_BUREAU_URL
const test = import.meta.env.VITE_TESTTEST
function drawWave() {
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')
  const width = canvas.width
  const height = canvas.height

  ctx.clearRect(0, 0, width, height)
  // 設置波浪曲線樣式
  ctx.lineWidth = 3
  ctx.strokeStyle = '#0077be'
  // ctx.fillStyle = '#0077be'

  // 開始繪製波浪曲線
  ctx.beginPath()
  ctx.moveTo(0, height / 2)
  for (let i = 0; i < width; i++) {
    const x = i
    const y = height / 2 + Math.sin(i / 40) * 40 + Math.sin(i / 40) * 40 + Math.sin(i / 40) * 40 + Math.sin(i / 40) * 40
    ctx.lineTo(x, y)
  }
  // ctx.lineTo(width, height)
  // ctx.lineTo(0, height)
  // ctx.closePath()
  ctx.stroke()
  // ctx.fill()
}

const isDarkTheme = ref(false)
function clickHandler() {
  isDarkTheme.value = !isDarkTheme.value
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          Terry Home
        </RouterLink>
        <RouterLink :to="{ name: 'courseOne' }">
          CourseOne
        </RouterLink>
        <RouterLink :to="{ name: 'courseTwo' }">
          CourseTwo
        </RouterLink>
        <RouterLink :to="{ name: 'courseThree' }">
          CourseThree
        </RouterLink>
        <RouterLink :to="{ name: 'courseFour' }">
          CourseFour
        </RouterLink>
        <RouterLink :to="{ name: 'courseFive' }">
          CourseFive
        </RouterLink>
        <RouterLink :to="{ name: 'courseSix' }">
          CourseSix
        </RouterLink>
      </nav>
    </div>
  </header>
  <!-- <img src="favicon.svg" alt="" w-50px> -->
  <!-- <h1>{{ mode }}</h1> -->
  <!-- <h2> {{ url }} </h2> -->
  <!-- <h3>{{ test }}</h3> -->
  <RouterView :class="{ darkTerry: isDarkTheme }" class="bg-container" />
  <button @click="clickHandler">
    dark
  </button>
  <!-- <canvas id="myCanvas" width="500" height="500" /> -->
  <!-- <button @click="drawWave">
    Draw Curve
  </button> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
