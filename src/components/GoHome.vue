<template>
  <div class="goHome" @click="goHome">
    <img class="accueilPicto" alt="Picto Home" src="@/assets/img/menu/homePicto.png">
    <p class="accueil">Accueil</p>
  </div>
</template>

<script>

export default {
  name: 'GoHome',
  props: {
    wait: { type:Boolean }
  },
  methods:{
    goHome(){
      if (this.wait===false){
        this.home()
      } else if (this.$parent.$options.name === 'About' && window.innerWidth <= 680) {
        this.home()
      } else if (this.$parent.$options.name === 'Contact' && window.innerWidth <= 1100) {
        this.home()
      } else {
        setTimeout(this.home, 1600)
      }
    },
    home() {
      this.$router.push('/Home')
    }
  }
}
</script>

<style scoped>
.accueilPicto {
  color: white;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.accueil {
  font-size: 1em;
  font-family: 'Roboto';
  font-weight: lighter;
  color: white;
  width: max-content;
}
.goHome {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  opacity: 0.8;
}
.goHome:hover {
  opacity: 1;
  cursor: pointer;
}

/* RESPONSIVE */
@media (max-width: 1100px){
  .accueilPicto { width: 77%; }
  .accueil { font-size: 0.9em; }
}
@media (max-width: 780px){
  .accueilPicto { width: 90%; }
  .accueil { font-size: 0.85em; }
}
@media (max-width: 700px){
  .accueilPicto { width: 110%; }
}
@media (max-width: 510px){
  .accueilPicto { width: 140%; }
}
@media (max-width: 420px){
  .accueilPicto { width: 130%; }
  .accueil { font-size: 0.8em; }
}
</style>