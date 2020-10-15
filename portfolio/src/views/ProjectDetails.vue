<template>
  <div class="projectDetails">
    <router-link :to="{name: 'Projects'}">Retour aux projets</router-link>
    <p>Détails d'un projet</p>
  </div>
</template>

<script>

export default {
  name: 'ProjectDetails',
  props: {
    titleProject:{type:String, required:true},
    catProject:{type:String, required:true},
    txtProject:{type:String, required:true},
    imgProject:{type:String, required:true}
  },
  data() {
    return {
      title: this.titleProject,
      cat: this.catProject,
      txt: this.txtProject,
      img: this.imgProject
    }
  }
}
</script>

<style scoped>

</style>