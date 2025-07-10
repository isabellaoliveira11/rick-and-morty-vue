<template>
  <header class="w-full px-6 py-4 bg-black flex items-center justify-between shadow-md">
    <img :src="logo" alt="Rick and Morty" class="h-8 md:h-10" />

    <!-- Botão de tema -->
    <button
      @click="toggleTheme"
      class="w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-all duration-300"
    >
      <div
        class="w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300"
        :class="{ 'translate-x-6': isDark }"
      ></div>
    </button>
  </header>
</template>

<script setup lang="ts">
import { isDark } from '../theme'
import logo from '../assets/rick-and-morty-top.png'

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>
