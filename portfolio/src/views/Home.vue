<template>
  <div class="home">
      <div id="blocTxt">
        <div id="title">
          <h1>Flora Mallet</h1>
          <Ball class="ball"/>
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
      <svg class="animLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 616 915">
        <path fill="#fff" stroke="#1b1464" stroke-width="1" d="M10.55,835.5a85.91,85.91,0,0,0,2.32,23.86,69.89,69.89,0,0,0,9.28,22,60.31,60.31,0,0,0,7.6,9.26c.7.72,1.48,1.35,2.21,2l1.12,1c.38.33.79.61,1.19.92l2.39,1.81c.82.56,1.68,1.08,2.52,1.62a64.12,64.12,0,0,0,22.28,8.5,112.52,112.52,0,0,0,23.91,1.7c8-.14,16-.57,24-1.29a345.91,345.91,0,0,0,47.47-7.56,271.86,271.86,0,0,0,45.69-14.79,186,186,0,0,0,41.39-24.12,136.4,136.4,0,0,0,32.13-35.32,126.8,126.8,0,0,0,10.58-21.49l1.05-2.81.52-1.41.44-1.43,1.77-5.74,1.45-5.82c.27-1,.45-2,.63-2.94l.57-2.94a149.25,149.25,0,0,0,2.51-23.86l.1-3c0-1,0-2,0-3l-.08-6-.36-6-.18-3-.31-3a264.46,264.46,0,0,0-9.3-47.11c-8.94-30.84-22.28-60.23-37.35-88.53l-5.75-10.57-6-10.44-12-20.89c-3.87-7-7.82-14-11.52-21.14s-7.38-14.26-11-21.42c-1.81-3.59-3.49-7.23-5.24-10.84l-2.6-5.43c-.87-1.82-1.67-3.66-2.51-5.48l-5-11-4.74-11.07c-1.61-3.68-3.05-7.43-4.56-11.15s-3-7.43-4.39-11.21l-4.21-11.28-4-11.37c-5.12-15.22-9.7-30.62-13.59-46.21A465.84,465.84,0,0,1,142,330.3c-4.42-31.79-5.28-64.26-.46-96.09a249,249,0,0,1,11.64-46.73,219.62,219.62,0,0,1,21-43.33,214.93,214.93,0,0,1,30.06-37.62,235.08,235.08,0,0,1,37.46-30.28,279.44,279.44,0,0,1,42.47-22.74,356.55,356.55,0,0,1,45.44-16l5.81-1.59c1.94-.51,3.87-1.09,5.83-1.52l11.73-2.75c3.92-.87,7.88-1.6,11.81-2.4s7.9-1.47,11.86-2.12c7.91-1.43,15.88-2.39,23.84-3.48,4-.46,8-.84,12-1.27l6-.62,6-.46c4-.29,8-.63,12-.88l12-.59c2-.08,4-.22,6-.26l6-.14,12-.26,12,0h6l6,.15,12,.31c4,.12,8,.37,12,.54,32.07,1.56,64.05,4.81,95.84,9.27l0,.1c-31.8-4.33-63.78-7.39-95.84-8.88-4-.16-8-.4-12-.51l-12-.28-6-.13H472.53l-12,.29-6,.15c-2,0-4,.19-6,.28l-12,.61c-4,.26-8,.61-12,.92l-6,.47-6,.63c-4,.43-8,.82-12,1.3-7.94,1.1-15.9,2.08-23.79,3.52-4,.67-7.91,1.3-11.83,2.15S357,31.63,353.12,32.5l-11.7,2.78c-2,.43-3.88,1-5.82,1.53l-5.79,1.6a367.81,367.81,0,0,0-45.3,16,277.52,277.52,0,0,0-42.33,22.66,234.13,234.13,0,0,0-37.33,30.14,214.31,214.31,0,0,0-29.94,37.44A220,220,0,0,0,154,187.79a248.59,248.59,0,0,0-11.61,46.56c-4.79,31.72-4,64.1.32,95.85a462.58,462.58,0,0,0,9,47.23c3.84,15.58,8.38,31,13.47,46.19L169.13,435l4.19,11.28c1.37,3.77,2.89,7.49,4.38,11.21s2.93,7.47,4.54,11.15L187,479.7l5,11c.83,1.83,1.63,3.66,2.49,5.48l2.59,5.43c1.74,3.61,3.42,7.26,5.22,10.84,3.6,7.17,7.16,14.36,11,21.43S220.77,548,224.64,555s8,13.91,12,20.87l6,10.44,5.77,10.56C263.55,625.17,277,654.55,286,685.42a264.64,264.64,0,0,1,9.41,47.22l.32,3,.19,3,.37,6,.09,6c0,1,0,2,0,3l-.1,3a149.77,149.77,0,0,1-2.47,24l-.57,3c-.18,1-.37,2-.63,3l-1.45,5.86-1.76,5.77-.45,1.44-.52,1.42-1.05,2.83a127.8,127.8,0,0,1-10.61,21.66,134.93,134.93,0,0,1-32.32,35.55,186.8,186.8,0,0,1-41.62,24.15A272,272,0,0,1,157,900a347.8,347.8,0,0,1-47.58,7.49q-12,1.05-24.06,1.24a113.67,113.67,0,0,1-24-1.75,64.18,64.18,0,0,1-22.42-8.62c-.84-.55-1.7-1.08-2.53-1.65L34,894.92c-.4-.32-.81-.6-1.19-.94l-1.12-1c-.74-.68-1.52-1.32-2.22-2a59.93,59.93,0,0,1-7.6-9.36,69.82,69.82,0,0,1-9.22-22.16,85.88,85.88,0,0,1-2.21-23.91Z"/>
      </svg>
      <BackgroundHome id="background"/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import BackgroundHome from '@/components/BackgroundHome.vue'
