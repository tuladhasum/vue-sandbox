<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <a class="navbar-brand" href="#">Vue.js Exercise</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Coding Garden
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link to="/cj" class="dropdown-item">Coding Garden CJ</router-link>
              <router-link to="/cj-score-counter" class="dropdown-item">Player Score Counter</router-link>
              <router-link to="/todo" class="dropdown-item">Todo</router-link>
              <router-link to="/reddit" class="dropdown-item">Reddit</router-link>
              <router-link to="/rockets" class="dropdown-item">Rockets</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link> | -->
<!--      <router-link to="/cj">Coding Garden CJ</router-link> |-->
<!--      <router-link to="/cj-score-counter">Player Score Counter</router-link> |-->
<!--      <router-link to="/todo">Todo</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<style>
  @import "~bootswatch/dist/sketchy/bootstrap.min.css";

  #app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
