<template>
  <div class="home">
    <Banner1/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Banner1 from '@/components/Banner1.vue'
export default {
  name: 'Home',
  components: {
    Banner1,
    HelloWorld
  }
}
</script>
