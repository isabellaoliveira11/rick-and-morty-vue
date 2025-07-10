<script setup lang="ts">
import RickLogo from '../assets/rick-and-morty.png'
import RickCover from '../assets/rick-and-morty-cover.png'
</script>

<template>
  <section class="bg-black text-white py-16 md:py-24 overflow-hidden">
    <div class="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 px-4">
      
      <!-- Textos -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <img :src="RickLogo" alt="Rick and Morty" class="h-10 mb-6 mx-auto md:mx-0" />

        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Saiba tudo em <br />
          um só <span class="text-cyan-400">lugar.</span>
        </h1>

        <p class="text-zinc-300 text-lg mb-6">
          Personagens, localizações, episódios e muito mais.
        </p>

        <!-- Botões -->
        <div class="flex justify-center md:justify-start gap-4">
          <button class="bg-zinc-800 text-white px-4 py-2 rounded-full flex items-center gap-2">
            🌙 Escuro
          </button>
          <button class="bg-white text-black font-semibold px-4 py-2 rounded-full flex items-center gap-2">
            ☀️ Claro
          </button>
        </div>

        <p class="text-cyan-400 text-sm mt-4">Ai sim, Porr#@%&*</p>
      </div>

      <!-- Imagem -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          :src="RickCover"
          alt="Rick and Morty Cover"
          class="w-full max-w-[500px] h-auto"
        />
      </div>
    </div>
  </section>
</template>
