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
import TopBar from './components/TopBar.vue'
import planet from './assets/planet.svg'
import monitor from './assets/monitor-play.svg'
import smiley from './assets/smiley-blank.svg'
import { isDark } from './theme'

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

async function fetchEpisodes(name = '') {
  const { data } = await apolloClient.query({
    query: GET_EPISODES,
    variables: { name },
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
  <div :class="{ dark: isDark }">
    <TopBar />

    <div id="top" class="min-h-screen bg-[#1E1E20] text-white space-y-16 transition-all">
      <!-- Hero -->
      <HeroSection />

      <!-- Navegação -->
      <nav class="flex justify-center gap-4 px-6">
        <a
          href="#characters"
          class="flex items-center gap-2 bg-[#2e2e30] text-white px-4 py-2 rounded-full hover:bg-[#3a3a3d] transition text-sm"
        >
          <img :src="smiley" alt="Personagens" class="w-5 h-5" />
          <span class="translate-y-[1px]">Personagens</span>
        </a>
        <a
          href="#episodes"
          class="flex items-center gap-2 bg-[#2e2e30] text-white px-4 py-2 rounded-full hover:bg-[#3a3a3d] transition text-sm"
        >
          <img :src="monitor" alt="Episódios" class="w-5 h-5" />
          <span class="translate-y-[1px]">Episódios</span>
        </a>
        <a
          href="#locations"
          class="flex items-center gap-2 bg-[#2e2e30] text-white px-4 py-2 rounded-full hover:bg-[#3a3a3d] transition text-sm"
        >
          <img :src="planet" alt="Localizações" class="w-5 h-5" />
          <span class="translate-y-[1px]">Localizações</span>
        </a>
      </nav>

      <!-- Personagens -->
      <section id="characters" class="w-full px-4 sm:px-6 py-10" style="background-color: #1E1E20">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-white">Personagens</h2>
            <button class="flex items-center gap-1 text-sm text-white/80 hover:text-white transition">
              <i class="ph ph-eye text-base"></i>
              <span class="text-sm font-medium">Ver todos</span>
            </button>
          </div>
          <div class="flex justify-center mb-6">
            <SearchBar @search="fetchCharacters" />
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CharacterCard v-for="char in characters" :key="char.id" :character="char" />
          </div>
        </div>
      </section>

      <!-- Episódios -->
      <section id="episodes" class="w-full px-4 sm:px-6 py-10" style="background-color: #1E1E20">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-white">Episódios</h2>
            <button class="flex items-center gap-1 text-sm text-white/80 hover:text-white transition">
              <i class="ph ph-eye text-base"></i>
              <span class="text-sm font-medium">Ver todos</span>
            </button>
          </div>
          <div class="flex justify-center mb-6">
            <SearchBar @search="fetchEpisodes" />
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <EpisodeCard v-for="ep in episodes" :key="ep.id" :episode="ep" />
          </div>
        </div>
      </section>

      <!-- Localizações -->
      <section id="locations" class="w-full px-4 sm:px-6 py-10" style="background-color: #1E1E20">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-white">Localizações</h2>
            <button class="flex items-center gap-1 text-sm text-white/80 hover:text-white transition">
              <i class="ph ph-eye text-base"></i>
              <span class="text-sm font-medium">Ver todos</span>
            </button>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <LocationCard v-for="loc in locations" :key="loc.id" :location="loc" />
          </div>
        </div>
      </section>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
