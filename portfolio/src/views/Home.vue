<template>
  <div class="home">
      <h1>Flora Mallet</h1>
      <div class="txtButton">
          <p class="txt">
              Etudiante à l'école d'ingénieurs IMAC (Image Multimédia Audiovisuel Communication). Communication visuelle, Programmation, Web design, Web
              développement, Design graphique print et numérique, Installations interactives, Jeux-vidéos. <br> Prêt.e.s à découvrir mon univers ?
          </p>
           <Button class="buttonGo"/>
      </div>
      <BackgroundHome class="background"/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import BackgroundHome from '@/components/BackgroundHome.vue'

export default {
  name: 'Home',
  components: {
    Button,
    BackgroundHome
  }
}
</script>

<style scoped>
h1 {
    font-family: "BodoniB";
    font-size: 4em;
    color: #C1272D;
}
.txtButton {
    display: flex;
    flex-direction: column;
    width: 50%;
}
</style>