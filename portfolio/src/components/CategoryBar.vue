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
  data() {
    return {
      /*currentCat: "All",*/
      currentCat: this.$parent.currentCategory
    }
  },
  computed: { // relance fonction que quand il y a une action de l'utilisateur
    selectProject : function() {
      return this.$parent.projects.filter(this.$parent.verifCategory)
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
  font-size: 0.9em;
  margin: -2% 0% 2% 1%;
  padding: 0.8% 1%;
  color: white;
  height: fit-content;
  background-color:  #C1272D;
  border-radius: 5px;
  text-align: center;
}
</style>