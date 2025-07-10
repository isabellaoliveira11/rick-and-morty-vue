<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { apolloClient } from './lib/apollo'
import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS } from './graphql/queries'

import CharacterCard from './components/CharacterCard.vue'
import EpisodeCard from './components/EpisodeCard.vue'
import LocationCard from './components/LocationCard.vue'
import SearchBar from './components/SearchBar.vue'
import HeroSection from './components/HeroSection.vue'
import Footer from './components/Footer.vue'

type Character = {
  id: string
  name: string
  image: string
  status: string
  species: string
  origin: { name: string }
}

type Episode = {
  id: string
  name: string
}

type Location = {
  id: string
  name: string
  type: string
  dimension: string
}

const characters = ref<Character[]>([])
const episodes = ref<Episode[]>([])
const locations = ref<Location[]>([])

async function fetchCharacters(name = '') {
  const { data } = await apolloClient.query({
    query: GET_CHARACTERS,
    variables: { name },
  })
  characters.value = data.characters.results
}

async function fetchEpisodes() {
  const { data } = await apolloClient.query({
    query: GET_EPISODES,
  })
  episodes.value = data.episodes.results
}

async function fetchLocations() {
  const { data } = await apolloClient.query({
    query: GET_LOCATIONS,
  })
  locations.value = data.locations.results
}

onMounted(() => {
  fetchCharacters()
  fetchEpisodes()
  fetchLocations()
})
</script>

<template>
  <div id="top" class="min-h-screen bg-black text-white space-y-16">
    <!-- Hero -->
    <HeroSection />

    <!-- Navegação -->
    <nav class="flex justify-center gap-4 px-6">
      <a href="#characters" class="bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700">Personagens</a>
      <a href="#episodes" class="bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700">Episódios</a>
      <a href="#locations" class="bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700">Localizações</a>
    </nav>

    <!-- Personagens -->
    <section id="characters" class="px-6">
      <h2 class="text-2xl font-bold mb-4">Personagens</h2>
      <div class="flex justify-center mb-6">
        <SearchBar @search="fetchCharacters" />
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <CharacterCard v-for="char in characters" :key="char.id" :character="char" />
      </div>
    </section>

    <!-- Episódios -->
    <section id="episodes" class="px-6">
      <h2 class="text-2xl font-bold mb-4">Episódios</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <EpisodeCard v-for="ep in episodes" :key="ep.id" :episode="ep" />
      </div>
    </section>

    <!-- Localizações -->
    <section id="locations" class="px-6">
      <h2 class="text-2xl font-bold mb-4">Localizações</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <LocationCard v-for="loc in locations" :key="loc.id" :location="loc" />
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
