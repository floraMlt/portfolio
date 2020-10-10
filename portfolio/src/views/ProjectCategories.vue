<template>
  <div class="projectCategories">
    <div v-for="category in categories" :key="category.id" class="categoriesList">
      <Category class="category" :cat="category.cat" :src="category.src" :id="category.id" :alt="category.cat"/>
    </div>
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
          {cat:"web", src:"img/catWeb.png", id:"web"},
          {cat:"installation", src:"img/catInstal.png", id:"instal"},
          {cat:"illustration", src:"img/catIllu.png", id:"illu"},
          {cat:"graphisme", src:"img/catGraphisme.png", id:"graphisme"},
          {cat:"devJv", src:"img/catDev.png", id:"devJv"},
          {cat:"audiovisuel", src:"img/catAudio.png", id:"audio"},
          {cat:"animation", src:"img/catAnim.png", id:"anim"},
          {cat:"3d", src:"img/cat3D.png", id:"3d"}
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
  width: 100%;
  height: 100%;
}
</style>
