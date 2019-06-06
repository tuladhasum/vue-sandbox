<template>
   <div class="list-group-item h4 d-flex justify-content-between "
        @dblclick="editTodo">
      <div class="form-check" v-if="!editing">
         <input type="checkbox"
                @change="doneEdit"
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

      <div class="btn-group">
         <button class="btn btn-outline-info btn-sm" @click="pluralize">
            <i class="fa fa-eye"></i>
         </button>
         <button @click="removeTodo(index)"
                 class="btn btn-outline-danger btn-sm">
            <i class="fa fa-times"></i>
         </button>
      </div>


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
         },
         checkAll: {
            type: Boolean,
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
      created() {
         eventBus.$on('pluralize', this.handlePluralize);
      },
      beforeDestroy() {
         eventBus.$off('pluralize', this.handlePluralize);
      },
      watch: {
         checkAll() {
            this.completed = this.checkAll ? true : this.todo.completed;
            // if (this.checkAll) {
            //    this.completed = true;
            // } else{
            //    this.completed = this.todo.completed;
            // }
         }
      },
      methods: {
         removeTodo(index) {
            eventBus.$emit('removedTodo', index);
            //stopped at 12:32
         },
         editTodo() {
            this.beforeEditCache = this.title;
            this.editing = true;
         },
         cancelEdit() {
            this.title = this.beforeEditCache;
            this.editing = false;
         },
         finishedEdit: function () {
            eventBus.$emit('finishedEdit', {
               'index': this.index,
               'todo': {
                  'id': this.id,
                  'title': this.title,
                  'completed': this.completed,
                  'editing': this.editing
               }
            });
         }, doneEdit() {
            if (this.title.trim().length === 0) {
               this.title = this.beforeEditCache;
            }
            this.editing = false;
            this.finishedEdit();
         },
         pluralize() {
            eventBus.$emit('pluralize');
            this.finishedEdit();
         },
         handlePluralize() {
            this.title = this.title + 's';
         }
      },
      directives: {
         focus: {
            inserted: function (el) {
               el.focus();
            }
         }
      }
   }
</script>

<style scoped>
   .completed {
      text-decoration: line-through;
      color: gray;
   }
</style>