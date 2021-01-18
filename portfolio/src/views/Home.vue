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
        <path id="path" fill="#fff" stroke="#1b1464" stroke-width="1" d="M16.55,795.5a83.92,83.92,0,0,0,1.23,18.79,77.7,77.7,0,0,0,5.39,18,60.3,60.3,0,0,0,10.1,15.83A55,55,0,0,0,48,859.77a66.26,66.26,0,0,0,17.62,6.47,88.66,88.66,0,0,0,9.3,1.49c3.12.33,6.26.49,9.4.55a134.78,134.78,0,0,0,37.24-5.06c24.18-6.72,46.83-19.67,63.92-38.14a122.5,122.5,0,0,0,21-31.11,136.71,136.71,0,0,0,11.06-35.9,170.11,170.11,0,0,0,2-18.73c.32-6.27.25-12.56,0-18.84a246.15,246.15,0,0,0-5-37.34c-5.25-24.61-13.68-48.45-23.76-71.48-5.06-11.52-10.59-22.83-16.42-34-2.9-5.58-5.93-11.11-8.75-16.75s-5.6-11.29-8.2-17a446.65,446.65,0,0,1-25.6-71,402.81,402.81,0,0,1-12.62-74.43A361.8,361.8,0,0,1,121.41,323,332.23,332.23,0,0,1,140,249.9a317.21,317.21,0,0,1,35-66.8,326.53,326.53,0,0,1,49.66-56.76A360,360,0,0,1,254,102.49,376.18,376.18,0,0,1,285.6,81.85c10.87-6.38,22.08-12.14,33.5-17.47S342.19,54.31,354,50s23.86-8.08,36-11.43,24.42-6.21,36.77-8.68c49.44-9.84,100.05-13,150.39-11.51q18.88.55,37.73,2c12.56,1,25.09,2.45,37.54,4.36a521.56,521.56,0,0,1,73.64,16.8,472.47,472.47,0,0,1,70.27,27.7,408.54,408.54,0,0,1,64.45,39.36,362.39,362.39,0,0,1,55.49,51.2,356.06,356.06,0,0,1,43.52,61.7,392.77,392.77,0,0,1,30,69.28c3.9,12,7.19,24.17,10.06,36.44s5.29,24.65,6.92,37.16a293.16,293.16,0,0,1,.57,75.45,242,242,0,0,1-20.76,72.44,222.1,222.1,0,0,1-42.93,61.85,210.52,210.52,0,0,1-61.46,43.4,191.33,191.33,0,0,1-35.65,12.42L842,631l-4.63.91c-3.11.52-6.21,1.13-9.37,1.35-6.27.5-12.76,0-18.63-2.42a24.34,24.34,0,0,1-7.87-5.21,19.91,19.91,0,0,1-4.91-8,17.32,17.32,0,0,1-.33-9.39,13.38,13.38,0,0,1,5.21-7.72,14.34,14.34,0,0,1,9-2.39,18.35,18.35,0,0,1,2.35.25,10.21,10.21,0,0,1,2.3.58,6.07,6.07,0,0,1,3.47,3.11,7.75,7.75,0,0,1,.46,4.66A12.12,12.12,0,0,1,817.3,611,11.25,11.25,0,0,1,814,614.4a6.78,6.78,0,0,1-4.52,1.15l0-.1a6.68,6.68,0,0,0,4.44-1.14A11.13,11.13,0,0,0,817.2,611a12.18,12.18,0,0,0,1.74-4.33,7.55,7.55,0,0,0-.45-4.58,6,6,0,0,0-3.39-3,10.47,10.47,0,0,0-2.27-.56,18.56,18.56,0,0,0-2.34-.24,14.09,14.09,0,0,0-8.89,2.38,13.09,13.09,0,0,0-5.1,7.62,17,17,0,0,0,.36,9.25,19.41,19.41,0,0,0,4.86,7.91,23.86,23.86,0,0,0,7.79,5.12c5.81,2.39,12.24,2.85,18.47,2.33,3.13-.23,6.22-.84,9.32-1.37l4.62-.92,4.6-1a190.48,190.48,0,0,0,35.55-12.45,209.58,209.58,0,0,0,61.22-43.37A221.55,221.55,0,0,0,986,512a241.49,241.49,0,0,0,20.58-72.23,292.21,292.21,0,0,0-.7-75.21c-1.63-12.46-4.07-24.82-6.9-37.07s-6.14-24.4-10-36.35A391.29,391.29,0,0,0,959,222a355.37,355.37,0,0,0-43.38-61.54,361.42,361.42,0,0,0-55.34-51.07A407.5,407.5,0,0,0,796,70.07,472.77,472.77,0,0,0,725.85,42.4a527,527,0,0,0-73.51-16.84c-12.43-1.92-24.93-3.42-37.47-4.41s-25.12-1.64-37.69-2c-50.29-1.56-100.86,1.5-150.27,11.29q-18.51,3.69-36.74,8.64t-36,11.38q-17.74,6.41-34.92,14.31c-11.4,5.32-22.62,11.06-33.48,17.42a354.63,354.63,0,0,0-60.87,44.42,326.52,326.52,0,0,0-49.53,56.76,316.54,316.54,0,0,0-34.87,66.75,331.88,331.88,0,0,0-18.49,73,361.15,361.15,0,0,0-2.21,75.3,402.14,402.14,0,0,0,12.68,74.29,447.2,447.2,0,0,0,25.63,70.88c2.61,5.73,5.36,11.39,8.19,17s5.83,11.14,8.73,16.74c5.83,11.17,11.36,22.5,16.41,34,10.06,23.09,18.49,47,23.72,71.67a246.06,246.06,0,0,1,5,37.46c.27,6.3.33,12.61,0,18.91a174.46,174.46,0,0,1-2,18.8A137.27,137.27,0,0,1,207,794.24a123.44,123.44,0,0,1-21.12,31.23C168.68,844,145.93,857,121.66,863.7a146.14,146.14,0,0,1-18.51,3.83,126.62,126.62,0,0,1-18.86,1.17c-3.16-.07-6.31-.24-9.45-.57a92.06,92.06,0,0,1-9.33-1.53,66.92,66.92,0,0,1-17.69-6.55,55.69,55.69,0,0,1-14.75-11.73A60.75,60.75,0,0,1,23,832.4a78.15,78.15,0,0,1-5.35-18.08,84.19,84.19,0,0,1-1.18-18.82Z" />
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
    /* Start animation on the line when we arrive on the page*/
    lineEnter() {
      var animation = Anime({
        targets: '.animLine path',
        strokeDashoffset: [Anime.setDashoffset, 1],
        easing: 'easeInOutSine',
        duration: 2500,
        delay: 500,
        autoplay: false,
        direction: 'alternate'
      });
      animation.play()
      setTimeout(animation.pause, 2900)
    },
    /* Start animation on the line leaving the screen when we go to an other page*/
    lineLeave() {
      var animation = Anime({
        targets: '.animLine path',
        strokeDashoffset: [Anime.setDashoffset, 1],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: 500,
        autoplay: false,
        direction: 'reverse'
        });
      animation.play()
      setTimeout(animation.pause, 2100)
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
  left: 35.3%;
  bottom: 11px;
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
  .animLine { left: 36%; opacity: 0.8;}
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