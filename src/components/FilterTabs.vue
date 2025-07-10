<template>
  <div class="flex items-center gap-2">
    <button
      v-for="option in options"
      :key="option.value"
      @click="emitSelected(option.value)"
      :class="[
        'flex items-center gap-2 px-4 py-1.5 rounded-full text-sm transition font-medium',
        selected === option.value
          ? 'bg-white text-black'
          : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
      ]"
    >
      <component :is="option.icon" class="w-4 h-4" />
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserCircle, Tv, Globe2 } from 'lucide-vue-next'

const options = [
  { label: 'Personagens', value: 'character', icon: UserCircle },
  { label: 'Episódio', value: 'episode', icon: Tv },
  { label: 'Localização', value: 'location', icon: Globe2 },
]

const selected = ref('character')

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

function emitSelected(value: string) {
  selected.value = value
  emit('change', value)
}
</script>
