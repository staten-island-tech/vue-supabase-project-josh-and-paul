<template>
  <div class="fishingshop-container">
  <div v-for="lure in lures" :key="lure.type" class="lure-box">
  <h1>{{ lure.type }}</h1>
  <h2>{{ lure.description }}</h2>
  <img :src="lure.img"  />
  <h2>{{ lure.price }}</h2>
  <button id="buttton1" @click = "addaddedcartocart(lure)">Add To Cart</button> 
  </div>
    </div>
</template>

<script setup>
const lures = [
  {
    name: "Spinnerbait",
    type: "Spinner",
    description: "Spinnerbaits are versatile lures consisting of a metal blade that spins around a wire frame. They mimic small fish or other prey, attracting predatory fish.",
    image: "https://waypointanglersupply.com/wp-content/uploads/tgsb12ww-220_spinnerbait_coleslaw_sideright.png",
    price: 9.99
  },
  {
    name: "Crankbait",
    type: "Hard Bait",
    description: "Crankbaits are hard-bodied lures with a diving lip that creates a swimming action when retrieved. They are effective for catching various species of fish, particularly bass and walleye.",
    image: "https://th.bing.com/th/id/R.9effd6d766890bb0b8601fcded560210?rik=6eN5yQHSuc4bvg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-1PFtgWlCv7w%2fUSR6DtptWgI%2fAAAAAAAABuQ%2feKoQkaP8KUA%2fs1600%2fLC3-5Crank.png&ehk=%2beNsj0KSiDHd97qfkAjpvgKdJA06o3iibEHOXza7agM%3d&risl=&pid=ImgRaw&r=0",
    price: 7.49
  },
  {
    name: "Jig",
    type: "Soft Plastic",
    description: "Jigs are versatile lures consisting of a weighted head and a soft plastic body. They are often used for bottom fishing and can be effective for catching bass, walleye, and panfish.",
    image: "https://s20owen.github.io/FH002/images/AquaMaze.png",
    price: 6.99
  },
  {
    name: "Topwater Frog",
    type: "Topwater",
    description: "Topwater frogs mimic the appearance and movement of frogs swimming on the surface of the water. They are designed to create a commotion that attracts predatory fish, particularly bass and pike.",
    image: "https://castcray.com/wp-content/uploads/2021/03/FROG-SPECKLED-TOAD.png",
    price: 8.99
  },
  {
    name: "Swimbait",
    type: "Soft Plastic",
    description: "Swimbaits are soft plastic lures designed to imitate the appearance and swimming action of baitfish. They are commonly used for bass fishing but can also be effective for other freshwater and saltwater species.",
    image: "https://th.bing.com/th/id/OIP.0ROfqJyTYDhxxYwfNCoRpwHaD7?rs=1&pid=ImgDetMain",
    price: 10.49
  },
  {
    name: "Spoons",
    type: "Metal",
    description: "Spoons are metal lures with a concave shape that wobbles and flashes in the water, mimicking injured baitfish. They are effective for a variety of species, including trout, salmon, and pike.",
    image: "https://th.bing.com/th/id/OIP.7VDUkh5GfBSsTI-Vj4wxOQHaHj?rs=1&pid=ImgDetMain",
    price: 5.99
  },
  {
    name: "Soft Plastic Worm",
    type: "Soft Plastic",
    description: "Soft plastic worms are one of the most popular bass fishing lures. They come in various sizes and colors and are rigged weedless or with a hook exposed to mimic the movement of a worm or other prey.",
    image: "https://i.ebayimg.com/images/g/R5AAAOSwYzdeOlES/s-l1600.png",
    price: 4.99
  },
  {
    name: "Buzzbait",
    type: "Topwater",
    description: "Buzzbaits are topwater lures with a propeller blade that creates a buzzing sound and surface commotion when retrieved. They are effective for bass fishing, particularly in low light or windy conditions.",
    image: "https://www.strikeking.com/globalassets/media---strike-king-catalog/516bm/516bm_tri-wingbuzzking_chart_sideright.png",
    price: 7.99
  },
  {
    name: "Popper",
    type: "Topwater",
    description: "Poppers are topwater lures designed to create a popping or splashing action when retrieved. They mimic injured baitfish or other surface prey, attracting predatory fish like bass and panfish.",
    image: "https://www.specialiste-leurres.com/mbFiles/images/leurres/poissons-nageurs/popper/best-popper/thumbs/800x600/best-popper-col-05.png",
    price: 6.49
  },
  {
    name: "Chatterbait",
    type: "Spinner",
    description: "Chatterbaits are bladed swim jigs that combine the vibration of a spinnerbait with the action of a jig. They are versatile lures effective for bass, pike, and other predatory fish.",
    image: "https://cdn.shopify.com/s/files/1/0049/8283/3270/products/3_600x.png?v=1614810825",
    price: 8.49
  },
  {
    name: "Inline Spinners",
    type: "Spinner",
    description: "Inline spinners are compact lures consisting of a spinning blade and a body. They are effective for various freshwater species, including trout, bass, and panfish.",
    image: "https://www.fishinghotspots.com/e1/pc/catalog/R555.png",
    price: 4.79
  },
  {
    name: "Surface Lures",
    type: "Topwater",
    description: "Surface lures are designed to float on the water's surface and create a disturbance to attract fish. They are effective for catching species like bass, pike, and muskellunge.",
    image: "surface_lures.jpg",
    price: 5.99
  },
  {
    name: "Plugs",
    type: "Hard Bait",
    description: "Plugs are hard-bodied lures with a diving lip or bill that creates a diving action when retrieved. They are versatile lures effective for catching a wide range of freshwater and saltwater species.",
    image: "plugs.jpg",
    price: 6.99
  },
  {
    name: "Drop Shot Rig",
    type: "Rig",
    description: "The drop shot rig is a finesse technique consisting of a weight tied below a hook with a soft plastic lure suspended above the bottom. It is effective for targeting suspended or finicky fish.",
    image: "drop_shot_rig.jpg",
    price: 7.29
  },
  {
    name: "Alabama Rig",
    type: "Rig",
    description: "The Alabama rig, also known as the umbrella rig, consists of multiple wire arms with swivels to attach lures. It mimics a school of baitfish and is effective for catching bass and other predatory fish.",
    image: "alabama_rig.jpg",
    price: 12.99
  },
  {
    name: "Gulp! Alive! Floating Salmon Eggs",
    type: "Soft Plastic",
    description: "Gulp! Alive! Floating Salmon Eggs are soft plastic lures designed to mimic the appearance and texture of real salmon eggs. They are effective for trout fishing and other species that feed on eggs.",
    image: "gulp_alive_salmon_eggs.jpg",
    price: 5.49
  },
  {
    name: "Spoon Lures",
    type: "Metal",
    description: "Spoon lures are concave metal lures that flutter and wobble when retrieved. They imitate injured baitfish and are effective for a variety of freshwater and saltwater species.",
    image: "spoon_lures.jpg",
    price: 4.99
  },
  {
    name: "Wobbleheads",
    type: "Soft Plastic",
    description: "Wobbleheads are soft plastic lures with a weighted head that creates an erratic wobbling action when retrieved. They are effective for bass fishing, particularly in heavy cover.",
    image: "wobbleheads.jpg",
    price: 6.79
  },
  {
    name: "Shrimp Lures",
    type: "Soft Plastic",
    description: "Shrimp lures are soft plastic lures designed to mimic the appearance and movement of shrimp. They are effective for saltwater species like redfish, snook, and trout.",
    image: "shrimp_lures.jpg",
    price: 8.49
  },
  {
    name: "Squid Lures",
    type: "Soft Plastic",
    description: "Squid lures are soft plastic lures designed to mimic the appearance and movement of squid. They are effective for saltwater species like tuna, mahi-mahi, and billfish.",
    image: "squid_lures.jpg",
    price: 9.99
  },
  {
    name: "Frog Lures",
    type: "Topwater",
    description: "Frog lures are topwater lures designed to mimic the appearance and movement of frogs. They are effective for bass fishing, particularly in areas with heavy vegetation.",
    image: "frog_lures.jpg",
    price: 7.99
  },
  {
    name: "Minnow Lures",
    type: "Hard Bait",
    description: "Minnow lures are hard-bodied lures designed to imitate the appearance and swimming action of minnows. They are effective for catching a variety of freshwater and saltwater species.",
    image: "minnow_lures.jpg",
    price: 6.49
  },
  {
    name: "Shad Lures",
    type: "Hard Bait",
    description: "Shad lures are hard-bodied lures designed to mimic the appearance and swimming action of shad. They are effective for catching bass, walleye, and other predatory fish.",
    image: "shad_lures.jpg",
    price: 7.99
  },
  {
    name: "Crawfish Lures",
    type: "Soft Plastic",
    description: "Crawfish lures are soft plastic lures designed to mimic the appearance and movement of crawfish. They are effective for bass fishing, particularly in rocky or weedy areas.",
    image: "crawfish_lures.jpg",
    price: 5.99
  },
  {
    name: "Maggot Lures",
    type: "Soft Plastic",
    description: "Maggot lures are soft plastic lures designed to mimic the appearance and movement of maggots. They are effective for ice fishing and catching panfish like bluegill and perch.",
    image: "maggot_lures.jpg",
    price: 3.99
  }
];

</script>

<style lang="scss" scoped>

</style>