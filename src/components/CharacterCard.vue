<template>
  <div class="p-4 rounded-xl shadow-lg text-center themed-card transition-colors">
    <img
      :src="character.image"
      :alt="character.name"
      class="w-full h-40 object-cover rounded-md mb-2"
    />
    <h3 class="text-lg font-bold themed-title">{{ character.name }}</h3>
    <p class="text-sm text-green-500">{{ character.status }}</p>
    <p class="text-sm text-gray-500">{{ character.species }}</p>
    <p class="text-sm text-gray-500">🌍 {{ character.origin.name }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  character: {
    id: string
    name: string
    image: string
    status: string
    species: string
    origin: { name: string }
  }
}>()
</script>
