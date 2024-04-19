<script setup>
import { RouterLink} from 'vue-router'

</script>
<template>
    <div class="location2">
        <RouterLink class="backto" to="/map">Back to Map</RouterLink>
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