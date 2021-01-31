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
      <Canvas id="meB"/>
      <!--<img id="meB" alt="dessin" src="@/assets/img/deco/meBlc.png">-->
    </div>
  </div>
</template>

<script>
import ModalCV from '@/components/ModalCV.vue'
import GoHome from '@/components/GoHome.vue'
import GoContact from '@/components/GoContact.vue'
import Canvas from '@/components/Canvas.vue';
import Anime from 'animejs/lib/anime.es.js';

export default {
  name: 'About',
  components : {
    ModalCV,
    GoHome,
    GoContact,
    Canvas
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
        duration: 1200,
        delay: 500,
        autoplay: false,
        direction: 'normal'
      });
      animation.play()
    },
    lineLeave() {
      var animation = Anime({
        targets: '.animLine path',
        strokeDashoffset: [Anime.setDashoffset, 1],
        easing: 'easeInOutSine',
        duration: 1200,
        delay: 500,
        autoplay: false,
        direction: 'reverse'
        });
      animation.play()
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
  margin-top: -320px;
}
.animLine {
  position: absolute;
  width: 60%;
  left: -2%;
  top: 370px;
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
  .animLine { width: 56%; top: 460px; }
}
@media (max-width: 970px){
  .meBox { display: none; }
  .content { margin: 0;}
  .animLine { top: 500px; }
}
@media (max-width: 870px){
  .icons { width: 28%; }
  .txt { font-size: 1.05em; width: 65%;}
  .zoomCv { padding: 1% 2%; }
  .animLine { top: 520px; }
}
@media (max-width: 680px){
  .contactIcon { margin-left: 18%; }
  .homeIcon { margin-left: 10%; }
  .content { margin-top: 89px; }
  .txt { font-size: 1em; width: 80%; }
  .animLine { display: none; }
}
@media (max-width: 550px){
  .contactIcon { margin-left: 25%; }
  .homeIcon { margin-left: 15%; }
  .content { margin-right: 0; }
  .txt { width: 73%; }
}
@media (max-width: 440px){
  .icons { width: 32%; }
  .contactIcon { margin-left: 35%; }
  .homeIcon { margin-left: 25%; }
  .title { font-size: 2.2em; }
  .txt { font-size: 0.95em; text-align: center; width: 85%; }
  .zoomCv { font-size: 1em; }
}
</style>
