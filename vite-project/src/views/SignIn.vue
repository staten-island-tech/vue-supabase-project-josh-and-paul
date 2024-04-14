<script setup>
import { supabase } from '../lib/supabaseClient'
import {ref} from 'vue'
const email = ref("");
const password = ref("");
async function signInWithEmail() {
  console.log(email, password);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  console.log(data, error)
}

</script>
<template>
  <div>
      <h1>Login Page</h1>
      <form @submit.prevent="signInWithEmail">
        <input
          class="inputField"
          type="email"
          placeholder="Your email"
          v-model="email"
        />
        <input
          class="inputField"
          type="password"
          placeholder="Your Password"
          v-model="password"
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? 
        <router-link to="/home">Sign Up</router-link>
      </p>
    </div>
</template>