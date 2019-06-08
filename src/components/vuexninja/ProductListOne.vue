<template>
   <div>
      <h1>Product List 1</h1>
      <el-table :data="saleProducts"
                :stripe="true"
                style="width: 100%">
         <el-table-column prop="name"
                          label="Product Name">
         </el-table-column>
         <el-table-column prop="price"
                          label="Price">
         </el-table-column>
      </el-table>
      <el-button type="primary" @click="reducePrice(4)">Reduce Price</el-button>
   </div>
</template>

<script>
   import {mapActions} from 'vuex';
   import {mapGetters} from 'vuex';

   export default {
      name: "ProductListOne",
      computed: {
         products() {
            return this.$store.state.products;
         },
         ...mapGetters([
            'saleProducts'
         ])
         /*saleProducts() {
            return this.$store.getters.saleProducts;
         }*/
      },
      methods: {
         ...mapActions([
            'reducePrice'
         ])
         /*reducePrice(amount) {
            this.$store.dispatch('reducePrice', amount);
            // this.$store.commit('reducePrice');
         }*/
      }
   }
</script>

<style scoped>

</style>