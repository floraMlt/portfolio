<template>
  <div class="projects">
    <MenuVert/>
    <p id="titleProjects"> {{this.currentCategory}} </p>
    <img id="deco1" alt="deco" src="@/assets/img/deco/linesNewBlanc.png">
    <img id="deco2" alt="deco" src="@/assets/img/deco/linesNewBlanc1.png">
      <div id="contentProjects">
          <div id="navigation">
            <!--<CategoryBar/>-->
            <div class="pages" :class="{ activeCat: this.catSelected == 'All' }" @click="changeCategory('All')">All</div>
            <div class="pages" :class="{ activeCat: this.catSelected == 'Web' }" @click="changeCategory('Web')">Web</div>
            <div class="pages" :class="{ activeCat: this.catSelected == 'Graphisme' }" @click="changeCategory('Graphisme')">Graphisme</div>
            <div class="pages" :class="{ activeCat: this.catSelected == 'Animation' }" @click="changeCategory('Animation')">Animation</div>
            <div class="pages" :class="{ activeCat: this.catSelected == 'Illustration' }" @click="changeCategory('Illustration')">Illustration</div>
            <div class="pages" :class="{ activeCat: this.catSelected == 'Interactivé' }" @click="changeCategory('Interactivé')">Interactivé</div>
            <div class="pages" :class="{ activeCat: this.catSelected == 'Projet3D' }" @click="changeCategory('Projet3D')">3D</div>
            <div class="pages" :class="{ activeCat: this.catSelected == 'Audiovisuel' }" @click="changeCategory('Audiovisuel')">Audiovisuel</div>
            <div class="pages" :class="{ activeCat: this.catSelected == 'Programmation 3D' }" @click="changeCategory('Programmation 3D')">Programmation 3D</div>
          </div>
          <div id="gradientCache"></div>
        <div class="scroll" ref="scrollContener">
          <ProjectItem class="listProjects" v-for="project in selectProject" :key="project.title" :projet="project"/>
        </div>
        <!--<div id="gradientCache2"></div>-->
      </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
import MenuVert from '@/components/MenuVert.vue'
/*import CategoryBar from '@/components/CategoryBar.vue'*/
import projectData from '@/datas/projects'

export default {
  name: 'Projects',
  components: {
    MenuVert,
    ProjectItem/*,
    CategoryBar*/
  },
  mounted() {
    this.getCategory()
    this.catSelected = this.currentCategory
    this.$parent.onResize()
  },
  computed: { // relance fonction que quand il y a une action de l'utilisateur
    selectProject : function() {
      return this.projects.filter(this.verifCategory)
    }
  },
  methods : {
    changeCategory(categorie) {
      this.$refs.scrollContener.scrollTop = 0
      this.$router.replace('/projects/' + categorie)
      this.getCategory()
      this.catSelected = this.currentCategory
    },
    getCategory(){
      if(this.$route.params.catName == 'Illustration'
        || this.$route.params.catName == 'Graphisme'
        || this.$route.params.catName == 'Audiovisuel'
        || this.$route.params.catName == 'Web'
        || this.$route.params.catName == 'Animation'
        || this.$route.params.catName == 'Interactivé'
        || this.$route.params.catName == 'Projet3D'
        || this.$route.params.catName == 'Programmation 3D'
        || this.$route.params.catName == 'All'
      ){
        this.currentCategory = this.$route.params.catName
      } else {
        this.$router.push({name:'Home'})
      }
    },
    verifCategory:
      function (projet) {
        return this.currentCategory == "All" || projet.categories.includes(this.currentCategory)
      }
    },
    data() {
      return {
        currentCategory: "All",
        projects : projectData,
        catSelected : this.getCategory()
    }
  }
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
#contentProjects::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
#contentProjects {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.projects {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #080459;
  width: 100%;
  height: 100%;
}
#deco1 {
  width: 2.3vw;
  position: absolute;
  left: 2%;
  bottom: 0;
}
#deco2 {
  width: 5vw;
  position: absolute;
  right: 2%;
  top: 0;
}
#titleProjects {
  color: #C1272D;
  position: absolute;
  top: 20px;
  margin:0px;
  font-family: "bodoniR";
  font-size: 2.8em;
  z-index: 6;
}
#contentProjects {
  width: 65%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border-radius: 20px;
  margin-top: 120px;
  margin-bottom: 120px;
  background-color:#ffffff78;
}
#gradientCache {
  position: fixed;
  width: 62%;
  height: 9px;
  top: 158px;
  z-index: 4;
  background: linear-gradient(#7C7AA7, rgba(0,0,0,0));
}
/*#gradientCache2 {
  position: fixed;
  width: 62%;
  height: 9px;
  top: 692.5px;
  z-index: 4;
  background: linear-gradient( rgba(0,0,0,0), #7C7AA7);
}*/
.contactIcon {
  position: absolute;
  left: 6.2%;
  top: 4%;
}
.aboutIcon {
  position: absolute;
  left: 10%;
  top: 4%;
}
.homeIcon {
  position: absolute;
  left: 2%;
  top: 4%;
}
.listProjects {
  margin: 5px 3% 20px 3%;
  position: relative;
  z-index: 2;
}
.scroll {
  overflow: auto !important;
  max-height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  position: relative;
  width: 100%;
  margin-top: 39px;
}
#navigation {
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-flow: row wrap;
  width: 71%;
  z-index: 7;
}
.pages {
  font-size: 0.9em;
  margin: -2% 0% 3% 1%;
  padding: 0.8% 1%;
  color: white;
  height: fit-content;
  background-color:  #C1272D;
  border-radius: 5px;
  text-align: center;
  transition: padding 0.5s;
}
.activeCat {
  /*background-color: #950005 !important;*/
  box-shadow: 2px 2px 0px rgba(255, 255, 255, 0.8);
}
.footer { display: none; }
.pages:hover {
  padding: 1% 1.2%;
}

/* RESPONSIVE */
@media (max-width: 1222px){
  .scroll { 
    margin-top: 63px; 
    max-height: calc(100vh - 200px);
  }
  #gradientCache { top: 182px; }
  /*#gradientCache2 { top: 696.5px; }*/
}
@media (max-width: 980px){
  /*#gradientCache2 { top: 696.2px; width: 60%;}*/
}
@media (max-width: 900px){
  #contentProjects { width: 80%; }
  #deco1 { width: 3.5vw; }
  #deco2 { width: 8vw; }
  #titleProjects { font-size: 2.5em; top: 32px; }
  #gradientCache { width: 75%; }
  /*#gradientCache2 { width: 75%;}*/
}
@media (max-width: 628px){
  .scroll { 
    margin-top: 78px; 
    max-height: calc(100vh - 220px);
  }
  .pages { font-size: 0.85em; }
  #deco1 { width: 4.1vw; }
  #deco2 { width: 9vw; }
  #titleProjects { font-size: 2.4em; top: 55px; }
  #navigation { width: 88%; }
  #gradientCache { top: 198px; }
  /*#gradientCache2 { top: 691.5px; }*/
}
@media (max-width: 376px){
  #titleProjects { top: 37px; }
  #contentProjects { margin-top: 100px; }
  #gradientCache { top: 194px; }
  /*#gradientCache2 { top: 672.5px; width: 69%; }*/
  .scroll {
    margin-top: 94px; 
    max-height: calc(100vh - 235px);
  }
}
</style>

