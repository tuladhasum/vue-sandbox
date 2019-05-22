<template>
  <div class="container is-fluid">
    <div class="content ">
    <h3>{{title}}</h3>
    <form @submit.prevent="addTodo">
      <div class="field">
        <label class="label">Todo</label>
        <div class="control">
          <input type="text" v-model="newTodo" class="input">
        </div>
      </div>
      <div class="field">
        <button class="button" type="submit">Add Todo</button>
      </div>
    </form>

      <button class="button" @click="allDone">Mark all done</button>
    <h3>List of Todos</h3>
    <ul v-if="todos">
      <li v-for="todo in todos" v-bind:key="todo.id">
        <label class="checkbox" >
           <input type="checkbox" v-model="todo.done"> 
           <span :class="{done: todo.done}">{{todo.title}}</span>
          <button @click="removeTodo(todo)" class="button">Remove</button>
        </label>
       
        </li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "Coding_Garden",
  data(){
    return {
      title: "Coding Garden with CJ",
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      })
      this.newTodo = '';
    },
    removeTodo(todo){
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex,1);
    },
    allDone(){
      this.todos.forEach(todo=>{
        todo.done = true;
      });
    }
  }
}
</script>

<style defer>
  .done {
    text-decoration: line-through;
  }
</style>