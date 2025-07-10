<template>
  <div class="flex items-center bg-zinc-800 rounded-full px-4 py-2 w-full max-w-md">
    <input
      v-model="searchTerm"
      @keydown.enter="emitSearch"
      type="text"
      placeholder="Personagens, episódios ou localizações"
      class="bg-transparent outline-none text-white flex-1 placeholder-zinc-400"
    />
    <button @click="emitSearch" class="text-zinc-400 hover:text-white transition">
      <Search class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'

const searchTerm = ref('')

const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

function emitSearch() {
  emit('search', searchTerm.value.trim())
}
</script>
