<template>
  <div class="goHome" @click="goHome">
    <img class="accueilPicto" alt="Picto Home" src="@/assets/img/menu/homePicto.png">
    <p class="accueil">Accueil</p>
  </div>
</template>

<script>

export default {
  name: 'GoHome',
  methods:{
    goHome(){
      this.$router.push('/Home')
    }
  }
}
</script>

<style scoped>
.accueilPicto {
  color: white;
  width: 50%;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.accueilPicto:hover {
  opacity: 1;
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
}
</style>