<template>
  <div class="about">
    <div class="icons">
      <GoHome class="homeIcon"/>
      <GoContact class="contactIcon"/>
    </div>
    <div class="content">
      <h2 class="title">A propos de moi</h2>
      <p class="txt">Je cherche un stage de 6 mois à partir d'avril 2020</p>
      <div @click="toggleModal" class="zoomCv"><p>Mon CV</p></div>
      <ModalCV ref="modalCv"/>
      <img id="meB" alt="dessin" src="@/assets/img/deco/meBlc.png">
    </div>
  </div>
</template>

<script>
import ModalCV from '@/components/ModalCV.vue'
import GoHome from '@/components/GoHome.vue'
import GoContact from '@/components/GoContact.vue'

export default {
  name: 'About',
  components : {
    ModalCV,
    GoHome,
    GoContact
  },
  data(){
    return {
      cvLink: require("@/assets/img/cv.jpg")
    }
  },
  methods: {
    toggleModal() {
      this.$refs.modalCv.toggle()
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.$parent.onResize()
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
  font-size: 1.2em;
}
.modalCv {
  height: 10% !important;
}
.zoomCv {
  border: #C1272D 0.5px solid;
  border-radius: 18px;
  font-size: 1.2em;
  padding: 1% 2%;
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
  .contactIcon { margin-left: 11%; }
  .homeIcon { margin-left: 5%; }
  #meB { width: 25%; }
  .title { font-size: 2.8em; }
  .txt { font-size: 1.1em; }
  .zoomCv { font-size: 1.1em; }
  .content { margin-bottom: 8%; }
}
@media (max-width: 870px){
  .icons { width: 28%; }
  #meB { width: 29%; left: 65%; }
  .content { margin-bottom: 12%; }
}
@media (max-width: 680px){
  .contactIcon { margin-left: 18%; }
  .homeIcon { margin-left: 10%; }
  #meB { width: 35%; left: 60%; }
  .content { margin-bottom: 27%; }
}
@media (max-width: 550px){
  .contactIcon { margin-left: 25%; }
  .homeIcon { margin-left: 15%; }
  #meB { width: 40%; left: 55%; }
  .content { margin-bottom: 32%; }
}
@media (max-width: 440px){
  .icons { width: 32%; }
  .contactIcon { margin-left: 35%; }
  .homeIcon { margin-left: 25%; }
  #meB { width: 50%; left: 20%; }
  .title { font-size: 2.6em; }
  .txt { font-size: 1em; text-align: center; }
  .zoomCv { font-size: 1em; }
  .content { margin-bottom: 45%; width: 80%; }
}
</style>
