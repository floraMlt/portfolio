<template>
  <div class="goAbout" @click="goAbout">
    <img class="aboutPicto" alt="Picto About" src="@/assets/img/menu/aboutPicto.png">
    <p class="about">A propos</p>
  </div>
</template>

<script>

export default {
  name: 'GoAbout',
  props: {
    wait:{type:Boolean}
  },
  methods:{
    goAbout(){
      if(this.wait===false){
        this.about()
      } else {
        setTimeout(this.about, 1600)
      }
    },
    about() {
      this.$router.push('/About')
    }
  }
}
</script>

<style scoped>
.aboutPicto {
  color: white;
  width: 50%;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.aboutPicto:hover {
  opacity: 1;
}
.about {
  font-size: 1em;
  font-family: 'Roboto';
  font-weight: lighter;
  color: white;
  width: max-content;
}
.goAbout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
}

/* RESPONSIVE */
@media (max-width: 1100px){
  .aboutPicto { width: 77%; }
  .about { font-size: 0.9em; }
}
@media (max-width: 700px){
  .aboutPicto { width: 110%; }
}
@media (max-width: 510px){
  .aboutPicto { width: 140%; }
}
@media (max-width: 420px){
  .aboutPicto { width: 130%; }
  .about { font-size: 0.8em; }
}
</style>