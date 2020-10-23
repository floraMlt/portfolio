<template>
  <div class="projectDetails">
    <router-link :to="{name: 'Projects'}" id="retour">
      <i class="arrow alternate circle left outline icon projects">
      </i>Retour aux projets
    </router-link>
    <!--<simplebar data-simplebar-auto-hide="false"/>-->
      <div id="content">
        <div id="txt">
          <h1> {{this.currentProjectData.title}} </h1>
          <p>{{this.currentProjectData.text}}</p>
          <p>{{this.currentProjectData.date}}</p>
        </div>
      <img id="mainImg" :alt="this.currentProjectData.title" :src="this.currentProjectData.img">
      <div v-if="this.otherImgTab[0]" class="mosaicImg">
        <i class="angle left icon fleche" v-on:click="hideLeft" v-if="this.first > 0"></i>
        <img v-for="(imgOther, index) in this.otherImgTab" :key="imgOther.id" alt="Images du projet" :src="imgOther" 
          :class="{'hidden': (index < first || index > last), 'images' : true}">
        <i class="angle right icon fleche" v-on:click="hideRight" v-if="this.last < (this.otherImgTab.length -1)"></i>
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
    },
    hideLeft() {
      this.first--
      this.last--
    },
    hideRight() {
      this.first++
      this.last++
    }
  },
  data() {
    return {
      titleCurrentProject: null,
      currentProjectData: null,
      otherImgTab: null,
      first: 0,
      last: 2
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
.hidden {
  display: none;
}
.fleche {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  margin-top: 7%;
  font-size: 1.7em;
  color: #280047;
}
.projectDetails {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  -webkit-user-select: none; 
  -webkit-touch-callout: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
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
  border: 1px solid rgba(177, 177, 177, 0.692);
  border-radius: 10px;
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
  width: 38%;
  border-radius: 8px;
  margin-left: 1.5%;
}
#retour {
  position: absolute;
  top: 22px;
  left: 45px;
  display: flex;
  justify-self: flex-start;
  text-decoration: none;
  color: #C1272D;
  font-family: "Roboto";
  font-weight: lighter;
  /*font-size: 0.7em;*/
}
#content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
}
</style>