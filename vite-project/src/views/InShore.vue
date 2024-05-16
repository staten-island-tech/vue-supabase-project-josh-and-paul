<script setup>
import {ref} from 'vue';
import { RouterLink} from 'vue-router';
const inshorewater_array = [
    {"species": "Summer Flounder", "rarity": "Common", "weight": 10.5, "value": 15.0, img:"https://i.pinimg.com/originals/f6/ce/cf/f6cecf75bd450bd1759d5e82b622bceb.png"},
    {"species": "Trigger Fish", "rarity": "Common", "weight": 8.4, "value": 12.0, img:"https://th.bing.com/th/id/R.00f8b58379755076d13a387ed7adb33c?rik=cRZFVTCh88o5Hw&pid=ImgRaw&r=0&sres=1&sresct=1"},
    {"species": "Striped Bass", "rarity": "Common", "weight": 1.1, "value": 2.0, img:"https://api.fp-collective.com/wp-content/uploads/2020/09/Striped_Bass.png"},
    {"species": "Cod", "rarity": "Common", "weight": 1.2, "value": 2.5, img:"https://www.seafoodwatch.org/globalassets/sfw-data-blocks/species/perch/yellow-perch.png"},
    {"species": "Northern Pike", "rarity": "Uncommon", "weight": 18.0, "value": 25.0, img:"https://www.publicdomainpictures.net/pictures/400000/velka/northern-pike.png"},
    {"species": "Walleye", "rarity": "Uncommon", "weight": 10.0, "value": 20.0, img:"https://www.seafoodwatch.org/globalassets/sfw-data-blocks/species/walleye/cornell-walleye.png"},
    {"species": "Rainbow Trout", "rarity": "Rare", "weight": 5.0, "value": 30.0, img:"https://www.pngmart.com/files/22/Rainbow-Trout-PNG-Clipart.png"},
    {"species": "Brown Trout", "rarity": "Rare", "weight": 14.0, "value": 35.0, img:"https://trekandangle.com/wp-content/uploads/2021/05/Brown-Trout-785x279.png"},
    {"species": "Lake Trout", "rarity": "Very Rare", "weight": 20.0, "value": 40.0, img:"https://cdn.pixabay.com/photo/2021/05/06/12/06/lake-trout-6233286_1280.png"},
    {"species": "Atlantic Salmon", "rarity": "Very Rare", "weight": 12.0, "value": 45.0, img:"https://th.bing.com/th/id/R.f73052a328fd6ef558b09d87af8fb40f?rik=jzCn2jgRTwj2Sw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-salmon-fish-atlantic-salmon-591.png&ehk=%2bLzoeNoE4fzbyGWcnedAKhw7DA35EAyRCpDyusnvV3M%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"},
    {"species": "Muskellunge", "rarity": "Extremely Rare", "weight": 30.0, "value": 50.0, img:"https://th.bing.com/th/id/OIP.oEIg3R4BxzDBdRAgtNzMjgHaFj?rs=1&pid=ImgDetMain"},
    {"species": "Sturgeon", "rarity": "Extremely Rare", "weight": 150.0, "value": 100.0, img:"https://th.bing.com/th/id/R.31a50f20cc1f24861096528f69519e04?rik=DOiup4MHGvXaaQ&riu=http%3a%2f%2fwww.partnershipforcoastalwatersheds.org%2fwordpress%2fwp-content%2fuploads%2f2015%2f10%2fsPicture2.png&ehk=sa6NZ4skWY2%2fXmUoFLVi8L0Ja6rchamufwsLurNUBGE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"}
];
const caughtFish = ref({})
function catchFish(){
    const randomIndex = Math.floor(Math.random() * inshorewater_array.length); 
    const randomFish = inshorewater_array[randomIndex]; 
    caughtFish.value = randomFish;
};

</script>
<template>
    <div class="location2">
        <RouterLink class="backto" to="/map">Back to Map</RouterLink>
        <div class="interface">        
            <button class="catch" @click="catchFish">Catch Fish</button>
            <div class="info">
                Species: {{ caughtFish.species }}
                Rarity: {{ caughtFish.rarity }}
                Weight: {{ caughtFish.weight }}lbs
                Value: ${{ caughtFish.value }}
                <img :src= "caughtFish.img"/>
            </div>
        </div>
    </div>
</template>
<style>
.location2{
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    background-image: url("../assets/inshore.png");
    background-size: 100%;
}
</style>