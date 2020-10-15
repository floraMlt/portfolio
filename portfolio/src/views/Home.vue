<template>
  <div class="home">
      <div id="blocTxt">
        <div id="title">
          <h1>Flora Mallet</h1>
          <img class="point" src="../assets/img/point.png" alt="point bleu">
        </div>
        <div id="txtButton">
            <p id="txt">
                Etudiante à l'école d'ingénieurs IMAC (Image Multimédia Audiovisuel Communication). Communication visuelle, Programmation, Web design, Web
                développement, Design graphique print et numérique, Installations interactives, Jeux-vidéos. <br> <br>Prêt.e.s à découvrir mon univers ?
            </p>
            <Button id="buttonGo"/>
        </div>
      </div>
      <BackgroundHome id="background"/>
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
    width: 40%;
    margin-bottom: 1%;
    display: flex;
    justify-content: flex-end;
}
#blocTxt {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: flex-end;
  max-width: 60%;
  right: -8%;
  top: 20%;
}
#txtButton {
    width: 50%;
    margin: 0;
    margin-left: 5%;
}
#txt {
  text-align: justify;
}
#buttonGo {
  width: 50%;
  margin-left: 25%;
  margin-top: 5%;
}
#title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 11%;
}
.point {
margin-left: 2%;
margin-right: 10%;
}
</style>

<style >
body, html {
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
</style>