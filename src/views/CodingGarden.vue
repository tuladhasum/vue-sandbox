<template>
   <div>
      <div class="container">
         <div class=" ">
            <h3>{{title}}</h3>
            <form @submit.prevent="addTodo">


               <div class="form-group">
                  <label class="label">Todo</label>
                  <input type="text" v-model="newTodo" class="form-control">
               </div>
               <div class="field">
                  <button class="btn btn-primary" type="submit">Add Todo</button>
               </div>
            </form>

            <button class="btn btn-danger" @click="allDone">Mark all done</button>
            <h3>List of Todos</h3>
            <ul v-if="todos">
               <li v-for="todo in todos" v-bind:key="todo.id" class="list-unstyled">
                  <label class="checkbox">
                     <input type="checkbox" v-model="todo.done">
                     <span :class="{done: todo.done}">{{todo.title}}  </span>
                     <button @click="removeTodo(todo)" class="btn btn-sm btn-danger">x</button>
                  </label>

               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script>
    export default {
        name: "cj_basic",
        data() {
            return {
                title: "Simple Todo | Coding Garden with CJ",
                newTodo: '',
                todos: []
            }
        },
        methods: {
            addTodo() {
                if (this.newTodo !== '') {
                    this.todos.push({
                        title: this.newTodo,
                        done: false
                    })
                    this.newTodo = '';
                }

            },
            removeTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos.splice(todoIndex, 1);
            },
            allDone() {
                this.todos.forEach(todo => {
                    todo.done = true;
                });
            }
        }
    }
</script>

<style scoped>
   @import "https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/sketchy/bootstrap.min.css";

   .done {
      text-decoration: line-through;
   }
</style>