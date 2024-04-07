<template>
  <div>
      <h1>Login Page</h1>
      <form @submit.prevent="signIn">
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
        <router-link to="/sign-up">Sign Up</router-link>
      </p>
    </div>
</template>
