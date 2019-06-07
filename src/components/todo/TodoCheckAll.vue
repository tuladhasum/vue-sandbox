<template>
   <div>
      <input type="checkbox"
             @change="allChecked"
             :disabled="disabled"
             :checked="checked"
             class="form-check-input mr-3">
      <label class="form-check-label ml-3">Check All</label>
   </div>
</template>

<script>
   export default {
      props: {
         disabled: {
            type: Boolean,
            required: true
         },
         checked: {
            type: Boolean,
            required: true
         }
      },
      name: "TodoCheckAll",
      methods: {
         allChecked() {
            eventBus.$emit('ALL_CHECKED');
         }
      }
   }
</script>

<style scoped>

</style>