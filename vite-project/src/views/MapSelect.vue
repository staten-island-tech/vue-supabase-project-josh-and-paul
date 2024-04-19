<script setup>
</script>
<template>
    <div class="map">
        <div id="freshwater">
        <button to="/freshwater">Freshwater Fishing</button>
        </div>
        <div id="inshore">
        <button to="/inshore">Inshore Saltwater Fishing</button>
        </div>
        <div id="offshore">
        <button to="/offshore">Offshore Saltwater Fishing</button>
        </div>
    </div>
</template>
<style>
.map{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-image: url("../assets/map.png");
    background-size: 100%;
}
#freshwater{
margin-top: 30vh;
margin-left: 35vw;
}
#inshore{
margin-top: 60vh;
margin-left: 65vw;
}
#offshore{
margin-top: 60vh;
margin-left: 70vw;
}
</style>