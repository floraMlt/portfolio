<template>
  <div class="buttonSeeProject">
    <a :href="this.link" target="_blank"> 
      <button type="button" id="decoButton">Voir le projet</button>
    </a>
  </div>
</template>

<script>

export default {
  name: 'ButtonSeeProject',
  props: {
    linkP:{type:String, required:true}
  },
  data(){
    return{
      link:this.linkP
    }
  }
}
</script>

<style scoped>
#decoButton {
  border: #C1272D 0.5px solid;
  background-color: white;
  color: #1B1464;
  border-radius: 40px;
  font-family: "BodoniI";
  font-size: 1.3em;
  padding: 2% 5%;
  width: 110%;
}
.buttonSeeProject {
  display: flex;
  justify-content: center;
}

</style>