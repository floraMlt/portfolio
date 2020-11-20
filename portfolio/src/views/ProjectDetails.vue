<template>
  <div class="projectDetails">
    <router-link :to="{name: 'Projects'}" id="retour">
      <i class="arrow alternate circle left outline icon projects">
      </i> <p class="txtRetour">Retour aux projets</p>
    </router-link>
    <img id="deco1" alt="deco" src="@/assets/img/deco/lines5.png">
    <img id="deco2" alt="deco" src="@/assets/img/deco/lines.png">
    <div id="content" :class="this.currentImgClass">
      <div class="contentTop">
        <div id="txt">
          <h1> {{this.currentProjectData.title}} </h1>
          <p class="txtContent">{{this.currentProjectData.text}}</p>
          <p class="txtContent">{{this.currentProjectData.date}}</p>
          <ButtonSeeProject id="seeProject" :linkP="this.currentProjectData.link"/>
        </div>
        <Modal ref="modal" :imgSrc="this.currentImgSrc" class="modalImg"/>
        <img id="mainImg" :alt="this.currentProjectData.title" :src="this.currentProjectData.img" @click="toggleModal(currentProjectData.img)">
      </div>
      <div v-if="this.currentProjectData.otherImg[0]" class="mosaicImg">
        <i id="left" class="angle left icon fleche" v-on:click="hideLeft" v-if="this.first > 0"></i>
        <img v-for="(imgOther, index) in this.currentProjectData.otherImg" :key="imgOther.id" alt="Images du projet" :src="imgOther" 
          :class="{'hidden': (index < first || index > last), 'images' : true}" @click="toggleModal(imgOther)">
        <i id="right" class="angle right icon fleche" v-on:click="hideRight" v-if="this.last < (this.currentProjectData.otherImg.length -1)"></i>
      </div>
    </div>
    <footer class="footer">
    </footer>
  </div>
</template>

<script>
import projets from '@/datas/projects'
import projetsIndex from '@/datas/projectsIndex'
import Modal from '@/components/Modal.vue'
import ButtonSeeProject from '@/components/ButtonSeeProject.vue'

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
    setClassImgs() {
      if (this.isThereMosaic) { this.currentImgClass = "contentPage" }
      else { this.currentImgClass = "noMosaic" }
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
      currentImgSrc: null,
      isThereMosaic: true,
      currentImgClass: "mosaicImg"
    }
  },
  components: {
    Modal,
    ButtonSeeProject
  },
  mounted() {
    this.$parent.onResize();
    if(this.currentProjectData.otherImg.length == 0) { this.isThereMosaic = false; }
    else { this.isThereMosaic = true; }
    this.setClassImgs();
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
  top: 140px;
  transform: translateY(-50%);
  font-size: 1.7em;
  color: #1B1464;
}
.projectDetails {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
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
  margin-top: 15px;
  position: relative;
}
.contentPage {
  margin-top: 0;
}
.noMosaic {
  margin-top: 160px;
}
.images{
  width: 22%;
  height: auto;
  margin: 1%;
  border-radius: 10px;
  box-shadow: 1px 1px 8px rgba(40,0,71, 0.5);
}
.txtContent {
  font-size: 0.95em;
}
.txtRetour {
  margin-top: 0;
}
.footer {
  padding: 2% 0;
}
#deco1 {
  transform: rotate(180deg);
  width: 6vw;
  position: absolute;
  left: 2%;
  bottom: -5px;
}
#deco2 {
  transform: rotate(180deg);
  width: 6vw;
  position: absolute;
  right: 2%;
  top: -5px;
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
  height: auto;
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
}
.contentTop {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
}
#seeProject {
  display: flex;
  align-self: center;
}

.images:hover {
  cursor: zoom-in;
}
#mainImg:hover {
  cursor: zoom-in;
} 

/* RESPONSIVE*/
@media (max-width: 1300px){
  .fleche { top: 52%; }
}
@media (max-width: 1000px){
  .contentTop{ flex-direction: column-reverse; }
  #txt {  width: 60%; text-align: center; }
  #mainImg { margin: 30px 0 20px 0; width: 45%; }
  #right { right: 8%; top: 56%; }
  #left { left: 8.5%; top: 56%; }
  .fleche { top: 75px; }
  .hidden { display:inline; }
  .fleche { display: none; }
  .images{ width: 35%; }
  .mosaicImg { margin-top: 10px; }
  .noMosaic { margin-top: 50px; }
}
@media (max-width: 800px){
  .txtRetour { font-size: smaller; margin-top: 5px;}
  #retour { flex-direction: column; align-items: center; top: 16px; left: 3%;}
  #mainImg { width: 60%; }
}
@media (max-width: 550px){
  h1 { font-size: 2.4em; }
  .images{ width: 84%; }
  .txtRetour { display: none; }
  .txtContent { font-size: 0.95em; }
  #deco1 { display: none; }
  #deco2 { display: none; }
  #mainImg { width: 84%; margin: 10px 0 10px 0; }
  #retour { align-items: flex-start; }
  #txt { width: 73%; }
}
@media (max-width: 450px){
  h1 { font-size: 2.3em; }
  .images{ margin-bottom: 15px; }
  #txt { width: 78%; margin-bottom: 18px; }
}
</style>