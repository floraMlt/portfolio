<template>
  <div class="contact">
    <div class="icons">
      <GoHome class="homeIcon"/>
      <GoAbout class="aboutIcon"/>
    </div>
    <div class="content">
      <svg version="1.1" width="200" height="200" viewBox="0 0 320 320" fill="none" stroke="#fff" stroke-linecap="round"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="r1">
          <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="10s" repeatCount="indefinite"/>
          <animate attributeName="stroke-width" values="0;1;2;1;0" dur="10s" repeatCount="indefinite" begin="p1.begin"/>
        </path>
        <path id="r2">
          <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="10s" repeatCount="indefinite" begin="p1.begin+1s"/>
          <animate attributeName="stroke-width" values="0;1;2;1;0" dur="10s" repeatCount="indefinite" begin="p1.begin+1s"/>
        </path>
        <path id="r3">
          <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="10s" repeatCount="indefinite" begin="p1.begin+2s"/>
          <animate attributeName="stroke-width" values="0;1;2;1;0" dur="10s" repeatCount="indefinite" begin="p1.begin+2s"/>
        </path>
        <path id="r4">
          <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="10s" repeatCount="indefinite" begin="p1.begin+3s"/>
          <animate attributeName="stroke-width" values="0;1;2;1;0" dur="10s" repeatCount="indefinite" begin="p1.begin+3s"/>
        </path>
        <path id="r5">
          <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="10s" repeatCount="indefinite" begin="p1.begin+4s"/>
          <animate attributeName="stroke-width" values="0;1;2;1;0" dur="10s" repeatCount="indefinite" begin="p1.begin+4s"/>
        </path>
        <path id="r6">
          <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="10s" repeatCount="indefinite" begin="p1.begin+5s"/>
          <animate attributeName="stroke-width" values="0;1;2;1;0" dur="10s" repeatCount="indefinite" begin="p1.begin+5s"/>
        </path>
      </defs>
      <use xlink:href="#r1"/>
      <use xlink:href="#r1" transform="rotate(60 160 160)"/>
      <use xlink:href="#r1" transform="rotate(120 160 160)"/>
      <use xlink:href="#r1" transform="rotate(180 160 160)"/>
      <use xlink:href="#r1" transform="rotate(240 160 160)"/>
      <use xlink:href="#r1" transform="rotate(300 160 160)"/>
      <use xlink:href="#r2" transform="rotate(30 160 160)"/>
      <use xlink:href="#r2" transform="rotate(90 160 160)"/>
      <use xlink:href="#r2" transform="rotate(150 160 160)"/>
      <use xlink:href="#r2" transform="rotate(210 160 160)"/>
      <use xlink:href="#r2" transform="rotate(270 160 160)"/>
      <use xlink:href="#r2" transform="rotate(330 160 160)"/>
      <use xlink:href="#r3"/>
      <use xlink:href="#r3" transform="rotate(60 160 160)"/>
      <use xlink:href="#r3" transform="rotate(120 160 160)"/>
      <use xlink:href="#r3" transform="rotate(180 160 160)"/>
      <use xlink:href="#r3" transform="rotate(240 160 160)"/>
      <use xlink:href="#r3" transform="rotate(300 160 160)"/>
      <use xlink:href="#r4" transform="rotate(30 160 160)"/>
      <use xlink:href="#r4" transform="rotate(90 160 160)"/>
      <use xlink:href="#r4" transform="rotate(150 160 160)"/>
      <use xlink:href="#r4" transform="rotate(210 160 160)"/>
      <use xlink:href="#r4" transform="rotate(270 160 160)"/>
      <use xlink:href="#r4" transform="rotate(330 160 160)"/>
      <use xlink:href="#r5"/>
      <use xlink:href="#r5" transform="rotate(60 160 160)"/>
      <use xlink:href="#r5" transform="rotate(120 160 160)"/>
      <use xlink:href="#r5" transform="rotate(180 160 160)"/>
      <use xlink:href="#r5" transform="rotate(240 160 160)"/>
      <use xlink:href="#r5" transform="rotate(300 160 160)"/>
      <use xlink:href="#r6" transform="rotate(30 160 160)"/>
      <use xlink:href="#r6" transform="rotate(90 160 160)"/>
      <use xlink:href="#r6" transform="rotate(150 160 160)"/>
      <use xlink:href="#r6" transform="rotate(210 160 160)"/>
      <use xlink:href="#r6" transform="rotate(270 160 160)"/>
      <use xlink:href="#r6" transform="rotate(330 160 160)"/>
    </svg> 
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
    <img id="meB" alt="dessin" src="@/assets/img/deco/meBlc.png">
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'
import GoAbout from '@/components/GoAbout.vue'

export default {
  name: 'Contact',
  components : {
    GoHome,
    GoAbout
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.$parent.onResize()
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
#meB {
  position: absolute;
  width: 20%;
  left: 70%;
  bottom: 30px;
}

/* RESPONSIVE */
@media (max-width: 1100px){
  .icons { width: 24%; }
  .aboutIcon { margin-left: 11%; }
  .homeIcon { margin-left: 5%; }
  #meB { width: 25%; }
  .title { margin-bottom: 35px; }
  .contactPoint { margin: 0 40px; }
  .content { margin-bottom: 90px; }
}
@media (max-width: 870px){
  .icons { width: 28%; }
  #meB { width: 29%; left: 65%; }
}
@media (max-width: 680px){
  .aboutIcon { margin-left: 18%; }
  .homeIcon { margin-left: 10%; }
  #meB { width: 35%; left: 60%; }
}
@media (max-width: 550px){
  .aboutIcon { margin-left: 25%; }
  .homeIcon { margin-left: 15%; }
  #meB { width: 40%; left: 55%; }
}
@media (max-width: 440px){
  .icons { width: 32%; }
  .aboutIcon { margin-left: 35%; }
  .homeIcon { margin-left: 25%; }
  #meB { width: 50%; left: 20%; }
  .title { font-size: 2.4em; margin-bottom: 20px; }
  .ssTitle { font-size: 1.2em; }
  .txt { font-size: 1em; text-align: center; }
  .contactPoint { margin: 15px 20px; }
}
@media (max-width: 360px){
  .contactList { flex-direction: column; }
  .title { margin-bottom: 5px; }
}
</style>
