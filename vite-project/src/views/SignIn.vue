<script>
import { supabase } from '../lib/supabaseClient'
import {ref} from 'vue'
async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
}

</script>
<template>
  <div>
      <h1>Login Page</h1>
      <form @submit.prevent="signInWithPassword">
        <input
          class="inputField"
          type="email"
          placeholder="Your email"
          v-model="form.email"
        />
        <input
          class="inputField"
          type="password"
          placeholder="Your Password"
          v-model="form.password"
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? 
        <router-link to="/">Sign Up</router-link>
      </p>
    </div>
</template>
