<script setup>
import { RouterLink} from 'vue-router'

</script>
<template>
    <div class="location1">
        <RouterLink class="freshwater" to="/freshwater">Freshwater Fishing</RouterLink>
        <RouterLink class="inshore" to="/inshore">Inshore Saltwater Fishing</RouterLink>
        <RouterLink class="offshore" to="/offshore">Offshore Saltwater Fishing</RouterLink>
    </div>
</template>
<style>
.location1{
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    background-image: url("../assets/freshwater.png");
}
</style>