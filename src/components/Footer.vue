<template>
  <footer class="bg-zinc-900 text-white pt-16 px-6 border-t border-cyan-500">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pb-6 gap-6">
      <!-- Logo -->
      <img src="/src/assets/rick-and-morty.png" alt="Logo Rick and Morty" class="h-10" />

      <!-- Voltar ao topo -->
      <a href="#top" class="flex items-center gap-2 text-sm text-white hover:text-cyan-400 transition-all">
        Voltar ao topo
        <span class="border border-white rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        </span>
      </a>
    </div>

    <div class="max-w-6xl mx-auto border-t border-white pt-4 pb-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
      <p>Copyright © 2023</p>
      <p class="flex items-center gap-2">
        <span>💻</span>
        Desenvolvido por 
        <a href="https://www.isabelaoliveiradev.com/" target="_blank" class="text-cyan-400 font-semibold hover:underline">
          Isabela Oliveira
        </a>
      </p>
    </div>
  </footer>
</template>
