<script setup>
import {ref} from 'vue';
const offshore_array = [
{"species": "Grouper", "rarity": "Extremely Rare", "weight": 800, "value": 9600.0, img:"https://datakritter.com/img/Goliath-Grouper.png"},
{"species": "Grouper", "rarity": "Extremely Rare", "weight": 800, "value": 9600.0, img:"https://datakritter.com/img/Goliath-Grouper.png"},
{"species": "Grouper", "rarity": "Extremely Rare", "weight": 800, "value": 9600.0, img:"https://datakritter.com/img/Goliath-Grouper.png"},
{"species": "Grouper", "rarity": "Extremely Rare", "weight": 800, "value": 9600.0, img:"https://datakritter.com/img/Goliath-Grouper.png"},
{"species": "Grouper", "rarity": "Extremely Rare", "weight": 800, "value": 9600.0, img:"https://datakritter.com/img/Goliath-Grouper.png"},
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
function catchFish(){
    let total = offshore_array.reduce((acc, fish) => acc + likelihoods[fish.rarity], 0);
    let threshold = Math.random() * total;
    for (let fish of offshore_array) {

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
