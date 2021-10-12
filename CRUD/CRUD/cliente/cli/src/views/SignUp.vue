<template>
  <div class="signup">
  <img class="logo"  src="../assets/images/logo3-login.jpg"/>
  <h2 class="tittle">Sign Up</h2>
  <div class="register">
      <input type="text" placeholder="Enter Name"/>
      <input type="text" placeholder="Enter Email"/>
      <input type="password" placeholder="Enter Password"/>
      <v-btn  class="ma-2"    outlined    color="indigo">Sign Up</v-btn>
  </div>
  
  </div>
  </template>
  
  <script>
  export default {
      name: 'SignUp'
  }
  </script>
  
  <style>
  .signup {
      padding-top: 3%;
  }
      .logo{
          width: 20%;
          padding: 20px;
      }
      .tittle{
          padding: 20px;
      }
      .register input{
          width: 300px;
          height: 40px;
          padding-left: 20px;
          display: block;
          margin-bottom: 30px;
          margin-right: auto;
          margin-left: auto;
          border: 1px solid black;
      }
  </style>