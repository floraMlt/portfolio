<template>
  <div class="projectDetails">
    <router-link :to="{name: 'Projects'}" id="retour">
      <i class="arrow alternate circle left outline icon projects">
      </i>Retour aux projets
    </router-link>
    <!--<simplebar data-simplebar-auto-hide="false"/>-->
    <img id="deco1" alt="deco" src="@/assets/img/deco/lines5.png">
    <img id="deco2" alt="deco" src="@/assets/img/deco/lines.png">
    <div id="content">
      <div id="txt">
        <h1> {{this.currentProjectData.title}} </h1>
        <p>{{this.currentProjectData.text}}</p>
        <p>{{this.currentProjectData.date}}</p>
      </div>
      <Modal ref="modal" :imgSrc="this.currentImgSrc" class="modalImg"/>
      <img id="mainImg" :alt="this.currentProjectData.title" :src="this.currentProjectData.img">
      <div v-if="this.currentProjectData.otherImg[0]" class="mosaicImg">
        <i id="left" class="angle left icon fleche" v-on:click="hideLeft" v-if="this.first > 0"></i>
        <img v-for="(imgOther, index) in this.currentProjectData.otherImg" :key="imgOther.id" alt="Images du projet" :src="imgOther" 
          :class="{'hidden': (index < first || index > last), 'images' : true}" @click="toggleModal(imgOther)">
        <i id="right" class="angle right icon fleche" v-on:click="hideRight" v-if="this.last < (this.currentProjectData.otherImg.length -1)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import projets from '@/datas/projects'
import projetsIndex from '@/datas/projectsIndex'
import Modal from '@/components/Modal.vue'
/*import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';*/

export default {
  name: 'ProjectDetails',
  created() {
    this.verifProject()
  },
  methods : {

    hideLeft() {
      this.first--
      this.last--
    },
    hideRight() {
      this.first++
      this.last++
    },
    toggleModal(srcImg) {
      this.currentImgSrc = srcImg
      this.$refs.modal.toggle()
    },
    verifProject(){
      if(projetsIndex[this.$route.params.titleP] == undefined) {
        this.$router.push({name:'Home'})
      } else {
        this.currentProjectData = projets[projetsIndex[this.$route.params.titleP]]
      }
    }
  },
  data() {
    return {
      currentProjectData: null,
      first: 0,
      last: 2,
      currentImgSrc: null
    }
  },
  components: {
    Modal
    /*simplebar*/
  }
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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
.mosaicImg {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 2%;
  position: relative;
}
.images{
  width: 22%;
  margin: 0% 1%;
  border: 1px solid rgba(177, 177, 177, 0.692);
  border-radius: 10px;
}
#deco1 {
  transform: rotate(180deg);
  width: 6vw;
  position: absolute;
  left: 2%;
  bottom: -2%;
}
#deco2 {
  transform: rotate(180deg);
  width: 6vw;
  position: absolute;
  right: 2%;
  top: -2%;
}
#left {
  left: 12%;
}
#right {
  right: 12%;
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
  margin-right: 1%;
}
#retour {
  position: absolute;
  top: 22px;
  left: 45px;
  display: flex;
  justify-self: flex-start;
  text-decoration: none;
  color: #280047;
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