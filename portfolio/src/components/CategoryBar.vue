<template>
  <div class="categoryBar">
    <div class="pages" @click="changeCategory('All')">All</div>
    <div class="pages" @click="changeCategory('Web')">Web</div>
    <div class="pages" @click="changeCategory('Graphisme')">Graphisme</div>
    <div class="pages" @click="changeCategory('Animation')">Animation</div>
    <div class="pages" @click="changeCategory('Illustration')">Illustration</div>
    <div class="pages" @click="changeCategory('InstallationInteractive')">Installation interactive</div>
    <div class="pages" @click="changeCategory('Projet3D')">3D</div>
    <div class="pages" @click="changeCategory('Audiovisuel')">Audiovisuel</div>
    <div class="pages" @click="changeCategory('Développement')">Développement et jeux-vidéos</div>
  </div>
</template>

<script>
export default {
  name: 'CategoryBar',
  props: {
    currentCategory:{type:String, required:true}
  },
  data() {
    return {
      /*currentCat: "All",*/
      currentCat: this.currentCategory
    }
  },
  methods: {
    changeCategory(categorie) {
        this.$router.replace('/projects/' + categorie)
        this.currentCategory = this.$route.params.catName
    }
  }
}
</script>

<style scoped>
.pages {
  text-decoration: none;
  font-size: 0.9em;
  margin: 4% 1% 2% 1%;
  color: black;
  height: fit-content;
}
</style>