import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useLocalStorage } from "@vueuse/core"
export const useStore = defineStore('storeId', {
  state: () => {
    return {
      isAuthenticated: useLocalStorage('isAuthenticated', false),
      user: null,
    }
  },
})

export const CartStore = defineStore('cart', () => {
  const cart = ref([])

  function Purchase(addedLure){
    cart.value.push(addedLure)
  }
  return { cart, Purchase }
})