<template>
  <div class="projectDetails">
    <router-link :to="{name: 'Projects'}">Retour aux projets</router-link>
    <p>Détails d'un projet</p>
    <h1> {{this.currentProjectData.title}} </h1>
    <p>{{this.currentProjectData.txt}}</p>
  </div>
</template>

<script>
import projets from '@/datas/projects'
import projetsIndex from '@/datas/projectsIndex'

export default {
  name: 'ProjectDetails',
  created() {
    this.getCurrentProject()
    console.log(this.titleCurrentProject)
    console.log(this.currentProjectData)
  },
  methods : {
    getCurrentProject() {
      this.titleCurrentProject = this.$route.params.titleP
      this.currentProjectData = projets[projetsIndex[this.titleCurrentProject]]
    }
  },
  data() {
    return {
      titleCurrentProject: null,
      currentProjectData: null
    }
  }
}
</script>

<style scoped>

</style>