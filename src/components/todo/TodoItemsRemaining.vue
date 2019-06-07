<template>
   <div class="text-muted h5">{{remaining}} completed of {{itemCount}} item(s)</div>
</template>

<script>
   export default {
      name: "TodoItemsRemaining",
      props: {
         remaining: {
            type: Number,
            required: true
         },
         itemCount: {
            type: Number,
            required: true
         }
      }
   }
</script>

<style scoped>

</style>