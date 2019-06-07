<template>
   <div class="btn-group">
      <button @click="changeFilter('all')"
              :class="{'active': filter === 'all'}"
              class="btn btn-sm btn-primary "
              :disabled="disabled">All
      </button>
      <button @click="changeFilter('active')"
              :class="{'active': filter === 'active'}"
              class="btn btn-sm btn-danger" :disabled="disabled">Active
      </button>
      <button @click="changeFilter('completed')"
              :class="{'active': filter === 'completed'}"
              class="btn btn-sm btn-success" :disabled="disabled">Completed
      </button>
   </div>
</template>

<script>
   export default {
      name: "TodoFiltered",
      props: {
         disabled: {
            type: Boolean,
            required: true
         }
      },
      data() {
         return {
            filter: 'all'
         }
      },
      methods: {
         changeFilter(filter) {
            this.filter = filter;
            eventBus.$emit('FILTER_CHANGED', this.filter);
         }
      }
   }
</script>

<style scoped>

</style>