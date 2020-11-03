<template>
  <div class="goAbout">
  <!--<div class="goAbout" @click="goAbout">-->
    <img class="aboutPicto" alt="Picto About" src="@/assets/img/menu/aboutPicto.png">
    <!--<img class="aboutPicto" alt="Picto About" :src="this.activeSrc" @onmouseover="changePicto">-->
    <p class="about">A propos</p>
  </div>
</template>

<script>

export default {
  name: 'GoAbout',
  /*data(){
    return {
      srcPictoW : require('@/assets/img/menu/aboutPicto.png'),
      srcPictoR : require('@/assets/img/menu/aboutPictoR.png'),
      activeSrc : null
    }
  },
  mounted () {
    this.activeSrc = this.srcPictoW
  },*/
  methods:{
    goAbout(){
      this.$router.push('/About')
    }/*,
    changePicto(){
      console.log("src" + this.activeSrc)
      if(this.activeSrc == this.srcPictoW){
        console.log("white src 1 : "+this.activeSrc)
        this.activeSrc = this.srcPictoR
        console.log("white src 2 : "+this.activeSrc)
      } else if(this.activeSrc == this.srcPictoR){
        this.activeSrc = this.srcPictoW
        console.log("red src : "+this.activeSrc)
      }
    }*/
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
</style>