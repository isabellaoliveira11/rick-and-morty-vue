// src/theme.ts
import { ref, watch } from 'vue'

export const isDark = ref(true)

watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
}, { immediate: true })
