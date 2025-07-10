<template>
  <div class="bg-zinc-900 p-4 rounded-xl flex flex-col justify-between h-full">
    <div>
      <p class="text-sm text-zinc-400 mb-1">{{ location.type }}</p>
      <h3 class="text-lg font-bold mb-1">{{ location.name }}</h3>
      <p class="text-sm text-zinc-500">{{ location.dimension }}</p>
    </div>
    <div class="mt-4 flex justify-between items-center">
      <button class="text-xs bg-zinc-800 px-3 py-1 rounded-full hover:bg-zinc-700">Saiba mais</button>
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
