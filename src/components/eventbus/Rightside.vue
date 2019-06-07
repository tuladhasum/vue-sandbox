<template>
   <div class="right-side">
      <div class="content">
         <p> {{ data.location }} </p>
         <p> {{ data.caption }} </p>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            data: {
               location: 'Location placeholder',
               caption: 'Payload placeholder'
            }
         }
      },
      methods: {
         updateData(payload) {
            this.data = payload;
         }
      },
      created() {
         eventBus.$on('sendData', (payload) => {
            this.updateData(payload)
         });
      }
   }
</script>

<style scoped>
   .right-side {
      /*width: 50%;*/
      /*height: 500px;*/
      /*float: right;*/
      /*background-color: #42b883;*/
      /*border: 1px;*/
      /*border-color: black;*/
   }
</style>
