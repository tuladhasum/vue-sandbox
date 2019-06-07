<template>
   <el-container class="container">
      <el-main>
         <product-list-one></product-list-one>
         <product-list-two></product-list-two>
      </el-main>
   </el-container>
</template>

<script>
   import ProductListOne from '../components/vuexninja/ProductListOne';
   import ProductListTwo from '../components/vuexninja/ProductListTwo';

   export default {
      name: "VuexNinja",
      components: {
         ProductListOne, ProductListTwo
      },
      data() {
         return {}
      }
   }
</script>

<style scoped>

</style>