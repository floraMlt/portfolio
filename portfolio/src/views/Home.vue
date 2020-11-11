<template>
  <div class="home">
      <div id="blocTxt">
        <div id="title">
          <h1>Flora Mallet</h1>
          <img class="point" src="../assets/img/deco/point.png" alt="point bleu">
        </div>
        <div id="txtButton">
            <p id="txt">
                Bonjour ! Je m'appelle Flora et je suis actuellement en dernière année à l'école d'ingénieur IMAC (Image Multimédia Audiovisuel Communication) afin de devenir <span class="bold">Ingénieure Créative !</span> Je suis passionnée par  
                le multimédia et tout particulièrement par le web, qui me permet de mêler programmation et créativité. <span class="bold">Je cherche un stage de 6 mois en tant que développeuse web (front, back, fullstack) à partir d'avril 2021. </span><br> <br>Prêt.e.s à découvrir mon univers ?
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
  },
  mounted() {
    this.$parent.onResize()
  }
  /*,
  methods : {
    onResize() {
      document.querySelector('body').style.overflow = "hidden"
      document.querySelector('html').style.overflow = "hidden"
      document.querySelector('#app').style.overflow = "hidden"
    }
  },
  mounted() {
    this.onResize()
  }*/
}
</script>

<style scoped>
h1 {
  font-family: "BodoniB";
  font-size: 4em;
  color: #C1272D;
  width: 320px;
  margin-bottom: 10px;
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
  top: 170px;
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
  margin-top: 20px;
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
  margin-bottom:40px;
}
.bold {
  font-weight: bolder;
  color: #1b1464;
}

/* RESPONSIVE */
@media (max-width: 1200px){
  #txt { width: 115%; }
}
@media (max-width: 980px){
  #txt { width: 137%; }
  #blocTxt { right: -5%; top: 137px; }
}
@media (max-width: 820px){
 #blocTxt { right: 6%; top: 54px; }
}
@media (max-width: 720px){
  .point { margin-right: -3%; width: 4%; }
  #txt { width: 177%; }
  #blocTxt {
    right: 14%;
    width: 800px;
    top: 86px;
  }
  #buttonGo { margin-left: 64%; }
  #title { margin-right: 0; }
  #buttonGo { margin-left: 19%; width: 136%; }
}
@media (max-width: 545px){
  h1 { font-size: 3.4em; justify-content: flex-start; }
  .point { width: 3.5%; margin-right: 7%; }
  #txt { font-size: 0.95em; }
  #blocTxt { right: 15%; top: 101px; }
}
@media (max-width: 508px){
  h1 { font-size: 3.2em; }
  #txt { font-size: 0.91em; }
  #decoButton { font-size: 1.2em; }
  #blocTxt { right: 12%; top: 101px }
  .point { width: 3.2%; margin-right: 0%; }
}
@media (max-width: 442px){
  h1 { font-size: 2.9em; }
}
@media (max-width: 400px){
  .point { width: 3%; margin-right: -4%; }
  #txt { font-size: 0.9em; }
}
@media (max-width: 385px){
  .point { display: none; }
  #blocTxt {
    top: 100px;
    left: 16%;
    align-items: flex-start;
    justify-content: initial;
  }
  #txt { width: 216%; }
}
</style>