<template>
  <div class="p-4 rounded-xl shadow-lg text-center themed-card transition-colors">
    <h3 class="themed-title text-sm font-semibold truncate">{{ episode.name }}</h3>
    <div class="flex justify-between items-center mt-4">
        <button
          class="text-sm px-3 py-1 rounded-full
                bg-gray-200 text-black hover:bg-gray-300
                dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700
                transition"
        >
          ℹ️ Saiba mais
        </button>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  episode: {
    id: string
    name: string
  }
}>()
</script>
