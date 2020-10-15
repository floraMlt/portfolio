<template>
  <div class="projects">
    <p id="titleProjects"> {{this.currentCategory}} </p>
      <div id="contentProjects">
          <div id="navigation">
            <!--<CategoryBar :currentCat="this.currentCategory"/>-->
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
        <!-- on peut éviter de mettre le v-for sur un div et le mettre direct sur projectItem, voir si ça casse pas mon css-->
        <!--<ProjectItem :title="project.title" :img="project.img" :resume="project.resume" :categories="project.categories"/>-->
        <div class="scroll">
          <ProjectItem class="listProjects"  v-for="project in selectProject" :key="project.title" :projet="project"/>
        </div>
      </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
/*import CategoryBar from '@/components/CategoryBar.vue'*/
import projectData from '@/datas/projects'

export default {
  name: 'Projects',
  components: {
    ProjectItem/*,
    CategoryBar*/
  },
  mounted() {
    this.getCategory()
  },
  computed: { // relance fonction que quand il y a une action de l'utilisateur
    selectProject : function() {
      return this.projects.filter(this.verifCategory)
    }
  },
  methods : {
    changeCategory(categorie) {
        this.$router.replace('/projects/' + categorie)
        this.getCategory()
    },
    getCategory(){
      this.currentCategory = this.$route.params.catName
    },
    verifCategory:
      function (projet) {
        return this.currentCategory == "All" || projet.categories.includes(this.currentCategory)
      }
    },
    data() {
      return {
        currentCategory: "All",
        projects : projectData
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
  background-color:#1B1464;
  width: 100%;
  height: 100%;
}
#titleProjects {
  color: #C1272D;
  position: absolute;
    /*position: fixed;*/
  top: -4%;
  font-family: "bodoniR";
  font-size: 2.8em;
  z-index: 6;
  /*
  background-color: white;
    width: 60%;
    text-align: center;
    z-index: 5;
  */
}
#contentProjects {
  /*position: absolute;*/
  width: 70%;
  height: fit-content;
  /*overflow: auto;*/
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  justify-content: center;
  border-radius: 20px;
  margin-top: 8%;
  margin-bottom: 8%;
  background-color: white;
}
.listProjects {
  margin: 1% 3%;
  position: relative;
  z-index: 2;
}
.scroll {
  overflow: auto !important;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  position: relative;
  width: 100%;
  margin-top: 4%;
}
#navigation {
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  /*border:#1B1464 0.5px solid;
  border-radius: 20px;*/
  /*top: 13%;*/
  /*height: 100%;*/
  width: 71%;
  z-index: 7;
}
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
/*#rect {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
  min-height: 100%;
}*/
</style>

