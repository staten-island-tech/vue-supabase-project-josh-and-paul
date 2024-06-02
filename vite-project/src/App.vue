<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import router from './router'
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from './stores/store'
const store = useStore();

async function signOut() {
  if (store.isAuthenticated) {
    const { error } = await supabase.auth.signOut();
    if (!error) router.push('/about')
    console.log(error ? 'error signing out' : 'successfully signed out')
  }
}
supabase.auth.onAuthStateChange((event, session) => {
  console.log('authstate', event, session)
  if ((event === 'INITIAL_SESSION' || event === 'SIGNED_IN') && session) {
    store.isAuthenticated = true;
    store.email = session.user.email
  } else if (event === 'SIGNED_OUT') {
    store.isAuthenticated = false;
    store.email = ""
  }
})


onMounted(() => {
/*   getCountries()
 */})
</script>

<template>
<!--   <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul> -->
  <header>
    <div class="wrapper">
      

      <nav>
        <RouterLink to="/home">Sign-Up</RouterLink>
        <RouterLink to="/about">Sign-In</RouterLink>
        <RouterLink to="/map">Locations</RouterLink>
        <button @click="signOut">Sign Out</button>
      </nav>
    </div>
  </header>

  <RouterView/>

</template>