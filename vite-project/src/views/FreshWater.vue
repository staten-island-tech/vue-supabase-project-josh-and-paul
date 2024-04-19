<script setup>
import { RouterLink} from 'vue-router'

</script>
<template>
    <div class="location1">
        <RouterLink class="backto" to="/map">Back to Map</RouterLink>
    </div>
</template>
<style>
.location1{
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    background-image: url("../assets/freshwater.png");
    background-size: 100%;
}
</style>