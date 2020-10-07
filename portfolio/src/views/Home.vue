<template>
  <div class="home">
      <!--<div class="blocTxt">
        <h1>Flora Mallet</h1>
        <div class="txtButton">
            <p class="txt">
                Etudiante à l'école d'ingénieurs IMAC (Image Multimédia Audiovisuel Communication). Communication visuelle, Programmation, Web design, Web
                développement, Design graphique print et numérique, Installations interactives, Jeux-vidéos. <br> Prêt.e.s à découvrir mon univers ?
            </p>
            <Button class="buttonGo"/>
        </div>
      </div>-->
      <BackgroundHome class="background"/>
  </div>
</template>

<script>
//import Button from '@/components/Button.vue'
import BackgroundHome from '@/components/BackgroundHome.vue'

export default {
  name: 'Home',
  components: {
   // Button,
    BackgroundHome
  }
}
</script>

<style scoped>
/*h1 {
    font-family: "BodoniB";
    font-size: 4em;
    color: #C1272D;
    width: 40%;
}
.blocTxt {
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  position: absolute;
  max-width: 60%;
}
.txtButton {
    width: 50%;
    justify-content: center;
    margin: 0;
}*/
.home {
  display: flex;
  flex-direction: row;
}
</style>