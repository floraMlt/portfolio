<template>
  <div class="projectItem">
      <img id="img" :alt="this.projectData.img" :src="this.projectData.img">
      <div id="txt">
        <h3 id="titleProject"> {{this.projectData.title}} </h3>
        <p id="resumeProject"> {{this.projectData.resume}} </p>
        <SeeButton id="see" :titleProject="this.projectData.title"/>
      </div>
  </div>
</template>

<script>
import SeeButton from '@/components/SeeButton.vue'

export default {
  name: 'ProjectItem',
  components: {
      SeeButton
  },
  props:{
    projet:{type:Object, required:true}
    /*title:{type:String, required:true},
    img:{type:String, required:true},
    resume:{type:String, required:true},
    categories:{type:String, required:true}*/
  },
  data() {
      return {
          /*titleProject: this.title,
          imgProject: this.img,
          resumeProject: this.resume,
          catProject: this.categories*/
          projectData: this.projet
      }
  }
}
</script>

<style scoped>
.projectItem {
  text-align: center;
  width: 240px;
  height: 320px;
  border: 0.9px #bbbbbb solid;
  border-radius: 5%;
  background-color: white;
  margin: 1%;
  padding: 1.5%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
}
#img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
}
img {
    color:grey;
}
#resumeProject {
  font-size: 0.9em;
}
#titleProject {
  margin-top: 1%;
}
#see {
  width: 187px;
  margin-left: auto;
  margin-right: auto;
}
</style>