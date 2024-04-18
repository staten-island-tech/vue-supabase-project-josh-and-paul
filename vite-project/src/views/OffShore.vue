<script setup>
import { RouterLink} from 'vue-router'

</script>
<template>
    <div class="location3">
        <RouterLink class="freshwater" to="/freshwater">Freshwater Fishing</RouterLink>
        <RouterLink class="inshore" to="/inshore">Inshore Saltwater Fishing</RouterLink>
        <RouterLink class="offshore" to="/offshore">Offshore Saltwater Fishing</RouterLink>
    </div>
</template>
<style>
.location3{
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    background-image: url("../assets/offshore.png");
}
</style>