<template>
  <footer class="themed-bg themed-title pt-16 px-6 border-t border-accent transition-all">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pb-6 gap-6">
      <!-- Logo -->
      <img src="/src/assets/rick-and-morty.png" alt="Logo Rick and Morty" class="h-10 drop-shadow-md" />

      <!-- Voltar ao topo -->
      <a
        href="#top"
        class="flex items-center gap-2 text-sm hover:text-accent transition-all"
      >
        Voltar ao topo
        <span class="border border-current rounded-full p-1 hover:bg-current hover:text-bg transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        </span>
      </a>
    </div>

    <div class="max-w-6xl mx-auto border-t border-current pt-4 pb-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
      <p>&copy; 2025</p>
      <p class="flex items-center gap-2">
        <span></span>
        Desenvolvido por 
        <a 
          href="https://www.isabelaoliveiradev.com/" 
          target="_blank" 
          class="text-accent font-semibold hover:underline hover:opacity-80 transition"
        >
          Isabela Oliveira
        </a>
      </p>
    </div>
  </footer>
</template>
