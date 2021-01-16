<template>


<div id="nav" class="border-top-0">
<nav  class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <router-link class="navbar-brand"  to="/" >Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> -->
        <li class="nav-item">
          <router-link  :to="{name:'Home'}" class="nav-link" >Home</router-link>
        </li>
       <li class="nav-item">
          <router-link    :to="{name:'About'}"  class="nav-link" >About</router-link>
        </li>
       <li class="nav-item">
          <router-link  :to="{name:'CreatePost'}" class="nav-link" >Create Post</router-link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</div>



    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  
  
  <router-view />

  <br/>
  <br/>

</template>

<script>



export default {
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: #FAFAFA;
}

#cp{
  background-color: #FAFAFA;
}





#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
