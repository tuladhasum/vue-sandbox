<template>
   <section class="row">
      <rocket v-for="rocket in rockets" :rocket="rocket" :removeRocket="removeRocket"></rocket>
   </section>
</template>

<script>
    import Rocket from '@/components/Rocket';

    export default {
        components: {
            Rocket
        },
        props: ['rockets', 'removeRocket'],
        name: "RocketList"
    }
</script>

<style scoped>

</style>