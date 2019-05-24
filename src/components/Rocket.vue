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
   import { mapMutations} from 'vuex';
   export default {
      props: ['rocket'],
      methods: mapMutations(['removeRocket']),
      // methods: {
      //    removeRocket() {
      //       this.$store.commit('removeRocket', this.rocket);
      //    }
      // },
      name: "Rocket"
   }
</script>

<style scoped>
   .rocket-image {
      max-height: 400px;
      width: auto !important;
   }
</style>