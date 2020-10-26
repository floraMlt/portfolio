<template>
  <div class="contact">
    <GoHome class="homeIcon"/>
    <GoAbout class="aboutIcon"/>
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
}
</script>

<style scoped>
.contactList {
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
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
.title {
  font-family: 'bodoniB';
  font-size: 2.6em;
}
.ssTitle {
  font-family: 'Roboto';
  font-size: 1.2em;
  font-weight: bolder;
  margin-right: 1%;
  /*width: 30%;*/
}
.txt {
  font-family: 'Roboto';
  font-size: 1em;
}
.contactPoint {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.aboutIcon {
  position: absolute;
  left: 5%;
  top: 4%;
}
.homeIcon {
  position: absolute;
  left: 2%;
  top: 4%;
}
</style>
