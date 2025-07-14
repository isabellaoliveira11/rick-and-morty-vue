<template>
  <div class="p-4 rounded-xl shadow-lg text-center" style="background-color: #3C3E44">
    <h3 class="text-white text-sm font-semibold truncate">{{ episode.name }}</h3>
    <div class="flex justify-between items-center mt-4">
      <button class="text-sm px-3 py-1 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition">
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
