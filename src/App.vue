<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { apolloClient } from './lib/apollo'
import { GET_CHARACTERS } from './graphql/queries'

type Character = {
  id: string
  name: string
  image: string
  status: string
  species: string
  origin: { name: string }
}

const characters = ref<Character[]>([])

onMounted(async () => {
  const { data } = await apolloClient.query({ query: GET_CHARACTERS })
  characters.value = data.characters.results
})
</script>

<template>
  <div class="min-h-screen bg-black text-white p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
    <div
      v-for="char in characters"
      :key="char.id"
      class="bg-gray-900 p-4 rounded-xl shadow-lg text-center"
    >
      <img
        :src="char.image"
        :alt="char.name"
        class="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 class="text-lg font-bold">{{ char.name }}</h3>
      <p class="text-sm text-green-400">{{ char.status }}</p>
      <p class="text-sm text-gray-400">{{ char.species }}</p>
      <p class="text-sm text-gray-500">🌍 {{ char.origin.name }}</p>
    </div>
  </div>
</template>
