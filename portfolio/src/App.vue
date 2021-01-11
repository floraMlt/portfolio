<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view name="default" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods : {
    onResize() {
      document.querySelector('body').style.overflow = "hidden"
      document.querySelector('html').style.overflow = "hidden"
      document.querySelector('#app').style.overflow = "hidden"

      if(this.$route.name == "ProjectDetails" && window.innerWidth <= 1000) {
        document.querySelector('body').style.overflowY = "scroll"
        document.querySelector('#app').style.height = "auto"
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }
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
	font-family: 'BodoniR';
	src: url('./assets/fonts/BOD_R.TTF');
}
@font-face {
	font-family: 'BodoniI';
	src: url('./assets/fonts/BOD_I.TTF');
}
#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
  font-size: 1.1em;
}
body {
  margin: 0;
}
body, html {
  /*height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;*/
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
}
#app {
  /*height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;*/
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
}
.fade-enter, .fade-leave-to{
  transition: translateX(3em);
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
}
</style>