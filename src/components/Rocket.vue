<template>
   <div class="card col-4">
      <div class="">
         <img :src="rocket.image" :alt="rocket.name" class="card-img-top rocket-image">
      </div>
      <div class="card-body">
         <h5 class="card-title">{{rocket.name}}</h5>
         <div class="card-text">{{rocket.description}}</div>
         <button class="btn btn-danger btn-sm" @click="removeRocket(rocket)">Remove</button>
      </div>
   </div>
</template>

<script>
    export default {
        props: ['rocket', 'removeRocket'],
        name: "Rocket"
    }
</script>

<style scoped>
   .rocket-image {
      max-height: 400px;
      width: auto !important;
   }
</style>