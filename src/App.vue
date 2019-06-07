<template>
   <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
         <a class="navbar-brand" href="#">Vue.js Exercise</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                 aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item active">
                  <router-link to="/" class="nav-link">Home</router-link>
               </li>

               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Coding Garden
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     <router-link to="/cj" class="dropdown-item">Coding Garden CJ</router-link>
                     <router-link to="/cj-score-counter" class="dropdown-item">Player Score Counter</router-link>
                     <router-link to="/todo" class="dropdown-item">Todo</router-link>
                     <router-link to="/reddit" class="dropdown-item">Reddit</router-link>
                     <router-link to="/rockets" class="dropdown-item">Rockets</router-link>
                     <router-link to="/eventbus" class="dropdown-item">Event Bus</router-link>
                  </div>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Misc. Projects
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                     <router-link to="/about" class="dropdown-item">Employee Table</router-link>
                     <router-link to="/invoice" class="dropdown-item">Invoice</router-link>
                     <router-link to="/element" class="dropdown-item">Element UI</router-link>
                     <router-link to="/postcrud" class="dropdown-item">Post Crud Axios</router-link>
                     <router-link to="/enhancedform" class="dropdown-item">Enhanced Form</router-link>
                     <router-link to="/fishui" class="dropdown-item">Fish UI - Todo List</router-link>
                     <router-link to="/todolist" class="dropdown-item">Todo List Component</router-link>
                     <router-link to="/elementlayout" class="dropdown-item">Element Layout</router-link>
                     <router-link to="/vuexninja" class="dropdown-item">Vuex Ninja</router-link>
                  </div>
               </li>
            </ul>
         </div>
      </nav>
      <router-view/>
   </div>
</template>

<script>

</script>

<style>
   @import "~@fortawesome/fontawesome-free/css/all.min.css";
   @import "~bootswatch/dist/sandstone/bootstrap.min.css";
   @import "~animate.css";
   /*@import "~bootswatch/dist/sketchy/bootstrap.min.css";*/

   #app {

   }
</style>
