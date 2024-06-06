<template>
    <div class="user-profile-container">
      <div class="user-profile">
        <h1>Welcome, {{ store.email }}</h1>
          <div class="statistics">
          <h2>Most Recent Fish Caught: {{ mostRecentFish.species }} (Rarity: {{ mostRecentFish.rarity }})</h2>
          <h2>Rarest Fish Caught: {{ rarestFish.species }} (Rarity: {{ rarestFish.rarity }})</h2>
          <h2>Heaviest Fish Caught: {{ heaviestFish.species }} (Weight: {{ heaviestFish.weight }})</h2>
          <h2>Most Valuable Fish Caught: {{ mostValuableFish.species }} (Value: ${{ mostValuableFish.value }})</h2>
          <h2>Total Value of All Fish Caught: ${{ totalValue }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/store';
import { supabase } from '../lib/supabaseClient';

const store = useStore();
const mostRecentFish = ref({});
const rarestFish = ref({})
const heaviestFish = ref({});
const mostValuableFish = ref({});
const totalValue = ref(0); // New variable to store the total value

onMounted(async () => {
  const { data, error } = await supabase
    .from('profiles')
    .select('fish_caught')
    .eq('email', store.email);

  if (error) {
    console.log(error);
    return;
  }

  const fishCaught = data[0]?.fish_caught || [];
  const rarityLevels = {
    'Common': 1,
    'Uncommon': 2,
    'Rare': 3,
    'Very Rare': 4,
    'Extremely Rare': 5
  };

  const sortedFish = fishCaught.sort((a, b) => rarityLevels[b.rarity] - rarityLevels[a.rarity]);

  rarestFish.value = sortedFish[0];
  mostRecentFish.value = fishCaught[fishCaught.length - 1] || {};
  heaviestFish.value = fishCaught.sort((a, b) => b.weight - a.weight)[0] || {};
  mostValuableFish.value = fishCaught.sort((a, b) => b.value - a.value)[0] || {};

  totalValue.value = fishCaught.reduce((total, fish) => total + fish.value, 0);
});
</script>

  
  <style scoped>
  .user-profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: lightblue;
  }
  
  .user-profile {
    font-family: Arial, sans-serif;
    width: 100%;
    padding: 5%;
    box-shadow: 0 0 1% rgba(0, 0, 0, 0.1);
    border-radius: 1%;
    text-align: center;
  }
  
  .user-profile h1 {
    font-size: 3em;
    color: #333;
    margin-bottom: 5%;
  }
  
  .statistics {
    border-top: 0.1em solid #ccc;
    padding-top: 5%;
  }
  
  .statistics h2 {
    font-size: 2em;
    color: #666;
    margin-bottom: 2%;
  }
  </style>