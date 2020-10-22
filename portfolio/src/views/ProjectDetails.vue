<template>
  <div class="projectDetails">
    <router-link :to="{name: 'Projects'}" id="retour">Retour aux projets</router-link>
    <!--<simplebar data-simplebar-auto-hide="false"/>-->
      <div id="content">
        <div id="txt">
          <h1> {{this.currentProjectData.title}} </h1>
          <p>{{this.currentProjectData.text}}</p>
          <p>{{this.currentProjectData.date}}</p>
        </div>
      <img id="mainImg" :alt="this.currentProjectData.title" :src="this.currentProjectData.img">
      <div class="mosaicImg">
        <img class="images" v-for="imgOther in this.otherImgTab" :key="imgOther.id" alt="Images du projet" :src="imgOther">
      </div>
    </div>
  </div>
</template>

<script>
import projets from '@/datas/projects'
import projetsIndex from '@/datas/projectsIndex'
/*import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';*/

export default {
  name: 'ProjectDetails',
  created() {
    this.getCurrentProject()
  },
  methods : {
    getCurrentProject() {
      this.titleCurrentProject = this.$route.params.titleP
      this.currentProjectData = projets[projetsIndex[this.titleCurrentProject]]
      this.otherImgTab = this.currentProjectData.otherImg
    }
  },
  data() {
    return {
      titleCurrentProject: null,
      currentProjectData: null,
      otherImgTab: null
    }
  }/*,
  components: {
    simplebar
  }*/
}
</script>

<style scoped>
h1{
  color: #C1272D;
  font-family: 'bodoniB';
  font-size: 2.6em;
  text-align: center;
  width: 100%;
}
.projectDetails {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.mosaicImg{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 2%;
}
.images{
  width: 22%;
  margin: 0% 1%;
}
#txt {
  text-align: right;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 1.5%;
}
#mainImg {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  margin-left: 1.5%;
}
#retour {
  position: absolute;
  top: 15px;
  left: 20px;
}
#content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 3.5%;
}
</style>