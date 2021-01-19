<template>
  <div class="about">
    <div class="icons" @click="lineLeave">
      <GoHome :wait="true" class="homeIcon" @click="lineLeave"/>
      <GoContact :wait="true" class="contactIcon" @click="lineLeave"/>
    </div>
    <div class="content">
      <h2 class="title">A propos de moi</h2>
      <p class="txt">Etudiante en dernière année à l'école d'ingénieur IMAC, spécialisée dans le domaine du <span class="bold">multimédia</span>, 
        je suis aujourd'hui à la recherche<span class="bold"> d'un stage de 6 mois </span> en tant que développeuse web (front, back ou fullstack). 
        Grâce à mes formations j'ai autant appris à programmer (web, C++, java) qu'à concevoir 
        des <span class="bold">contenus riches et créatifs </span> des supports variés (print, web, installation interactive, etc.).
        La <span class="bold">polyvalence</span> est quelque chose de très important pour moi, elle me permet de créer des travaux originaux 
        en encore de communiquer et travailler avec des équipes artistiques ou techniques.
        <span class="bold">Pour plus d'informations, n'hésitez pas à me contacter !</span></p>
      <div @click="toggleModal" class="zoomCv"><p>Mon CV</p></div>
      <ModalCV ref="modalCv"/>
    </div>
    <svg class="animLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1096 376">
      <path id="linePath" stroke="#fff" fill="none" stroke-width="1" d="M12.73,26.07S127.42-45.35,302.26,162.41C479.84,373.42,761.58,364.52,843,356.59c102.51-10,212.69-44.68,240.38-105,13-28.34,1.54-44.42-8-41.06"/>
    </svg>
    <div class="meBox">
      <img id="meB" alt="dessin" src="@/assets/img/deco/meBlc.png">
    </div>
  </div>
</template>

<script>
import ModalCV from '@/components/ModalCV.vue'
import GoHome from '@/components/GoHome.vue'
import GoContact from '@/components/GoContact.vue'
import Anime from 'animejs/lib/anime.es.js';

