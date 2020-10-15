<template>
  <div class="projectCategories">
    <img id="deco" src="../assets/img/lines3.png" alt="déco">
    <Category v-for="category in categories" :key="category.id"
    :cat="category.cat" :src="category.src" :id="category.id" :alt="category.cat" :style="category.style"/>
    <img id="deco2" src="../assets/img/lines4.png" alt="déco2">
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'ProjectCategories',
  components: {
    Category
  },
  data() {
    return {
      categories:
        [
          {cat:"Illustration", src:"img/catIllu.png", id:"illu", style: "position: relative; left: 45%; top: 25%;"},
          {cat:"InstallationInteractive", src:"img/catInstal.png", id:"instal", style: "position: relative; left: 30%; top: 75%;"},
          {cat:"Web", src:"img/catWeb.png", id:"web", style: "position: relative; left: 35%; top: 15%;"},
          {cat:"Animation", src:"img/catAnim.png", id:"anim", style: "position: relative;  left: 15%; top: 5%;"},
          {cat:"Projet3D", src:"img/cat3D.png", id:"3d", style: "position: relative;  left: 10%; top: 50%;"},
          {cat:"Graphisme", src:"img/catGraphisme.png", id:"graphisme", style: "position: relative;  left: 5%; top: 45%;"},
          {cat:"Développement", src:"img/catDev.png", id:"devJv", style: "position: relative;  left: 25%; top: 5%;"},
          {cat:"Audiovisuel", src:"img/catAudio.png", id:"audio", style: "position: relative; left: 70%; top: 30%;"}
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
#deco {
  position: absolute;
  max-height: 100vh;
  width: auto;
}
#deco2 {
  position: absolute;
  max-height: 100vh;
  width: auto;
  right: 0;
  top: 5%;
}
</style>
