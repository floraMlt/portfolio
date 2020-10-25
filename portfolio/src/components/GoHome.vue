<template>
  <div class="goHome">
    <i class="home icon accueilPicto" @click="goHome"> <p class="accueil">Home</p></i>
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
  font-size: 1.4em;
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
  font-size: 0.7em;
  font-family: 'Roboto';
  font-weight: lighter;
  color: white;
}
</style>