import Ball from '@/components/Ball.vue'
import Anime from 'animejs/lib/anime.es.js';

export default {
  name: 'Home',
  components: {
    Button,
    BackgroundHome,
    Ball
  },
  methods : {
    lineEnter() {
      var animation = Anime({
        targets: '.animLine path',
        strokeDashoffset: [Anime.setDashoffset, 1],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: 500,
        autoplay: false,
        direction: 'alternate'
      });
      animation.play()
      setTimeout(animation.pause, 2500)
    },
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
      setTimeout(animation.pause, 2500)
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
.ball {
  position: absolute;
  top: -25px;
  right: 13%;
}
.bold {
  font-weight: bolder;
  color: #1b1464;
}
.animLine {
  position: absolute;
  width: 33%;
  left: 35.6%;
  bottom: 11px;
  z-index: 0;
}

/* RESPONSIVE */
@media (max-width: 1300px){
  .ball { right: -3%; }
}
@media (max-width: 1285px){
  .ball { right: -6%; }
}
@media (max-width: 1226px){
  .ball { right: -10%; }
}
@media (max-width: 1200px){
  .ball { right: -13%; }
  #txt { width: 115%; }
}
@media (max-width: 1160px){
  .ball { right: -17%; }
}
@media (max-width: 1120px){
  .ball { right: -21%; }
}
@media (max-width: 1080px){
  .ball { right: -27%; }
}
@media (max-width: 1030px){
  .ball { right: -33%; }
}
@media (max-width: 980px){
  .ball { right: -38%; }
  #txt { width: 137%; }
  #blocTxt { right: -5%; top: 137px; }
}
@media (max-width: 950px){
  .ball { right: -45%; }
}
@media (max-width: 900px){
  .ball { right: -55%; }
}
@media (max-width: 840px){
  .ball { right: -61%; }
}
@media (max-width: 820px){
  .ball { right: -64%; }
  #blocTxt { right: 6%; top: 54px; }
}
@media (max-width: 795px){
  .ball { right: -68%; }
}
@media (max-width: 780px){
  .ball { display: none; }
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
  .point { width: 3%; margin-right: -4%; }
  #txt { font-size: 0.9em; }
}
@media (max-width: 385px){
  .point { display: none; }
  #blocTxt {
    left: 16%;
    align-items: flex-start;
    justify-content: initial;
  }
  #txt { width: 216%; }
}
</style>