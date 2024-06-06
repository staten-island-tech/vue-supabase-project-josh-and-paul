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
  <div class="body">
    <div class="sign-in">
      <h1>Fishing Simulator</h1>
      <h2>Login Page</h2>
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
  </div>
</template>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
}

.sign-in {
  font-family: Arial, sans-serif;
  width: 60%;
  padding: 5%;
  box-shadow: 0 0 1% rgba(0, 0, 0, 0.1);
  border-radius: 1%;
  text-align: center;
  background-color: white;
}

.sign-in h1 {
  font-size: 3em;
  color: #333;
  margin-bottom: 5%;
}
.sign-up h2 {
  font-size: 2em;
  color: #666;
  margin-bottom: 2%;
}

.inputField {
  width: 80%;
  padding: 1%;
  margin-bottom: 2%;
  text-align: center;
}

button {
  width: 80%;
  padding: 1%;
  font-size: 1.5em;
  margin-top: 2%;
}
</style>
