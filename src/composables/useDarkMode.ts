// src/composables/useDarkMode.ts
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value
  const html = document.documentElement
  html.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  const html = document.documentElement
  isDark.value = html.classList.contains('dark')
})

export { isDark, toggleDarkMode }
