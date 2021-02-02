<!-- List of projects sorted by category -->
<template>
  <div class="projects">
    <MenuVert/>
    <p id="titleProjects"> {{this.currentCategory}} </p>
    <img id="deco1" alt="deco" src="@/assets/img/deco/linesNewBlanc.png">
    <img id="deco2" alt="deco" src="@/assets/img/deco/linesNewBlanc1.png">
    <div id="contentProjects">
      <div id="navigation">
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
    </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
import MenuVert from '@/components/MenuVert.vue'
import projectData from '@/datas/projects'

export default {
  name: 'Projects',
  components: {
    MenuVert,
    ProjectItem
  },
  mounted() {
    // Get the current category (category selected on the previous page)
    this.getCategory()
    this.catSelected = this.currentCategory
    this.$parent.onResize()
  },
  computed: {
    // Return projects corresponding to the current category
    selectProject : function() {
      return this.projects.filter(this.verifCategory)
    }
  },
  methods : {
    /* 
    Change url of the page with the name of the selected category, without reload the page.
    Change current category with the selected category 
    */
    changeCategory(categorie) {
      this.$refs.scrollContener.scrollTop = 0
      if(this.currentCategory !== categorie) {
        this.$router.replace('/projects/' + categorie)
      }
      this.getCategory()
      this.catSelected = this.currentCategory
    },
    // Get the selected category thanks to the url, if the category is not defined, push to the Home page
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
    // Method verifying the categories of one project, return true or false.
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
.pages {
  font-size: 0.9em;
  margin: -19px 0% 23px 1%;
  padding: 0.8% 1%;
  color: white;
  height: fit-content;
  background-color:  #C1272D;
  border-radius: 5px;
  text-align: center;
  transition: padding 0.5s;
}
.activeCat {
  box-shadow: 2px 2px 0px rgba(255, 255, 255, 0.8);
  padding: 1% 1.2%;
}
.footer { display: none; }
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
#navigation {
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-flow: row wrap;
  width: 71%;
  z-index: 7;
}
.pages:hover {
  padding: 1% 1.2%;
  cursor: pointer;
}

/* RESPONSIVE */
@media (max-width: 1222px){
  
}
@media (max-width: 1198px){
  #navigation { width: 62%; }
}
@media (max-width: 1198px){
  .scroll { margin-top: 63px; max-height: calc(100vh - 200px); }
}
@media (max-width: 900px){
  #contentProjects { width: 80%; }
  #deco1 { width: 3.5vw; }
  #deco2 { width: 8vw; }
  #titleProjects { font-size: 2.5em; top: 32px; }
  #gradientCache { width: 75%; }
}
@media (max-width: 628px){
  .scroll { 
    margin-top: 63px; 
    max-height: calc(100vh - 220px);
  }
  .pages { font-size: 0.85em; margin: -13px 0% 23px 1%; }
  #deco1 { width: 4.1vw; }
  #deco2 { width: 9vw; }
  #titleProjects { font-size: 2.4em; }
  #navigation { width: 75%; }
  #gradientCache { top: 188px; }
}
@media (max-width: 510px){
  #navigation { width: 72%; }
}
@media (max-width: 395px){
  #contentProjects { margin-top: 100px; }
  #gradientCache { top: 194px; }
  .scroll {
    margin-top: 94px; 
    max-height: calc(100vh - 235px);
  }
}
</style>