export default {
  name: 'About',
  components : {
    ModalCV,
    GoHome,
    GoContact
  },
  data(){
    return {
      cvLink: require("@/assets/img/cvNew.jpg")
    }
  },
  methods: {
    toggleModal() {
      this.$refs.modalCv.toggle()
    },
    lineEnter() {
      var animation = Anime({
        targets: '.animLine path',
        strokeDashoffset: [Anime.setDashoffset, 1],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: 500,
        autoplay: false,
        direction: 'alternate'
      });
      animation.play()
      setTimeout(animation.pause, 2060)
    },
    lineLeave() {
      var animation = Anime({
        targets: '.animLine path',
        strokeDashoffset: [Anime.setDashoffset, 1],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: 500,
        autoplay: false,
        direction: 'reverse'
        });
      animation.play()
      setTimeout(animation.pause, 2000)
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.$parent.onResize()
    this.lineEnter() 
  }
}
</script>

<style scoped>
.about {
  position: relative;
  background-color: #280047;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
.title {
  font-family: 'bodoniR';
  font-size: 3em;
  font-weight: lighter;
  color: #C1272D;
}
.txt {
  font-family: 'Roboto';
  font-weight: lighter;
  font-size: 1.05em;
  text-align: justify;
  width: 53%;
}
.modalCv {
  height: 10% !important;
}
.zoomCv {
  border: #C1272D 0.5px solid;
  border-radius: 18px;
  font-size: 1.1em;
  padding: 0.5% 1%;
  position: relative;
  z-index: 5;
  transition: background-color 0.5s, color 0.5s;
}
.contactIcon {
  width: 18%;
  margin-left: 1%;
  margin-top: 2.5%;
}
.homeIcon {
  width: 20%;
}
.icons {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  left: 1.3%;
  top: 30px;
  width: 28%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 16%;
  margin-top: 120px;
}
.bold {
  font-weight: bolder;
}
.meBox {
  display: flex;
  justify-content: flex-end ;
  position: relative;
  z-index: 0;
  width: 90%;
  margin-top: -110px;
}
.animLine {
  position: absolute;
  width: 60%;
  left: -2%;
  top: 370px;
}
#meB {
  width: 20%;
}
/*#linePath {
  animation-iteration-count: infinite;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-name: linemove;
}

@keyframes linemove{
  from {
    d:"M129.92,160.88a229.23,229.23,0,0,1,13.48-21.6q7.29-10.44,15.49-20.22c5.47-6.5,11.23-12.77,17.3-18.73a233.76,233.76,0,0,1,19.22-16.77,201.28,201.28,0,0,1,21.2-14.25,171.19,171.19,0,0,1,23.11-10.94c2-.75,4.05-1.38,6.07-2.07l3-1,3.1-.82c2.07-.54,4.13-1.12,6.2-1.62l6.3-1.21c1.06-.18,2.1-.44,3.16-.56l3.18-.38c2.13-.23,4.25-.55,6.38-.69l6.41-.28c1.07,0,2.14-.14,3.21-.09l3.2.1c2.14.08,4.28.12,6.42.22l6.38.68L306,51c1.06.13,2.1.34,3.15.5l6.3,1.06c4.21.62,8.36,1.62,12.53,2.47s8.29,1.92,12.41,3a440.73,440.73,0,0,1,48.53,15.73c3.94,1.58,7.92,3.08,11.84,4.73l11.73,5L424,88.7c3.88,1.74,7.67,3.66,11.51,5.48q22.9,11.17,45.17,23.57c59.33,33.14,115.68,71.08,172.71,107.81,28.46,18.46,57.07,36.7,86.07,54.29,7.23,4.43,14.53,8.75,21.81,13.1l11,6.4q5.49,3.21,11,6.34c14.7,8.44,29.61,16.52,44.61,24.43s30.22,15.36,45.55,22.57,30.94,13.84,46.67,20.12,31.73,11.87,47.88,17,32.52,9.4,49,13.06,33.25,6.27,50.05,8.16a443.61,443.61,0,0,0,50.62,2.36l12.67-.38c2.11,0,4.21-.28,6.32-.41l6.32-.45c2.1-.16,4.21-.25,6.31-.49l6.29-.72,6.3-.72c1-.13,2.1-.23,3.14-.38l3.13-.5,12.51-2c4.15-.8,8.27-1.7,12.41-2.54l3.1-.64c1-.21,2.07-.42,3.09-.7l6.14-1.57,6.14-1.56,3.07-.79,3-.92,12.12-3.68c1-.3,2-.63,3-1l3-1.06,6-2.12,6-2.11,5.87-2.38c3.91-1.61,7.85-3.15,11.73-4.81l11.52-5.29c1.91-.9,3.85-1.73,5.74-2.69l5.69-2.82Q1299.7,365,1310.89,359c3.75-2,7.41-4.08,11.12-6.12s7.34-4.22,11-6.32c7.26-4.35,14.5-8.74,21.57-13.38s14.06-9.43,20.93-14.35,13.54-10.15,20.08-15.51a317.15,317.15,0,0,0,36.57-35,223.87,223.87,0,0,0,15.63-19.93,162.64,162.64,0,0,0,12.87-21.78c1.89-3.77,3.51-7.67,5-11.6a122.08,122.08,0,0,0,3.79-12.06,80.11,80.11,0,0,0,2.47-25,51.87,51.87,0,0,0-2.37-12.36,35.3,35.3,0,0,0-5.81-11.1,27.36,27.36,0,0,0-4.48-4.39,21.24,21.24,0,0,0-5.53-2.92,18.38,18.38,0,0,0-12.35.26l-.1-.29a18.77,18.77,0,0,1,12.59-.41,21.3,21.3,0,0,1,5.71,2.93,27.8,27.8,0,0,1,4.64,4.43,35.73,35.73"
  }
  25% {

  }
  50% {

  }
  75% {

  }
  to {
    d:"M129.92,160.88a229.23,229.23,0,0,1,13.48-21.6q20.50-40.44,15.49-20.22c50.47-6.5,11.23-12.77,17.3-18.73a233.76,233.76,0,0,1,19.22-16.77,201.28,201.28,0,0,1,21.2-14.25,171.19,171.19,0,0,1,23.11-10.94c2-10,4.05-1.38,6.07-2.07l3-1,3.1-.82c80.07-.54,4.13-1.12,6.2-1.62l6.3-1.21c60.06-.18,2.1-.44,3.16-.56l3.18-.38c25.13-.23,4.25-.55,6.38-.69l6.41-.28c40.75,20,28.140-.14,3.21-10.09l3.2.1c80.14.08,4.28.12,6.42.22l6.38.68L306,51c1.06.13,2.1.34,3.15.5l6.3,1.06c4.21.62,8.36,1.62,12.53,2.47s8.29,1.92,12.41,3a440.73,440.73,0,0,1,48.53,15.73c3.94,1.58,7.92,3.08,11.84,4.73l11.73,5L424,88.7c3.88,1.74,7.67,3.66,11.51,5.48q22.9,11.17,45.17,23.57c59.33,33.14,115.68,71.08,172.71,107.81,28.46,18.46,57.07,36.7,86.07,54.29,7.23,4.43,14.53,8.75,21.81,13.1l11,6.4q5.49,3.21,11,6.34c14.7,8.44,29.61,16.52,44.61,24.43s30.22,15.36,45.55,22.57,30.94,13.84,46.67,20.12,31.73,11.87,47.88,17,32.52,9.4,49,13.06,33.25,6.27,50.05,8.16a443.61,443.61,0,0,0,50.62,2.36l12.67-.38c2.11,0,4.21-.28,6.32-.41l6.32-.45c2.1-.16,4.21-.25,6.31-.49l6.29-.72,6.3-.72c1-.13,2.1-.23,3.14-.38l3.13-.5,12.51-2c4.15-.8,8.27-1.7,12.41-2.54l3.1-.64c1-.21,2.07-.42,3.09-.7l6.14-1.57,6.14-1.56,3.07-.79,3-.92,12.12-3.68c1-.3,2-.63,3-1l3-1.06,6-2.12,6-2.11,5.87-2.38c3.91-1.61,7.85-3.15,11.73-4.81l11.52-5.29c1.91-.9,3.85-1.73,5.74-2.69l5.69-2.82Q1299.7,365,1310.89,359c3.75-2,7.41-4.08,11.12-6.12s7.34-4.22,11-6.32c7.26-4.35,14.5-8.74,21.57-13.38s14.06-9.43,20.93-14.35,13.54-10.15,20.08-15.51a317.15,317.15,0,0,0,36.57-35,223.87,223.87,0,0,0,15.63-19.93,162.64,162.64,0,0,0,12.87-21.78c1.89-3.77,3.51-7.67,5-11.6a122.08,122.08,0,0,0,3.79-12.06,80.11,80.11,0,0,0,2.47-25,51.87,51.87,0,0,0-2.37-12.36,35.3,35.3,0,0,0-5.81-11.1,27.36,27.36,0,0,0-4.48-4.39,21.24,21.24,0,0,0-5.53-2.92,18.38,18.38,0,0,0-12.35.26l-.1-.29a18.77,18.77,0,0,1,12.59-.41,21.3,21.3,0,0,1,5.71,2.93,27.8,27.8,0,0,1,4.64,4.43,35.73,35.73"
  }
}*/
.zoomCv:hover {
  background-color: #C1272D;
  color: white;
}
.zoomCv:active {
  outline-style:none;
}

/* RESPONSIVE */
@media (max-width: 1100px){
  .icons { width: 24%; }
  .contactIcon { margin-left: 11%; }
  .homeIcon { margin-left: 5%; }
  .title { font-size: 2.8em; }
  .txt { font-size: 1.1em; }
  .zoomCv { font-size: 1.1em; }
  .meBox { width: 108%; }
  #meB { margin-right: 10%; }
}
@media (max-width: 870px){
  .icons { width: 28%; }
  .txt { font-size: 1.05em; width: 65%;}
  .meBox { width: 122%; }
  #meB { margin-right: 15%; }
  .zoomCv { padding: 1% 2%; }
}
@media (max-width: 680px){
  .contactIcon { margin-left: 18%; }
  .homeIcon { margin-left: 10%; }
  .content { margin-top: 89px; }
  .txt { font-size: 1em; width: 80%; }
  .meBox { margin-top: -42px; }
}
@media (max-width: 550px){
  .contactIcon { margin-left: 25%; }
  .homeIcon { margin-left: 15%; }
  .content { margin-right: 0; }
  .txt { width: 73%; }
  .meBox { margin-top: -10px; }
}
@media (max-width: 440px){
  .icons { width: 32%; }
  .contactIcon { margin-left: 35%; }
  .homeIcon { margin-left: 25%; }
  .title { font-size: 2.2em; }
  .txt { font-size: 0.95em; text-align: center; width: 85%; }
  .zoomCv { font-size: 1em; }
  .meBox { margin-top: 31px; width: 173%; }
  #meB { margin-right: 26%; }
}
</style>
