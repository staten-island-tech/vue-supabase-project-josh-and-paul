<script setup>
import { RouterLink} from 'vue-router'

</script>
<template>
    <div class="location3">
        <RouterLink class="backto" to="/map">Back to Map</RouterLink>
    </div>
</template>
<style>
.location3{
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    background-image: url("../assets/offshore.png");
    background-size: 100%;
}
</style>