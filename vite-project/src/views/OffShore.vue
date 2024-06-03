<script setup>
import {ref} from 'vue';
import { supabase } from '../lib/supabaseClient';
import { useStore } from '@/stores/store';
const store = useStore();
const offshore_array = [
{"species": "Summer Flounder", "rarity": "Common", "weight": 6, "value": 11.0, img:"https://vignette.wikia.nocookie.net/leapfrog/images/5/56/Summer-flounder.png/revision/latest?cb=20170823004151"},
{"species": "Striped Bass", "rarity": "Common", "weight": 10, "value": 15.0, img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chartingnature.com%2Fen-ca%2Fproducts%2Fstripped-bass-image&psig=AOvVaw0iO0X5NH7FM0vPPRo6BSyE&ust=1717464664475000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNC6g8ykvoYDFQAAAAAdAAAAABAU"},
{"species": "Bluefish", "rarity": "Uncommon", "weight": 5, "value": 8.0, img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.griceconnect.com%2Flocal-news%2Fbluefish-fishery-to-temporarily-close-during-march-april-2024-8328281&psig=AOvVaw35ce_Abcpe9dL3YgELq9ye&ust=1717464704105000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiCo9-kvoYDFQAAAAAdAAAAABAE"},
{"species": "Black Sea Bass", "rarity": "Uncommon", "weight": 4, "value": 7.50, img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chartingnature.com%2Fproducts%2Fblack-sea-bass&psig=AOvVaw0BbeZX8whDhvVjuZ07rHUz&ust=1717464769747000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKju5f-kvoYDFQAAAAAdAAAAABAE"},
{"species": "Cod", "rarity": "Rare", "weight": 15, "value": 25.0, img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fcod%2520fish%2520png&psig=AOvVaw1hamK-j1eOXbMcx_0EktE5&ust=1717464812001000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjsyZOlvoYDFQAAAAAdAAAAABAO"},
{"species": "Mahi Mahi" , "rarity": "Very Rare", "weight": 40, "value": 70.0, img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3DMahi-mahi&psig=AOvVaw0onvvNw5_4O2q3esEnLDPf&ust=1717465169489000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjU98CmvoYDFQAAAAAdAAAAABAE"},
{"species": "Sword Fish", "rarity": "Extremely Rare", "weight": 1430, "value": 17160.0, img:"https://pngimg.com/uploads/swordfish/swordfish_PNG3.png"},
{"species": "Tuna", "rarity": "Extremely Rare", "weight": 130, "value": 1560.0, img:"https://th.bing.com/th/id/R.077f1fad57d2a666c443fb737c901f05?rik=FVpSY1%2fuhchcIA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-tuna--3500.png&ehk=hd3JnorAqvEy6zne%2fFesQEMiZ6zCkkyI8gyIDvzJQCc%3d&risl=&pid=ImgRaw&r=0"},
{"species": "Grouper", "rarity": "Extremely Rare", "weight": 800, "value": 9600.0, img:"https://datakritter.com/img/Goliath-Grouper.png"},
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
    margin-top: 6%;
}
</style>
