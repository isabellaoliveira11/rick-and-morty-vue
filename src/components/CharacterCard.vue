<template>
  <div class="p-4 rounded-xl shadow-lg text-center" style="background-color: #3C3E44">
    <img
      :src="character.image"
      :alt="character.name"
      class="w-full h-40 object-cover rounded-md mb-2"
    />
    <h3 class="text-lg font-bold">{{ character.name }}</h3>
    <p class="text-sm text-green-400">{{ character.status }}</p>
    <p class="text-sm text-gray-400">{{ character.species }}</p>
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
