<template>
   <div class="container">
      <h1 class="display-4">Todo</h1>
      <form @submit.prevent="addTodo">
         <div class="form-group">
            <label>New Todo</label>
            <input type="text" class="form-control" v-model="newTodo">
         </div>
         <div class="form-group">
            <button class="btn btn-primary">Add Todo</button>
         </div>
      </form>

      <h3>List of Todo</h3>
      <ul v-if="todos.length >0" class="list-group">
         <li v-for="(todo, i) in todos" class="list-group-item pl-5">
            <input v-if="!todo.done" type="checkbox" v-model="todo.done" class="mr-3">
            <span :class="{isDone: todo.done}">{{todo.title}} </span>
            <button class="btn btn-sm btn-danger float-right" @click="deleteTodo(i)">x</button>
         </li>
      </ul>
      <div v-else class="alert alert-primary">No todos found</div>

   </div>
</template>

<script>
    export default {
        name: "Todo",
        data() {
            return {
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
                    });
                    this.newTodo = '';
                }
            },
            deleteTodo(index){
                this.todos.splice(index,1);
            }
        }
    }
</script>

<style scoped>
.isDone{
   text-decoration: line-through;
}
</style>