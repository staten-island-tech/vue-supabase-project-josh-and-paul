<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import { RouterLink, RouterView } from 'vue-router'
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  <header>
    <div class="wrapper">
      

      <nav>
        <RouterLink to="/home">Sign-Up</RouterLink>
        <RouterLink to="/about">Sign-In</RouterLink>
        <RouterLink to="/map">Locations</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>

</template>