<template>
   <div>
      <h1>Product List 2</h1>
      <el-table :data="saleProducts" :row-class-name="tableRowClassName"
                style="width: 100%">
         <el-table-column prop="name"
                          label="Product Name">
         </el-table-column>
         <el-table-column prop="price"
                          label="Price">
         </el-table-column>
      </el-table>
   </div>
</template>

<script>
   export default {
      name: "ProductListTwo",
      computed: {
         products() {
            return this.$store.state.products;
         },
         saleProducts() {
            return this.$store.getters.saleProducts;
         }
      },
      methods: {
         tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
               return 'warning-row';
            } else if (rowIndex === 3) {
               return 'success-row';
            }
            return '';
         }
      }
   }
</script>

<style scoped>
   .el-table .warning-row {
      background: oldlace;
   }

   .el-table .success-row {
      background: #f0f9eb;
   }
</style>