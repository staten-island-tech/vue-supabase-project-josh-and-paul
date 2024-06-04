<script setup>
import {ref} from 'vue';
import { supabase } from '../lib/supabaseClient';
import { useStore } from '@/stores/store';
const store = useStore();
const inshore_array = [
  {"species": "Bluefish", "rarity": "Common", "weight": 14.0, "value": 15.0, img:"https://www.seafoodwatch.org/globalassets/sfw-data-blocks/species/bluefish/bluefish.png"},
  {"species": "Striped Bass", "rarity": "Common", "weight": 30.0, "value": 25.0, img:"https://th.bing.com/th/id/OIP.BtNGD3Q6_v0YdB8lW5HUqQHaDG?rs=1&pid=ImgDetMain"},
  {"species": "Flounder", "rarity": "Common", "weight": 5.0, "value": 20.0, img:"https://th.bing.com/th/id/R.31d0e7aa4ac2f503185e02c3738e2e83?rik=udvugaUdoIYODQ&pid=ImgRaw&r=0"},
  {"species": "Tautog", "rarity": "Uncommon", "weight": 9.0, "value": 35.0, img:"https://pngimg.com/uploads/fish/fish_PNG25155.png"},
  {"species": "Summer Flounder", "rarity": "Very Rare", "weight": 8.0, "value": 50.0, img:"https://vignette.wikia.nocookie.net/leapfrog/images/5/56/Summer-flounder.png/revision/latest?cb=20170823004151"},
  {"species": "Atlantic Mackerel", "rarity": "Very Rare", "weight": 2.0, "value": 55.0, img:"https://www.pngplay.com/wp-content/uploads/9/Atlantic-Mackerel-PNG-Images-HD.png"},
  {"species": "Weakfish", "rarity": "Extremely Rare", "weight": 10.0, "value": 40.0, img:"https://nyangler.com/blog/wp-content/uploads/2023/09/Weakfish.png"},
];
const likelihoods = {
'Extremely Rare': 1,
'Very Rare': 5,
'Rare': 20,
'Uncommon': 40,
'Common': 80,
}
const caughtFish = ref({})
const position = ref()
position.value = new URL(`../assets/sitting.png`, import.meta.url).href;
async function catchFish(){
    let total = inshore_array.reduce((acc, fish) => acc + likelihoods[fish.rarity], 0);
    let threshold = Math.random() * total;
    for (let fish of inshore_array) {

threshold -= likelihoods[fish.rarity];
if (threshold < 0) {
    caughtFish.value = fish;
    const { data, error } = await supabase

  .from('profiles')
  .select('fish_caught')
  .match({ email: store.email })
  console.log( data, error )
  const { error: updateError } = await supabase
  .from('profiles')
  .update({ fish_caught: [...data[0].fish_caught, fish] })
  .eq('email', store.email)
  console.log(updateError)
    break
    
}
}
    position.value = new URL(`../assets/catching.png`, import.meta.url).href;
    setTimeout(() => {
        position.value = new URL(`../assets/sitting.png`, import.meta.url).href;
    },4000)
}
</script>
<template>
    <div class="location2">
        <div class="interface">        
            <button class="catch" @click="catchFish">Catch Fish</button>
            <div class="info">
                <h2>Species: {{ caughtFish.species }}</h2>
                <h2>Rarity: {{ caughtFish.rarity }}</h2>
                <h2>Weight: {{ caughtFish.weight }}lbs</h2>
                <h2>Value: ${{ caughtFish.value }}</h2>
            </div>
            <div class="ident">               
            <img :src= "caughtFish.img"/>
            </div> 
            
        </div>
        <div class="fisherman">
        <img :src = "position"/>
        </div>
    </div>
    
</template>
<style>
.location2{
    width: 100vw;
    height: 97vh;
    object-fit: contain;
    background-image: url("../assets/inshore.png");
    background-size: 100%;    
}
.interface{
    width: calc(100vw - 4px);
    height: 30vh;
    background-color: white;
    border: 2px solid black;
    padding: 20px 30px;    
    box-sizing: border-box;
    display: flex;
}
.catch{
    width: 300px;
    height: 200px;
    font-size: 50px;
}
.info{
    padding-left: 6vw;
    justify-self: center;
    font-size: 100%;
    
}
img {
    width: 100%;
    height: 100%;
}
.ident{
    padding-left: 10vw;
}
.fisherman{
    width: 90%;
    height: 55%;
    margin-top: 6%;
}
</style>