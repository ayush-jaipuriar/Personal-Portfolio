import { readonly, ref } from 'vue'

const isMobileMenuOpen = ref(false)

export const useMobileMenuState = () => {
  const setMobileMenuOpen = (value: boolean) => {
    isMobileMenuOpen.value = value
  }

  return {
    isMobileMenuOpen: readonly(isMobileMenuOpen),
    setMobileMenuOpen,
  }
}

