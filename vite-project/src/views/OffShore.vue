<script setup>
import {ref} from 'vue';
import { supabase } from '../lib/supabaseClient';
import { useStore } from '@/stores/store';
import whalenImage from '../assets/whalen.jpg';
const store = useStore();
const offshore_array = [
{"species": "Sting Ray", "rarity": "Common", "weight": 20, "value": 25.0, img:"https://pngimg.com/d/stingray_PNG1.png"},
{"species": "Black Sea Bass", "rarity": "Uncommon", "weight": 4, "value": 7.50, img:"https://www.chartingnature.com/cdn/shop/products/2161-black-sea-bass_1080x.png?v=1660934440"},
{"species": "Cod", "rarity": "Rare", "weight": 15, "value": 25.0, img:"https://www.aller-aqua.com/media/11401/14-cod.png"},
{"species": "Mahi Mahi" , "rarity": "Very Rare", "weight": 40, "value": 70.0, img:"https://www.seafoodwatch.org/globalassets/sfw-data-blocks/species/dolphinfish/mahi-mahi.png"},
{"species": "Sword Fish", "rarity": "Extremely Rare", "weight": 1430, "value": 17160.0, img:"https://huntercharters.com/wp-content/themes/yootheme/cache/blue-marlin-ad67f954.jpeg"},
{"species": "Tuna", "rarity": "Extremely Rare", "weight": 130, "value": 1560.0, img:"https://th.bing.com/th/id/R.077f1fad57d2a666c443fb737c901f05?rik=FVpSY1%2fuhchcIA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tuna--3500.png&ehk=hd3JnorAqvEy6zne%2fFesQEMiZ6zCkkyI8gyIDvzJQCc%3d&risl=&pid=ImgRaw&r=0"},
{"species": "Grouper", "rarity": "Extremely Rare", "weight": 800, "value": 9600.0, img:"https://datakritter.com/img/Goliath-Grouper.png"},
{"species": "Whalen", "rarity": "Unbelievably Rare", "weight": "5 Assessment Grades", "value": 100000, img: whalenImage},
];
const likelihoods = {
'Unbelievably Rare': 0.5,
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
    let total = offshore_array.reduce((acc, fish) => acc + likelihoods[fish.rarity], 0);
    let threshold = Math.random() * total;
    for (let fish of offshore_array) {

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
    <div class="location3">
        <div class="interface">        
            <button class="catch" @click="catchFish">Catch Fish</button>
            <div class="info">
                <h2>Species: {{ caughtFish.species }}</h2>
                <h2>Rarity: {{ caughtFish.rarity }}</h2>
                <h2>Weight: {{ caughtFish.weight }} lbs</h2>
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
.location3{
    width: 100vw;
    height: 97vh;
    object-fit: contain;
    background-image: url("../assets/offshore.png");
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
    margin-top: 9%;
}
</style>
