<template>
   <section class="row">
      <rocket v-for="rocket in rockets" :key="rocket.name" :rocket="rocket" ></rocket>
   </section>
</template>

<script>
   import Rocket from '@/components/Rocket';
   import {mapGetters} from 'vuex';

   export default {
      components: {
         Rocket
      },
      computed: mapGetters(['rockets']),
      // props: ['rockets', 'removeRocket'],
      name: "RocketList"
   }
</script>

<style scoped>

</style>