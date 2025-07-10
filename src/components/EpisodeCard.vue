<template>
  <div class="bg-zinc-900 rounded-xl p-4 shadow flex flex-col justify-between h-full">
    <h3 class="text-white text-sm font-semibold truncate">{{ episode.name }}</h3>
    <div class="flex justify-between items-center mt-4">
      <button class="text-sm px-3 py-1 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition">
        ℹ️ Saiba mais
      </button>
      <button class="text-cyan-400 hover:text-cyan-300 text-xl">🤍</button>
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
