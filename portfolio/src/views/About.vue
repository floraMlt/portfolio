<template>
  <div class="about">
    <GoHome class="homeIcon"/>
    <GoContact class="contactIcon"/>
    <h2 class="title">A propos de moi</h2>
    <p class="txt">Je cherche un stage de 6 mois à partir d'avril 2020</p>
    <div @click="toggleModal" class="zoomCv"><p>Mon CV</p></div>
    <!--<div class="modalCv"><ModalCV ref="modalCv" :imgSrc="this.cvLink"/></div>-->
    <ModalCV ref="modalCv"/>
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
}
.txt {
  font-family: 'Roboto';
  font-size: 1.2em;
}
.modalCv {
  height: 10% !important;
}
.contactIcon {
  position: absolute;
  left: 6%;
  top: 4%;
}
.homeIcon {
  position: absolute;
  left: 2%;
  top: 4%;
}
</style>
