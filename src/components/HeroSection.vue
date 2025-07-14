<script setup lang="ts">
import RickLogo from '../assets/rick-and-morty.png'
import RickCover from '../assets/rick-and-morty-cover.png'
</script>

<template>
  <section class="themed-bg themed-text min-h-screen flex items-center">
    <div class="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-20">
      
      <!-- Texto principal -->
      <div class="w-full md:w-1/2 text-center md:text-left space-y-6">
        <img :src="RickLogo" alt="Rick and Morty" class="h-10 mx-auto md:mx-0 drop-shadow-md" />

        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Saiba tudo em <br />
          um só <span class="text-accent drop-shadow-[0_0_10px_var(--accent)]">lugar.</span>
        </h1>

        <p class="text-muted text-lg md:text-xl max-w-md md:max-w-none mx-auto md:mx-0">
          Personagens, localizações, episódios e muito mais do multiverso mais
          <span class="text-accent font-semibold"> caótico </span>
          da TV.
        </p>

        <!-- Botão opcional -->
        <a
          href="#characters"
          class="inline-block mt-4 px-6 py-2 rounded-full bg-accent text-black dark:text-white hover:opacity-80 transition drop-shadow-md"
        >
          Explorar agora
        </a>
      </div>

      <!-- Imagem -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          :src="RickCover"
          alt="Rick and Morty Cover"
          class="w-full max-w-[500px] h-auto drop-shadow-[0_0_15px_var(--accent)]"
        />
      </div>
    </div>
  </section>
</template>
