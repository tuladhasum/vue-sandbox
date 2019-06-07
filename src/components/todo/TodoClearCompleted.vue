<template>
   <div>
      <button v-if="showClearCompleted"
              @click="clearCompleted"
              class="btn btn-link">Clear Completed
      </button>
   </div>
</template>

<script>
   export default {
      name: "TodoClearCompleted",
      props: {
         showClearCompleted: {
            type: Boolean,
            required: true
         }
      },
      methods: {
         clearCompleted() {
            eventBus.$emit('CLEAR_COMPLETED');
         }
      }
   }
</script>

<style scoped>

</style>