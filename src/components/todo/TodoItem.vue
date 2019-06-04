<template>
   <div class="list-group-item h4 d-flex justify-content-between ">
      <div class="form-check" v-if="!editing">
         <input type="checkbox"
                v-model="completed"
                class="form-check-input mr-3">
         <label :class="{'completed': completed}"
                class=" form-check-label ml-3">{{title}}</label>
      </div>
      <div v-else class="">
         <input type="text"
                v-focus
                @keyup.enter="doneEdit"
                @blur="doneEdit"
                @keyup.esc="cancelEdit"
                class="ml-4 h4 form-control form-editing " v-model="title">
      </div>

      <button @click="removeTodo(index)" class="btn btn-outline-danger btn-sm"><i
              class="fa fa-times"></i>
      </button>
   </div>
</template>

<script>
   export default {
      name: "TodoItem",
      props: {
         todo: {
            type: Object,
            required: true
         },
         index: {
            type: Number,
            required: true
         }
      },
      data() {
         return {
            'id': this.todo.id,
            'title': this.todo.title,
            'completed': this.todo.completed,
            'editing': this.todo.editing,
            'beforeEditCache': ''
         }
      },
      methods:{
         removeTodo(index){
            this.$emit('removedTodo',index);
            //stopped at 12:32
         }
      }
   }
</script>

<style scoped>

</style>