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
    <svg class="animLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1519 595.28">
      <path stroke="#fff" fill="#280047" stroke-width="1.5" d="M129.92,160.88a229.23,229.23,0,0,1,13.48-21.6q7.29-10.44,15.49-20.22c5.47-6.5,11.23-12.77,17.3-18.73a233.76,233.76,0,0,1,19.22-16.77,201.28,201.28,0,0,1,21.2-14.25,171.19,171.19,0,0,1,23.11-10.94c2-.75,4.05-1.38,6.07-2.07l3-1,3.1-.82c2.07-.54,4.13-1.12,6.2-1.62l6.3-1.21c1.06-.18,2.1-.44,3.16-.56l3.18-.38c2.13-.23,4.25-.55,6.38-.69l6.41-.28c1.07,0,2.14-.14,3.21-.09l3.2.1c2.14.08,4.28.12,6.42.22l6.38.68L306,51c1.06.13,2.1.34,3.15.5l6.3,1.06c4.21.62,8.36,1.62,12.53,2.47s8.29,1.92,12.41,3a440.73,440.73,0,0,1,48.53,15.73c3.94,1.58,7.92,3.08,11.84,4.73l11.73,5L424,88.7c3.88,1.74,7.67,3.66,11.51,5.48q22.9,11.17,45.17,23.57c59.33,33.14,115.68,71.08,172.71,107.81,28.46,18.46,57.07,36.7,86.07,54.29,7.23,4.43,14.53,8.75,21.81,13.1l11,6.4q5.49,3.21,11,6.34c14.7,8.44,29.61,16.52,44.61,24.43s30.22,15.36,45.55,22.57,30.94,13.84,46.67,20.12,31.73,11.87,47.88,17,32.52,9.4,49,13.06,33.25,6.27,50.05,8.16a443.61,443.61,0,0,0,50.62,2.36l12.67-.38c2.11,0,4.21-.28,6.32-.41l6.32-.45c2.1-.16,4.21-.25,6.31-.49l6.29-.72,6.3-.72c1-.13,2.1-.23,3.14-.38l3.13-.5,12.51-2c4.15-.8,8.27-1.7,12.41-2.54l3.1-.64c1-.21,2.07-.42,3.09-.7l6.14-1.57,6.14-1.56,3.07-.79,3-.92,12.12-3.68c1-.3,2-.63,3-1l3-1.06,6-2.12,6-2.11,5.87-2.38c3.91-1.61,7.85-3.15,11.73-4.81l11.52-5.29c1.91-.9,3.85-1.73,5.74-2.69l5.69-2.82Q1299.7,365,1310.89,359c3.75-2,7.41-4.08,11.12-6.12s7.34-4.22,11-6.32c7.26-4.35,14.5-8.74,21.57-13.38s14.06-9.43,20.93-14.35,13.54-10.15,20.08-15.51a317.15,317.15,0,0,0,36.57-35,223.87,223.87,0,0,0,15.63-19.93,162.64,162.64,0,0,0,12.87-21.78c1.89-3.77,3.51-7.67,5-11.6a122.08,122.08,0,0,0,3.79-12.06,80.11,80.11,0,0,0,2.47-25,51.87,51.87,0,0,0-2.37-12.36,35.3,35.3,0,0,0-5.81-11.1,27.36,27.36,0,0,0-4.48-4.39,21.24,21.24,0,0,0-5.53-2.92,18.38,18.38,0,0,0-12.35.26l-.1-.29a18.77,18.77,0,0,1,12.59-.41,21.3,21.3,0,0,1,5.71,2.93,27.8,27.8,0,0,1,4.64,4.43,35.73,35.73,0,0,1,6.07,11.24,53.18,53.18,0,0,1,2.58,12.53,81.47,81.47,0,0,1-2.19,25.42,115.91,115.91,0,0,1-3.7,12.25c-1.51,4-3.1,7.94-5,11.77a166.5,166.5,0,0,1-12.8,22.11,224.19,224.19,0,0,1-15.59,20.22q-8.34,9.67-17.54,18.55c-6.12,5.91-12.5,11.56-19,17s-13.27,10.64-20.11,15.7-13.83,9.9-21,14.54-14.33,9.15-21.61,13.55c-3.67,2.14-7.32,4.32-11,6.42s-7.38,4.21-11.13,6.2-7.46,4.07-11.25,6-7.53,3.94-11.35,5.8l-5.7,2.84c-1.89,1-3.86,1.8-5.78,2.71l-11.6,5.35c-3.91,1.67-7.87,3.23-11.81,4.85l-5.91,2.4-6,2.15-6,2.14-3,1.07c-1,.37-2,.71-3,1l-12.22,3.73-3.06.94-3.09.79-6.19,1.59-6.18,1.58c-1,.28-2.07.5-3.12.71l-3.12.65c-4.18.86-8.34,1.77-12.52,2.58l-12.61,2-3.15.51c-1.06.15-2.12.25-3.17.38l-6.35.74-6.35.73c-2.11.25-4.24.33-6.36.51-4.25.28-8.49.66-12.75.84l-12.77.34a442.77,442.77,0,0,1-51-2.53c-16.91-1.95-33.7-4.78-50.33-8.36q-24.9-5.61-49.24-13.3c-16.18-5.21-32.14-11-47.93-17.33S888,361.71,872.66,354.48s-30.51-14.92-45.49-22.91C767.23,299.62,710,263.05,652.86,226.44l-42.8-27.52q-21.45-13.69-43-27.2t-43.41-26.51q-21.87-13-44.12-25.29T434.41,96.54c-15.25-7.38-30.73-14.26-46.5-20.39a434.65,434.65,0,0,0-48.18-15.8c-4.1-1-8.18-2.16-12.32-3s-8.25-1.86-12.43-2.49l-6.24-1.07c-1-.17-2.08-.38-3.13-.51L302.48,53l-6.27-.69c-2.1-.11-4.2-.16-6.3-.24l-3.15-.11c-1.05-.05-2.1.06-3.15.08l-6.3.25c-2.1.13-4.18.45-6.27.66l-3.14.35c-1,.1-2.07.36-3.11.53l-6.2,1.14c-2,.47-4.08,1-6.12,1.54l-3.06.78-3,1c-2,.67-4,1.27-6,2a170.62,170.62,0,0,0-22.92,10.63,203.88,203.88,0,0,0-21.12,14,247.59,247.59,0,0,0-19.25,16.49c-6.11,5.85-11.92,12-17.45,18.43s-10.76,13.08-15.7,20A238,238,0,0,0,130.18,161Z"/>
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
      setTimeout(animation.pause, 2100)
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
      setTimeout(animation.pause, 2100)
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
  width: 50%;
  left: -10%;
  top: 320px;
  transform: rotate(30deg)
}
#meB {
  width: 20%;
}
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
