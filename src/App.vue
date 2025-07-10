<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { apolloClient } from './lib/apollo'
import { GET_CHARACTERS } from './graphql/queries'
import CharacterCard from './components/CharacterCard.vue'
import SearchBar from './components/SearchBar.vue'

type Character = {
  id: string
  name: string
  image: string
  status: string
  species: string
  origin: { name: string }
}

const characters = ref<Character[]>([])

async function fetchCharacters(name = '') {
  const { data } = await apolloClient.query({
    query: GET_CHARACTERS,
    variables: { name },
  })

  characters.value = data.characters.results
}

onMounted(() => fetchCharacters())
</script>

<template>
  <div class="min-h-screen bg-black text-white p-6">
    <div class="flex justify-center mb-8">
      <SearchBar @search="fetchCharacters" />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <CharacterCard
        v-for="char in characters"
        :key="char.id"
        :character="char"
      />
    </div>
  </div>
</template>
