<template>
  <div class="projects">
    <GoHome class="homeIcon"/>
    <GoContact class="contactIcon"/>
    <GoAbout class="aboutIcon"/>
    <p id="titleProjects"> {{this.currentCategory}} </p>
    <img id="deco1" alt="deco" src="@/assets/img/deco/lines4.png">
    <img id="deco2" alt="deco" src="@/assets/img/deco/lines6.png">
      <div id="contentProjects">
          <div id="navigation">
            <!--<CategoryBar/>-->
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
          <ProjectItem class="listProjects" v-for="project in selectProject" :key="project.title" :projet="project"/>
        </div>
      </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
import GoHome from '@/components/GoHome.vue'
import GoContact from '@/components/GoContact.vue'
import GoAbout from '@/components/GoAbout.vue'
/*import CategoryBar from '@/components/CategoryBar.vue'*/
import projectData from '@/datas/projects'

export default {
  name: 'Projects',
  components: {
    GoHome,
    GoContact,
    GoAbout,
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
      if(this.$route.params.catName == 'Illustration'
        || this.$route.params.catName == 'Graphisme'
        || this.$route.params.catName == 'Audiovisuel'
        || this.$route.params.catName == 'Web'
        || this.$route.params.catName == 'Animation'
        || this.$route.params.catName == 'InstallationInteractive'
        || this.$route.params.catName == 'Projet3D'
        || this.$route.params.catName == 'Développement'
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
  background-color: #1b155f;
  width: 100%;
  height: 100%;
}
#deco1 {
  width: 2.3vw;
  position: absolute;
  left: 2%;
  bottom: 0%;
}
#deco2 {
  width: 5vw;
  position: absolute;
  right: 2%;
  top: 0%;
}
#titleProjects {
  color: #C1272D;
  position: absolute;
  top: 3vh;
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
  margin-top: 8%;
  margin-bottom: 8%;
  background-color:#ffffff78;
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
  margin: 1% 3%;
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
  margin-top: 4%;
}
#navigation {
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: flex-start;
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
</style>

