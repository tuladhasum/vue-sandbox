<template>
   <section class="container">
      <h1>Rockets</h1>
      <new-rocket-form></new-rocket-form>
      <rocket-list></rocket-list>

      <!--      <new-rocket-form :addRocket="addRocket"></new-rocket-form>-->
<!--      <rocket-list :rockets="rockets" :removeRocket="removeRocket"></rocket-list>-->
   </section>
</template>

<script>
    import NewRocketForm from '@/components/NewRocketForm';
    import RocketList from '@/components/RocketList';

    // import API from '@/lib/API';

    export default {
        components: {
            NewRocketForm,
            RocketList
        },
       // computed : mapGetters({
       //    rockets: 'rockets'
       // }),
        // data() {
        //     return {
        //         rockets: []
        //     }
        // },
        async mounted() {
            // this.rockets = await API.getRockets();
           this.$store.dispatch('getRockets');
        },
        methods: {
            // addRocket(rocket) {
            //     this.rockets.push(rocket);
            // },
            // removeRocket(rocket) {
            //     const index = this.rockets.indexOf(rocket);
            //     this.rockets.splice(index, 1);
            // }
        },
        name: "rockets"
    }
</script>

<style scoped>

</style>