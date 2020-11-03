<template>
  <div class="contact">
    <div class="icons">
      <GoHome class="homeIcon"/>
      <GoAbout class="aboutIcon"/>
    </div>
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
}
</script>

<style scoped>
.contactList {
  display: flex;
  flex-direction: row;
  width: 40%;
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
.title {
  font-family: 'bodoniB';
  font-size: 2.6em;
  margin-bottom: 50px;
  color: #C1272D;
}
.ssTitle {
  font-family: 'Roboto';
  font-size: 1.2em;
  font-weight: bolder;
  margin-right: 1%;
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
  width: 35%;
  left: 70%;
  top: 190px;
}
</style>
