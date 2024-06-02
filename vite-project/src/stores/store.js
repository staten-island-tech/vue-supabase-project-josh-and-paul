import { defineStore } from 'pinia'

import { useLocalStorage } from "@vueuse/core"
export const useStore = defineStore('storeId', {
  state: () => {
    return {
      isAuthenticated: useLocalStorage('isAuthenticated', false),
      user: null,
    }
  },
})