<script setup>
import { RouterLink} from 'vue-router'

</script>
<template>
    <div class="map">
        <RouterLink class="freshwater" to="/freshwater">Freshwater Fishing</RouterLink>
        <RouterLink class="inshore" to="/inshore">Inshore Saltwater Fishing</RouterLink>
        <RouterLink class="offshore" to="/offshore">Offshore Saltwater Fishing</RouterLink>
    </div>
</template>
<style>
.map{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-image: url("../assets/map.png");
}
</style>