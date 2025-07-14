<script setup lang="ts">
import RickLogo from '../assets/rick-and-morty.png'
import RickCover from '../assets/rick-and-morty-cover.png'
</script>

<template>
  <section class="bg-neutral-950 text-white min-h-screen flex items-center">
    <div class="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-20">
      
      <!-- Texto principal -->
      <div class="w-full md:w-1/2 text-center md:text-left space-y-6">
        <img :src="RickLogo" alt="Rick and Morty" class="h-10 mx-auto md:mx-0 drop-shadow-md" />

        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Saiba tudo em <br />
          um só <span class="text-lime-400 drop-shadow-[0_0_10px_#84cc16]">lugar.</span>
        </h1>

        <p class="text-neutral-300 text-lg md:text-xl max-w-md md:max-w-none mx-auto md:mx-0">
          Personagens, localizações, episódios e muito mais do multiverso mais <span class="text-lime-300 font-semibold">caótico</span> da TV.
        </p>

        <!-- Botão opcional -->
        <a href="#characters" class="inline-block mt-4 px-6 py-2 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300 transition drop-shadow-md">
          Explorar agora
        </a>

      </div>

      <!-- Imagem -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          :src="RickCover"
          alt="Rick and Morty Cover"
          class="w-full max-w-[500px] h-auto drop-shadow-[0_0_15px_#22c55e]"
        />
      </div>
    </div>
  </section>
</template>
