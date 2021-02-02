<!-- Page with all the project categories , user can choose one -->
<template>
  <div class="projectCategories">
    <Menu class="menu"/>
    <img id="deco" src="../assets/img/deco/lines3.png" alt="déco">
    <Category v-for="category in categories" :key="category.id" :id="category.id"
    :imgCat="category.cat" :imgSrc="category.src" :imgId="category.id"/>
    <img id="deco2" src="../assets/img/deco/lines4.png" alt="déco2">
  </div>
</template>

<script>
import Category from '@/components/Category.vue'
import Menu from '@/components/Menu.vue'


export default {
  name: 'ProjectCategories',
  components: {
    Category,
    Menu
  },
  data() {
    return {
      categories:
        [
          {cat:"Illustration", src: require("@/assets/img/lettrines/catIllu.png"), id:"illu"},
          {cat:"Interactivé", src: require("@/assets/img/lettrines/catInstal.png"), id:"instal"},
          {cat:"Web", src: require("@/assets/img/lettrines/catWeb.png"), id:"web"},
          {cat:"Animation", src: require("@/assets/img/lettrines/catAnim.png"), id:"anim"},
          {cat:"Projet3D", src: require("@/assets/img/lettrines/cat3D.png"), id:"projet3d"},
          {cat:"Graphisme", src: require("@/assets/img/lettrines/catGraphisme.png"), id:"graphisme"},
          {cat:"Programmation 3D", src: require("@/assets/img/lettrines/catDev.png"), id:"devJv"},
          {cat:"Audiovisuel", src: require("@/assets/img/lettrines/catAudio.png"), id:"audio"}
        ]
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.$parent.onResize()
  }
}
</script>

<style scoped>
.projectCategories {
  background-color: #280047;
  display:grid;
  grid-template-columns: 33% 33% 33%;
  min-width: 100vw;
  min-height: 100vh;
}
.menu {
  position: absolute;
  top: 25px;
}
#deco {
  position: absolute;
  max-height: 100vh;
  width: auto;
}
#deco2 {
  position: absolute;
  max-height: 90vh;
  width: auto;
  right: 1%;
  top: 100px;
}
#illu {
  position: relative; 
  left: 65%; 
  top: 25%;
  transition: left 0.5s, top 0.5s;
}
#instal {
  position: relative; 
  left: 45%; 
  top: 70%;
  transition: left 0.5s, top 0.5s;
}
#web {
  position: relative; 
  left: 22%; 
  top: 30%;
  transition: left 0.5s, top 0.5s;
}
#anim {
  position: relative;  
  left: 25%; 
  top: 5%;
  transition: left 0.5s, top 0.5s;
}
#projet3d {
  position: relative;  
  left: 15%; 
  top: 45%;
  transition: left 0.5s, top 0.5s;
}
#graphisme {
  position: relative;  
  left: -5%; 
  top: 55%;
  transition: left 0.5s, top 0.5s;
}
#devJv {
  position: relative;  
  left: 40%; 
  top: 12%;
  transition: left 0.5s, top 0.5s;
}
#audio {
  position: relative; 
  left: 70%; 
  top: 35%;
  transition: left 0.5s, top 0.5s;
}
#illu:hover { left: 63%; top: 23%; }
#instal:hover { left: 43%; top: 68%; }
#web:hover { left: 20%; top: 28%; }
#anim:hover {   left: 23%;  top: 3%; }
#projet3d:hover { left: 13%; top: 43%; }
#graphisme:hover { left: -7%;  top: 53%; }
#devJv:hover { left: 38%; top: 10%; }
#audio:hover { left: 68%; top: 33%; }

