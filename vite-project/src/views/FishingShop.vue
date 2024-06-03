<template>
  <div class="fishingshop-container">
  <div v-for="lure in lures" :key="lure.type" class="lure-box">
  <h1>{{ lure.type }}</h1>
  <h2>{{ lure.description }}</h2>
  <img :src="lure.img"  />
  <h2>{{ lure.price }}</h2>
  <button id="buttton1" @click = "addaddedcartocart(lure)">Add To Cart</button> 
  </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>