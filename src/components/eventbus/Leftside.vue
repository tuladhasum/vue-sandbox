<template>
   <div class="left-side">
      <div class="content">
         <div>
            <label> Location </label>
            <input type="text" name="location" v-model="location"/>
         </div>
         <div>
            <label> Caption </label>
            <input type="text" name="caption" v-model="caption"/>
         </div>
         <input type="submit" v-on:click="sendData" value="Send">
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            location: '',
            caption: ''
         }
      },
      methods: {
         sendData() {
            const payload = {
               location: this.location,
               caption: this.caption
            };
            eventBus.$emit('sendData', payload);
         }
      }
   }
</script>

<style scoped>
   .left-side {
      /*width: 50%;*/
      /*height: 500px;*/
      /*float: left;*/
      /*background-color: #35495e;*/
   }

   input[type=submit] {
      width: 100%;
      background-color: #42b883;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
   }

   input[type=text], select {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
   }
</style>
