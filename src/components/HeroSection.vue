<script setup lang="ts">
import RickLogo from '../assets/rick-and-morty.png'
import RickCover from '../assets/rick-and-morty-cover.png'
</script>

<template>
  <section class="relative bg-black text-white px-6 py-16 md:py-24">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <!-- Textos -->
      <div class="max-w-xl">
        <img :src="RickLogo" alt="Rick and Morty" class="h-10 mb-6" />
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Saiba tudo em <br />
          um só <span class="text-cyan-400">lugar.</span>
        </h1>
        <p class="text-zinc-300 text-lg mb-6">
          Personagens, localizações, episódios e muito mais.
        </p>

        <!-- Botões -->
        <div class="flex items-center gap-4">
          <button class="bg-cyan-500 text-black font-semibold px-4 py-2 rounded-full">
            🌙 Escuro
          </button>
          <button class="bg-zinc-800 text-white px-4 py-2 rounded-full">
            ☀️ Claro
          </button>
        </div>

        <p class="text-cyan-400 text-sm mt-4">Ai sim, Porr#@%&*</p>
      </div>

      <!-- Imagem -->
      <div class="w-full md:w-1/2">
        <img
          :src="RickCover"
          alt="Rick Cover"
          class="w-full max-w-md mx-auto md:mx-0"
        />
      </div>
    </div>
  </section>
</template>
