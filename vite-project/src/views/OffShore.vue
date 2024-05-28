<script setup>
import {ref} from 'vue';
import { RouterLink} from 'vue-router';
const offshore_array = [
    {"species": "Largemouth Bass", "rarity": "Common", "weight": 10.5, "value": 15.0, img:"https://assets.website-files.com/601c38060e6528a8583f45e5/631f988440efd8efd28e0a36_Largemouth%20Bass.png"},
    {"species": "Smallmouth Bass", "rarity": "Common", "weight": 8.4, "value": 12.0, img:"https://th.bing.com/th/id/R.00f8b58379755076d13a387ed7adb33c?rik=cRZFVTCh88o5Hw&pid=ImgRaw&r=0&sres=1&sresct=1"},
    {"species": "Bluegill", "rarity": "Common", "weight": 1.1, "value": 2.0, img:"https://th.bing.com/th/id/OIP.6IT51qrsTZjSSzk8ZbcJaAHaEh?rs=1&pid=ImgDetMain"},
    {"species": "Yellow Perch", "rarity": "Common", "weight": 1.2, "value": 2.5, img:"https://www.seafoodwatch.org/globalassets/sfw-data-blocks/species/perch/yellow-perch.png"},
    {"species": "Northern Pike", "rarity": "Uncommon", "weight": 18.0, "value": 25.0, img:"https://www.publicdomainpictures.net/pictures/400000/velka/northern-pike.png"},
    {"species": "Walleye", "rarity": "Uncommon", "weight": 10.0, "value": 20.0, img:"https://www.seafoodwatch.org/globalassets/sfw-data-blocks/species/walleye/cornell-walleye.png"},
    {"species": "Rainbow Trout", "rarity": "Rare", "weight": 5.0, "value": 30.0, img:"https://www.pngmart.com/files/22/Rainbow-Trout-PNG-Clipart.png"},
    {"species": "Brown Trout", "rarity": "Rare", "weight": 14.0, "value": 35.0, img:"https://trekandangle.com/wp-content/uploads/2021/05/Brown-Trout-785x279.png"},
    {"species": "Lake Trout", "rarity": "Very Rare", "weight": 20.0, "value": 40.0, img:"https://cdn.pixabay.com/photo/2021/05/06/12/06/lake-trout-6233286_1280.png"},
    {"species": "Atlantic Salmon", "rarity": "Very Rare", "weight": 12.0, "value": 45.0, img:"https://th.bing.com/th/id/R.f73052a328fd6ef558b09d87af8fb40f?rik=jzCn2jgRTwj2Sw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-salmon-fish-atlantic-salmon-591.png&ehk=%2bLzoeNoE4fzbyGWcnedAKhw7DA35EAyRCpDyusnvV3M%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"},
    {"species": "Muskellunge", "rarity": "Extremely Rare", "weight": 30.0, "value": 50.0, img:"https://th.bing.com/th/id/OIP.oEIg3R4BxzDBdRAgtNzMjgHaFj?rs=1&pid=ImgDetMain"},
    {"species": "Sturgeon", "rarity": "Extremely Rare", "weight": 150.0, "value": 100.0, img:"https://th.bing.com/th/id/R.31a50f20cc1f24861096528f69519e04?rik=DOiup4MHGvXaaQ&riu=http%3a%2f%2fwww.partnershipforcoastalwatersheds.org%2fwordpress%2fwp-content%2fuploads%2f2015%2f10%2fsPicture2.png&ehk=sa6NZ4skWY2%2fXmUoFLVi8L0Ja6rchamufwsLurNUBGE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"}
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
    <div class="location2">
        <RouterLink class="backto" to="/map">Back to Map</RouterLink>
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
.location1{
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