/* RESPONSIVE */
@media (max-width: 1220px){
  #illu { left: 54%; }
  #instal { left: 35%; }
  #web { left: 12%; }
  #anim { left: 16%; }
  #projet3d { left: 5%; }
  #graphisme { left: -15%; }
  #devJv { left: 30%; }
  #audio { left: 68%; }
  #deco { max-height: 95vh; }
  #deco2 { max-height: 80vh; top: 154px; }
  #illu:hover { left: 53%; }
  #instal:hover { left: 34%; }
  #web:hover { left: 11%; }
  #anim:hover { left: 15%; }
  #projet3d:hover { left: 4%; }
  #graphisme:hover { left: -16%; }
  #devJv:hover { left: 29%; }
  #audio:hover { left: 67%; }
}
@media (max-width: 1120px){
  #illu { left: 51%; }
  #instal { left: 22%; }
  #web { left: 9%; }
  #anim { left: 13%; }
  #projet3d { left: 2%; }
  #graphisme { left: -22%; }
  #devJv { left: 27%; }
  #audio { left: 65%; }
  #illu:hover { left: 50%; }
  #instal:hover { left: 21%; }
  #web:hover { left: 8%; }
  #anim:hover { left: 12%; }
  #projet3d:hover { left: 1%; }
  #graphisme:hover { left: -23%; }
  #devJv:hover { left: 26%; }
  #audio:hover { left: 64%; }
}
@media (max-width: 1000px){
  #illu { left: 48%; }
  #instal { left: 19%; }
  #web { left: 6%; }
  #anim { left: 10%; }
  #projet3d { left: -1%; }
  #graphisme { left: -25%; }
  #devJv { left: 20%; top: 7%; }
  #audio { left: 65%; }
  #deco { max-height: 85vh; }
  #deco2 { max-height: 70vh; top: 216px; }
  #illu:hover { left: 47%; }
  #instal:hover { left: 18%; }
  #web:hover { left: 5%; }
  #anim:hover { left: 9%; }
  #projet3d:hover { left: -2%; }
  #graphisme:hover { left: -26%; }
  #devJv:hover { left: 19%; top: 5%; }
  #audio:hover { left: 64%; }
}
@media (max-width: 930px){
  #illu { left: 29%; }
  #instal { left: 67%; top: 86%; }
  #web { left: -34%; top: 26%; }
  #anim { left: 29%; top: -16%; }
  #projet3d { left: -72%; top: 53%; }
  #graphisme { left: -36%; top: 52%; }
  #devJv { left: 29%; top: 19%; }
  #audio { left: 101%; top: 16%; }
  #deco { max-height: 80vh; }
  #deco2 { max-height: 67vh; top: 241px; }
  #illu:hover { left: 29%; }
  #instal:hover { left: 67%; top: 84%; }
  #web:hover { left: -34%; top: 24%; }
  #anim:hover { left: 29%; top: -18%; }
  #projet3d:hover { left: -72%; top: 51%; }
  #graphisme:hover { left: -36%; top: 50%; }
  #devJv:hover { left: 29%; top: 17%; }
  #audio:hover { left: 101%; top: 14%; }
}
@media (max-width: 756px){
  #illu { left: 122%; top: 284px; }
  #instal { left: -2%; top: 370px; }
  #web { left: -68%; top: 22px; }
  #anim { left: 118%; top: -52px; }
  #projet3d { left: 44%; top: 217px; }
  #graphisme { left: -104%; top: -138px; }
  #devJv { left: 74%; top: 133px; }
  #audio { left: 13%; top: 55px; }
  #deco {
    max-height: 80vh;
    top: 0;
    left: 0;
  }
  #deco2 {
    max-height: 67vh;
    top: 241px;
  }
  #illu:hover { left: 122%; top: 295px; }
  #instal:hover { left: -2%; top: 370px; }
  #web:hover { left: -68%; top: 22px; }
  #anim:hover { left: 118%; top: -52px; }
  #projet3d:hover { left: 44%; top: 217px; }
  #graphisme:hover { left: -104%; top: -138px; }
  #devJv:hover { left: 74%; top: 133px; }
  #audio:hover { left: 13%; top: 55px; }
}
@media (max-width: 520px){
  #illu { left: 114%; }
  #instal { left: -15%; }
  #web { left: -72%; }
  #anim { left: 109%; }
  #projet3d { left: 43%; }
  #graphisme { left: -116%; }
  #devJv { left: 49%; }
  #audio { left: -1%; }
  #deco { max-height: 70vh; }
  #deco2 { max-height: 60vh; top: 294px; }
  #illu:hover { left: 114%; top: 295px; }
  #instal:hover { left: -15%; top: 370px; }
  #web:hover { left: -72%; top: 22px; }
  #anim:hover { left: 109%; top: -52px; }
  #projet3d:hover { left: 43%; top: 217px; }
  #graphisme:hover { left: -116%; top: -138px; }
  #devJv:hover { left: 49%; top: 133px; }
  #audio:hover { left: -1%; top: 55px; }
}
@media (max-width: 450px){
  #illu { left: 95%; top: 255px;}
  #instal { left: -41%; top: 334px;}
  #web { left: -84%; top: 22px;}
  #anim { left: 90%; top: -45px;}
  #projet3d { left: 26%; top: 197px;}
  #graphisme { left: -138%; top: -120px;}
  #devJv { left: 22%; top: 133px;}
  #audio { left: -23%; top: 52px;}
  #deco { max-height: 70vh; }
  #deco2 { max-height: 60vh; top: 294px; }
  #illu:hover { left: 95%; top: 255px;}
  #instal:hover { left: -41%; top: 334px;}
  #web:hover { left: -84%; top: 22px;}
  #anim:hover { left: 90%; top: -45px;}
  #projet3d:hover { left: 26%; top: 197px;}
  #graphisme:hover { left: -138%; top: -120px;}
  #devJv:hover { left: 22%; top: 133px;}
  #audio:hover { left: -23%; top: 52px;}
}
</style>
