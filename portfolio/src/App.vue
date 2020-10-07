<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view name="default" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  /*components: {
    HelloWorld
  }*/
}
</script>

<style>
*{
  box-sizing: border-box;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,300&display=swap');
@font-face {
	font-family: 'BodoniB';
	src: url('./assets/fonts/BOD_B.TTF');
}
@font-face {
	font-family: 'BodoniCB';
	src: url('./assets/fonts/BOD_CB.TTF');
}
@font-face {
	font-family: 'BodoniI';
	src: url('./assets/fonts/BOD_I.TTF');
}
#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 300;
}
</style>
