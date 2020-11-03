<template>
  <div class="projectCategories">
    <!--<div class="icons">
      <GoHome class="homeIcon iconAll"/>
      <GoContact class="contactIcon iconAll"/>
      <GoAbout class="aboutIcon iconAll"/>
    </div>-->
    <Menu class="menu"/>
    <img id="deco" src="../assets/img/deco/lines3.png" alt="déco">
    <Category v-for="category in categories" :key="category.id"
    :cat="category.cat" :src="category.src" :id="category.id" :alt="category.cat" :style="category.style"/>
    <img id="deco2" src="../assets/img/deco/lines4.png" alt="déco2">
  </div>
</template>

<script>
import Category from '@/components/Category.vue'
import Menu from '@/components/Menu.vue'
/*import GoHome from '@/components/GoHome.vue'
import GoContact from '@/components/GoContact.vue'
import GoAbout from '@/components/GoAbout.vue'*/

export default {
  name: 'ProjectCategories',
  components: {
    Category,
    Menu,
    /*GoHome,
    GoContact,
    GoAbout*/
  },
  data() {
    return {
      categories:
        [
          {cat:"Illustration", src: require("@/assets/img/lettrines/catIllu.png"), id:"illu", style: "position: relative; left: 65%; top: 25%;"},
          {cat:"InstallationInteractive", src: require("@/assets/img/lettrines/catInstal.png"), id:"instal", style: "position: relative; left: 45%; top: 70%;"},
          {cat:"Web", src: require("@/assets/img/lettrines/catWeb.png"), id:"web", style: "position: relative; left: 22%; top: 30%;"},
          {cat:"Animation", src: require("@/assets/img/lettrines/catAnim.png"), id:"anim", style: "position: relative;  left: 25%; top: 5%;"},
          {cat:"Projet3D", src: require("@/assets/img/lettrines/cat3D.png"), id:"3d", style: "position: relative;  left: 15%; top: 45%;"},
          {cat:"Graphisme", src: require("@/assets/img/lettrines/catGraphisme.png"), id:"graphisme", style: "position: relative;  left: -5%; top: 55%;"},
          {cat:"Développement", src: require("@/assets/img/lettrines/catDev.png"), id:"devJv", style: "position: relative;  left: 40%; top: 12%;"},
          {cat:"Audiovisuel", src: require("@/assets/img/lettrines/catAudio.png"), id:"audio", style: "position: relative; left: 70%; top: 35%;"}
        ]
    }
  }
}
</script>

<style scoped>
.projectCategories {
  background-color: #280047;
  display:grid;
  grid-template-columns: 33% 33% 33%;
  min-width: 100%;
  min-height: 100%;
}
.menu {
  position: absolute;
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
</style>
