<script setup>
import { supabase } from '../lib/supabaseClient'
import {ref} from 'vue'
const email = ref("");
const password = ref("");
async function signUp() {
  console.log(email, password);
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  })
  console.log(data, error);
}
</script>

<template>
  <div>
      <h1>SignUp Page</h1>
      <form @submit.prevent="signUp">
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
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? 
        <router-link to="/about">Log in</router-link>
      </p>
    </div>
</template>
