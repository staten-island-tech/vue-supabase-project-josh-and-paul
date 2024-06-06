<script setup>
import router from '@/router/index';
</script>
<template>
    <div class="map">
      <div id="freshwater">
        <button @click="router.push('/freshwater')">Freshwater Fishing</button>
      </div>
      <div id="inshore">
        <button @click="router.push('/inshore')">Inshore Fishing</button>        
      </div>
      <div id="offshore">
        <button @click="router.push('/offshore')">Offshore Fishing</button>        
      </div>
    </div>
  </template>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .map {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; 
  height: 100vh; 
  background-image: url("../assets/map.png");
  background-size: cover; 
}
#freshwater, #inshore, #offshore {
  position: absolute; 
} 
#freshwater {
  top: 30%; 
  left: 35%;
}

#inshore {
  top: 80%;
  left: 65%;
}

#offshore {
  top: 90%;
  left: 90%;
}
</style>
  