import { ref } from 'vue'
import { defineStore } from 'pinia'

export const CartStore = defineStore('cart', () => {
  const cart = ref([])

  function addtocart(addedfishingproduct) {
    cart.value.push(addedfishingproduct)
  }
  return { cart, addtocart }
})
