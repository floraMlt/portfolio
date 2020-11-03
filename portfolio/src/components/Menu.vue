<template>
  <div class="menu">
    <img class="menuPicto" alt="Picto menu" src="@/assets/img/menu/menuPicto.png" @click="menuActive">
    <div id="otherIcons" :class="{'isOpen':isOpen}">
        <GoHome class="iconAll"/>
        <GoContact class="iconAll"/>
        <GoAbout class="iconAll"/>
    </div>
    <div class="cache"> </div>
  </div>
</template>

<script>
import GoHome from '@/components/GoHome.vue'
import GoContact from '@/components/GoContact.vue'
import GoAbout from '@/components/GoAbout.vue'

export default {
  name: 'Menu',
  components: {
    GoHome,
    GoContact,
    GoAbout
  },
  methods : {
    menuActive(){
        this.isOpen = !this.isOpen
    }
  },
  data(){
    return {
      isOpen : false
    }
  }
}
</script>

<style scoped>
.menuPicto {
  width: 3vw;
  opacity: 0.8;
  margin-bottom: 5px;
  z-index: 10;
}
.menuPicto:hover {
  opacity: 1;
}
.iconAll {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4vw;
  margin-top: 10px;
}
.menu {
  position: absolute;
  top: 20px;
  left: 3.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cache {
  background-color: #280047;
  position: absolute;
  top: -25px;
  width: 5vw;
  height: 53px;
  transition: top 1s;
  z-index: 8;
}
#otherIcons {
  position: relative;
  top: -200px;
  transition: top 1s;
  z-index: 5;
}
.isOpen {
  top: 0px !important;
}
@media (max-width: 2212px){
  .menu { top: 13px; }
  .cache { width: 5.5vw; }
}
@media (max-width: 1100px){
  .menu { 
    top: 13px;
    left: 838px;
    right: 0;
  }
}
</style>