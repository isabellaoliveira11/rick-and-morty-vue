<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { apolloClient } from './lib/apollo'
import { GET_CHARACTERS } from './graphql/queries'
import CharacterCard from './components/CharacterCard.vue'

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
    <CharacterCard
      v-for="char in characters"
      :key="char.id"
      :character="char"
    />
  </div>
</template>
