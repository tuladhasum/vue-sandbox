<template>
   <section class="container">
      <div class="row justify-content-center">
         <div class="col-8">
            <h1 class="display-4 mb-4">Google Keep</h1>
            <div class="form-group">
               <input type="text"
                      @keyup.enter="addTodo"
                      v-model="newTodo"
                      class="form-control form-control-lg"
                      placeholder="What needs to be done?">
            </div>

            <ul class="list-group-flush">
               <transition-group enter-active-class="animated fadeIn faster"
                                 :duration="{ enter: 300, leave: 300 }"
                                 leave-active-class="animated fadeOut faster">
                  <todo-item :todo="todo"
                             :index="index"
                             :checkAll="itemCount === remaining"
                             @removedTodo="removeTodo"
                             @finishedEdit="finishedEdit"
                             v-for="(todo,index) in
                             todosFiltered" :key="todo.id">
                  </todo-item>
               </transition-group>
               <li v-if="isEmpty" class="list-group-item h4 bg-danger text-light">No Items</li>

               <li class="list-group-item bg-light d-flex justify-content-between">
                  <div class="form-check h4">
                     <input type="checkbox"
                            @change="checkAllTodos"
                            :disabled="isEmpty"
                            :checked="itemCount === remaining"
                            class="form-check-input mr-3">
                     <label class="form-check-label ml-3">Check All</label>
                  </div>
                  <div class="text-muted h5">{{remaining}} completed of {{itemCount}} item(s)</div>
               </li>

               <li class="list-group-item d-flex justify-content-between">
                  <div class="btn-group">
                     <button @click="filter = 'all'"
                             :class="{'active': filter === 'all'}"
                             class="btn btn-sm btn-primary "
                             :disabled="isEmpty">All
                     </button>
                     <button @click="filter = 'active'"
                             :class="{'active': filter === 'active'}"
                             class="btn btn-sm btn-danger" :disabled="isEmpty">Active
                     </button>
                     <button @click="filter = 'completed'"
                             :class="{'active': filter === 'completed'}"
                             class="btn btn-sm btn-success" :disabled="isEmpty">Completed
                     </button>
                  </div>
                  <div>
                     <transition name="fade">
                        <button v-if="remaining"
                                @click="clearCompleted"
                                class="btn btn-link"
                                :disabled="isEmpty">Clear Completed
                        </button>
                     </transition>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   </section>
</template>

<script>
   import TodoItem from '../components/todo/TodoItem';

   export default {
      name: "TodoList",
      components: {
         TodoItem
      },
      data() {
         return {
            newTodo: "",
            idForTodo: 0,
            beforeEditCache: "",
            filter: 'all',
            todos: [
               // {
               //    'id': 1,
               //    'title': 'Todo Item number 1',
               //    'completed': false,
               //    'editing': false
               // },
               // {
               //    'id': 2,
               //    'title': 'Todo Item number 2',
               //    'completed': true,
               //    'editing': false
               // },
            ]
         }
      },
      mounted() {
         if (localStorage.todolist) {
            this.todos = JSON.parse(localStorage.todolist);
         }
      },
      watch: {
         todos: {
            handler() {
               localStorage.todolist = JSON.stringify(this.todos);
            },
            deep: true
         }
      },
      computed: {
         todosFiltered() {
            if (this.filter === 'all') {
               return this.todos;
            } else if (this.filter === 'active') {
               return this.todos.filter(todo => !todo.completed);
            } else if (this.filter === 'completed') {
               return this.todos.filter(todo => todo.completed);
            }
            return this.todos;
         },
         isEmpty() {
            return this.todos.length === 0;
         },
         itemCount() {
            return this.todos.length;
         },
         remaining() {
            return this.todos.filter(todo => todo.completed).length;
         }
      },
      methods: {
         addTodo() {
            if (this.newTodo.trim().length === 0) return;
            this.todos.push({
               id: this.idForTodo,
               title: this.newTodo,
               completed: false,
               editing: false
            });

            this.idForTodo++;
            this.newTodo = '';
         },
         removeTodo(index) {
            this.todos.splice(index, 1);
         },
         finishedEdit(data) {
            this.todos.splice(data.index, 1, data.todo);
         },
         checkAllTodos() {
            this.todos.forEach(todo => {
               todo.completed = event.target.checked
            });
         },
         clearCompleted() {
            this.todos = this.todos.filter(todo => {
               return todo.completed === false;
            });
         }
      }
   }
</script>

<style scoped>
   .fade-enter-active, .fade-leave-active {
      transition: opacity .2s;
   }

   .fade-enter, .fade-leave-to {
      opacity: 0;
   }

</style>