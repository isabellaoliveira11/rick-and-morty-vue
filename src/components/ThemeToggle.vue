<template>
  <button
    @click="toggleTheme"
    class="w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-all duration-300"
  >
    <div
      class="w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300"
      :class="{ 'translate-x-6': isDark }"
    ></div>
  </button>
</template>

<script setup lang="ts">
import { isDark } from '../theme'

function toggleTheme() {
  isDark.value = !isDark.value
}
</script>
