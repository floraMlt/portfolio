<template>
  <div class="about">
    <div class="icons">
      <GoHome class="homeIcon"/>
      <GoContact class="contactIcon"/>
    </div>
    <h2 class="title">A propos de moi</h2>
    <p class="txt">Je cherche un stage de 6 mois à partir d'avril 2020</p>
    <div @click="toggleModal" class="zoomCv"><p>Mon CV</p></div>
    <!--<div class="modalCv"><ModalCV ref="modalCv" :imgSrc="this.cvLink"/></div>-->
    <ModalCV ref="modalCv"/>
    <img id="meB" alt="dessin" src="@/assets/img/deco/meBlc.png">
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
  padding: 0.5% 1%;
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
  align-items: flex-start;
  left: 1.3%;
  top: 30px;
}
#meB {
  position: absolute;
  width: 35%;
  left: 70%;
  top: 190px;
}
</style>
