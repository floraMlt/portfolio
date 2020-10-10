<template>
  <div class="projectCategories">
    <img class="deco" src="../assets/img/lines3.png" alt="déco">
    <Category v-for="category in categories" :key="category.id"
    :cat="category.cat" :src="category.src" :id="category.id" :alt="category.cat" :style="category.style"/>
    <img class="deco2" src="../assets/img/lines4.png" alt="déco2">
     <!--<img src="../assets/img/catWeb.png" alt="cato">-->
      <!--<imge :src="hrodcx," :style="">
      component avec en props la src de img, x et y en pourcentage et position relative-->
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
          {cat:"illustration", src:"img/catIllu.png", id:"illu", style: "position: relative; left: 45%; top: 25%;"},
          {cat:"installation", src:"img/catInstal.png", id:"instal", style: "position: relative; left: 30%; top: 75%;"},
          {cat:"web", src:"img/catWeb.png", id:"web", style: "position: relative; left: 35%; top: 15%;"},
          {cat:"animation", src:"img/catAnim.png", id:"anim", style: "position: relative;  left: 15%; top: 5%;"},
          {cat:"3d", src:"img/cat3D.png", id:"3d", style: "position: relative;  left: 10%; top: 50%;"},
          {cat:"graphisme", src:"img/catGraphisme.png", id:"graphisme", style: "position: relative;  left: 5%; top: 45%;"},
          {cat:"devJv", src:"img/catDev.png", id:"devJv", style: "position: relative;  left: 25%; top: 5%;"},
          {cat:"audiovisuel", src:"img/catAudio.png", id:"audio", style: "position: relative; left: 70%; top: 30%;"}
        ]
    }
    //cat[] // 1 case = 1 titre, dans chaque case on met un objet. le chemin src, attributs css dans chaque obj
    // v-for avec ce tableau
    // si difficile avec les positions en attribut en style, je mets juste la src et l'id pour chaque categorie et dans le css normal je mettrai la position de chaque
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
.deco {
  position: absolute;
  max-height: 100vh;
  width: auto;
}
.deco2 {
  position: absolute;
  max-height: 100vh;
  width: auto;
  right: 0;
  top: 5%;
}
</style>
