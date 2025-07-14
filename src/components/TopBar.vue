<template>
  <header class="w-full bg-white dark:bg-neutral-950 text-black dark:text-white shadow-md transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
      <!-- Logo -->
      <img :src="logo" alt="Rick and Morty" class="h-8 md:h-10" />

      <!-- Botão de tema -->
      <button
        @click="toggleTheme"
        class="relative w-16 h-8 rounded-full border-2 border-lime-500 flex items-center justify-between px-1 transition-all duration-300 bg-gray-300 dark:bg-neutral-800"
      >
        <img
          src="../assets/sun.svg"
          alt="Light"
          class="w-5 h-5 transition-opacity duration-300"
          :class="{ 'opacity-100': !isDark, 'opacity-30': isDark }"
        />
        <img
          src="../assets/moon.svg"
          alt="Dark"
          class="w-5 h-5 transition-opacity duration-300"
          :class="{ 'opacity-100': isDark, 'opacity-30': !isDark }"
        />

        <!-- Bolinha -->
        <div
          class="absolute w-6 h-6 rounded-full bg-lime-400 dark:bg-lime-500 shadow-md transition-transform duration-300"
          :class="isDark ? 'translate-x-[36px]' : 'translate-x-0'"
        ></div>
      </button>
    </div>
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
