<template>
  <div id="app">
    <div id="nav">
      <header class="header">
      <router-link class="name" to="/">San <em>Parrilla</em></router-link>
      <router-link class="head" to="/">Inicio</router-link>
      <router-link class="head" to="/about">Productos</router-link>
      <router-link class="head" to="/contact">Contáctanos</router-link>
      <router-link class="head" to="/Nota">Pedido</router-link>
      <router-link class="head" to="/signup">Sign Up</router-link>
      </header>
    </div>
    <router-view/>
  </div>
  
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 25px;
  background: #333;
  text-align: center;
  header.header{
    font-size: 28px;
  }
  a {
    font-weight: bold;
    color: white;
    padding: 15px;
    font-size: 20px;
    text-decoration: none;
    margin-right: 5px;
    &.router-link-exact-active {
      color: #f33f3f;
      
    }
  }
  a.head:hover{
    background: #ddd;
    color: #333;
  }
  a.name{
    padding: 0;
    em{
      color: #f33f3f;
    }
    font-family: 'Times New Roman', Times, serif;
    font-size: 25pt;
    float: left;
    color: white;
    text-align: center;
    padding-left: 5%;
  }
}
</style>