<template>
  <div class="p-4 rounded-xl shadow-lg text-center themed-card">
    <div>
      <p class="text-sm text-zinc-400 mb-1">{{ location.type }}</p>
      <h3 class="text-lg font-bold mb-1 themed-title">{{ location.name }}</h3>
      <p class="text-sm text-zinc-500">{{ location.dimension }}</p>
    </div>
    <div class="mt-4 flex justify-between items-center">
      <button class="text-xs px-3 py-1 rounded-full hover:opacity-80 transition themed-card">
        Saiba mais
      </button>
      <button class="text-cyan-400 text-xl">♡</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  location: {
    id: string
    name: string
    type: string
    dimension: string
  }
}>()
</script>
