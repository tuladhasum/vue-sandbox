<template>
   <div class="home container text-center">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--      <ElementComponent></ElementComponent>-->
   </div>
</template>

<script>
   // @ is an alias to /src
   import HelloWorld from '@/components/HelloWorld.vue'
   import ElementComponent from '@/components/ElementComponent.vue'

   export default {
      name: 'home',
      components: {
         HelloWorld,
         ElementComponent
      }
   }
</script>
