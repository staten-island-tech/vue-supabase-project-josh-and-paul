<script setup>
import {ref} from 'vue';
const inshore_array = [
  {"species": "Atlantic Cod", "weight": "10 lbs", "value": "$15", "rarity": "common"},
  {"species": "Bluefish", "weight": "15 lbs", "value": "$20", "rarity": "uncommon"},
  {"species": "Striped Bass", "weight": "30 lbs", "value": "$30", "rarity": "common"},
  {"species": "Flounder", "weight": "5 lbs", "value": "$10", "rarity": "common"},
  {"species": "Black Sea Bass", "weight": "4 lbs", "value": "$12", "rarity": "uncommon"},
  {"species": "Tautog", "weight": "7 lbs", "value": "$14", "rarity": "uncommon"},
  {"species": "Summer Flounder", "weight": "6 lbs", "value": "$11", "rarity": "common"},
  {"species": "Atlantic Mackerel", "weight": "2 lbs", "value": "$5", "rarity": "common"},
]
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
function catchFish(){
    let total = inshore_array.reduce((acc, fish) => acc + likelihoods[fish.rarity], 0);
    let threshold = Math.random() * total;
    for (let fish of inshore_array) {

threshold -= likelihoods[fish.rarity];
if (threshold < 0) {
    caughtFish.value = fish;
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