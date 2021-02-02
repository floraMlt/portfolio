<template>
  <div class="contact">
    <div class="icons"  @click="lineLeave">
      <GoHome :wait="true" class="homeIcon"/>
      <GoAbout :wait="true" class="aboutIcon"/>
    </div>
    <div class="content">
      <Rose class="rose"/>
      <h1 class="title">Me contacter</h1>
      <div class="contactList">
        <div class="contactPoint">
          <p class="ssTitle">Tel</p>
          <p class="txt">+(33)6 34 82 04 52</p>
        </div>
        <div class="contactPoint">
          <p class="ssTitle">Mail</p>
          <p class="txt">floramallet@outlook.fr</p>
        </div>
      </div>
    </div>
    <Canvas id="meB"/>
    <svg class="animLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 636 918">
      <path id="linePath" stroke="#fff" fill="none" stroke-width="1" d="M217.5,9.5s37.23,132.4-115,254c-164,131-69,478,236,456s285,190,285,190"/>
    </svg>
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'
import GoAbout from '@/components/GoAbout.vue'
import Rose from '@/components/Rose.vue'
import Canvas from '@/components/Canvas.vue'
import Anime from 'animejs/lib/anime.es.js'

export default {
  name: 'Contact',
  components : {
    GoHome,
    GoAbout,
    Rose,
    Canvas
  },
  methods: {
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
.contactList {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
}
.contact {
  position: relative;
  background-color: #280047;
  min-width: 100vw;
  min-height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: 'bodoniB';
  font-size: 3em;
  margin-bottom: 50px;
  color: #C1272D;
  z-index: 10;
}
.ssTitle {
  font-family: 'Roboto';
  font-size: 1.4em;
  font-weight: bolder;
  margin-right: 1%;
}
.txt {
  font-family: 'Roboto';
  font-size: 1.1em;
}
.contactPoint {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 50px;
}
.aboutIcon {
  width: 16%;
  margin-left: 3%;
}
.homeIcon {
  width: 20%;
}
.icons {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  left: 1.3%;
  top: 30px;
}
.rose {
  position: absolute;
  left: 43%;
  top: 165px;
  z-index: 0;
}
.animLine {
  position: absolute;
  width: 34%;
  left: 20%;
}
#meB {
  position: absolute;
  left: 48%;
  bottom: -150px;
}

/* RESPONSIVE */
@media (max-width: 1300px){
  .animLine { width: 46%; }
}
@media (max-width: 1200px){
  #meB { left: 43%; bottom: -160px; }
}
@media (max-width: 1100px){
  .icons { width: 24%; }
  .aboutIcon { margin-left: 11%; }
  .homeIcon { margin-left: 5%; }
  .title { margin-bottom: 35px; }
  .contactPoint { margin: 0 40px; }
  .content { margin-bottom: 90px; }
  .animLine { display: none; }
  .rose { top: 125px; left: 41%; }
  #meB { left: 35%; bottom: -180px; }
}
@media (max-width: 950px){
  .content { margin-bottom: 0px; }
  .rose { top: 170px;}
  #meB { display: none; }
}
@media (max-width: 870px){
  .icons { width: 28%; }
  .rose { left: 39%; }
  #meB { width: 29%; left: 65%; }
}
@media (max-width: 680px){
  .aboutIcon { margin-left: 18%; }
  .homeIcon { margin-left: 10%; }
  .rose { left: 35%; }
  #meB { width: 35%; left: 60%; }
}
@media (max-width: 550px){
  .aboutIcon { margin-left: 25%; }
  .homeIcon { margin-left: 15%; }
  .rose { left: 30%; }
  #meB { width: 40%; left: 55%; }
}
@media (max-width: 440px){
  .icons { width: 32%; }
  .aboutIcon { margin-left: 35%; }
  .homeIcon { margin-left: 25%; }
  .title { font-size: 2.4em; margin-bottom: 20px; }
  .ssTitle { font-size: 1.2em; }
  .txt { font-size: 1em; text-align: center; }
  .contactPoint { margin: 15px 20px; }
  #meB { width: 50%; left: 20%; }
}
@media (max-width: 360px){
  .contactList { flex-direction: column; }
  .title { margin-bottom: 5px; }
  .rose { display: none; }
}
</style>
