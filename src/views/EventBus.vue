<template>
   <section class="container">
      <h1>Event Bus Example</h1>
      <div class="row">
         <div class="col-6">
            <leftside></leftside>
         </div>
         <div class="col-6">
            <rightside></rightside>
         </div>
      </div>
      <small><a href="https://medium.com/easyread/vue-as-event-bus-life-is-happier-7a04fe5231e1">Source</a></small>
   </section>
</template>

<script>
   import Leftside from '../components/eventbus/Leftside';
   import Rightside from '../components/eventbus/Rightside';

   export default {
      name: "EventBus",
      components: {Leftside, Rightside}
   }
</script>

<style scoped>

</style>