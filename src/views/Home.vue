<!-- Home page, with my presentation -->
<template>
  <div class="home">
      <div id="blocTxt">
        <div id="title">
          <h1>Flora Mallet</h1>
          <Ball class="blueBall"/>
        </div>
        <div id="txtButton">
            <p id="txt">
                Bonjour ! Je m'appelle Flora et je suis actuellement en dernière année à l'école d'ingénieur IMAC (Image Multimédia Audiovisuel Communication) afin de devenir <span class="bold">Ingénieure Créative !</span> Je suis passionnée par  
                le multimédia et tout particulièrement par le web, qui me permet de mêler programmation et créativité. <span class="bold">Je cherche un stage de 6 mois en tant que développeuse web (front, back, fullstack) à partir d'avril 2021. </span><br> <br>Prêt.e.s à découvrir mon univers ?
            </p>
            <div @click="lineLeave">
              <Button id="buttonGo" :wait="true"/></div>
            </div>
      </div>
      <svg class="animLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1029 876">
        <path id="path" fill="none" stroke="#1b1464" stroke-width="1.5" d="M11.5,790.5s-6,72,68,73,207.88-72,87-297c-144-268,6-582,440-551,119.11,8.51,344,70.37,392,326,31,165-71.12,270.46-171,286-45,7-45-39-19-34,11,2.11,4,18-4,17"/>
      </svg>
      <BackgroundHome id="background"/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import BackgroundHome from '@/components/BackgroundHome.vue'
import Ball from '@/components/Ball.vue'
import Anime from 'animejs/lib/anime.es.js'

export default {
  name: 'Home',
  components: {
    Button,
    BackgroundHome,
    Ball
  },
  methods : {
    /* Start animation on the line when a user arrives on the page */
    lineEnter() {
      var animation = Anime({
        targets: '.animLine path',
        strokeDashoffset: [Anime.setDashoffset, 1],
        easing: 'easeInOutSine',
        duration: 1900,
        delay: 500,
        autoplay: false,
        direction: 'normal'
      });
      animation.play()
    },
    /* Start animation on the line leaving the screen when a user goes to an other page */
    lineLeave() {
      var animation = Anime({
        targets: '.animLine path',
        strokeDashoffset: [Anime.setDashoffset, 1],
        easing: 'easeInOutSine',
        duration: 1800,
        delay: 500,
        autoplay: false,
        direction: 'reverse'
        });
      animation.play()
    }
  },
  mounted() {
    this.$parent.onResize()
    this.lineEnter() 
  }
}
</script>

<style scoped>
h1 {
  font-family: "BodoniB";
  font-size: 4em;
  color: #C1272D;
  width: 330px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}
.blueBall {
  margin-left: 2%;
}
.bold {
  font-weight: bolder;
  color: #1b1464;
}
.animLine {
  position: absolute;
  width: 55%;
  left: 35.6%;
  bottom: 8px;
  z-index: 0;
}
#blocTxt {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: flex-end;
  max-width: 60%;
  right: -8%;
  top: 170px;
  z-index: 10;
}
#txtButton {
  width: 50%;
  margin: 0;
  margin-left: 5%;
}
#txt {
  text-align: justify;
}
#buttonGo {
  width: 50%;
  margin-left: 25%;
  margin-top: 20px;
}
#title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 11%;
}

/* RESPONSIVE */
@media (max-width: 1300px){
  .animLine { left: 36.3%; opacity: 0.8;}
}
@media (max-width: 1200px){
  .animLine { left: 36.5%; bottom: 8px; }
  #txt { width: 115%; }
}
@media (max-width: 1100px){
  .animLine { left: 37.2%; }
}
@media (max-width: 980px){
  .animLine { display: none; }
  #txt { width: 137%; }
  #blocTxt { right: -5%; top: 137px; }
}
@media (max-width: 820px){
  #blocTxt { right: 6%; top: 54px; }
}
@media (max-width: 720px){
  #txt { width: 177%; }
  #blocTxt {
    right: 14%;
    width: 800px;
    top: 40px;
  }
  #buttonGo { margin-left: 64%; }
  #title { margin-right: 0; }
  #buttonGo { margin-left: 19%; width: 136%; }
}
@media (max-width: 580px){
  .ball { display: none; }
}
@media (max-width: 545px){
  h1 { font-size: 3.4em; justify-content: flex-start; }
  #txt { font-size: 0.95em; }
  #blocTxt { right: 15%; top: 25px; }
}
@media (max-width: 508px){
  h1 { font-size: 3.2em; }
  #txt { font-size: 0.91em; }
  #decoButton { font-size: 1.2em; }
  #blocTxt { right: 12%; }
}
@media (max-width: 442px){
  h1 { font-size: 2.9em; }
}
@media (max-width: 400px){
  #txt { font-size: 0.9em; }
}
@media (max-width: 385px){
  #blocTxt {
    left: 16%;
    align-items: flex-start;
    justify-content: initial;
  }
  #txt { width: 216%; }
}
</style>