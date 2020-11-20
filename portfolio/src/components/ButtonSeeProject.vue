<template>
  <div class="buttonSeeProject">
    <a v-if="this.link" :href="this.link" target="_blank"> 
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
      link:this.linkP,
      isThereLink : false
    }
  },
  mounted (){
    if(this.link == "") { this.isThereLink = false; }
    else { this.isThereLink = true; }
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
  padding: 2.5% 5.5%;
  width: 111%;
  transition: background-color 0.5s color 0.5s;
}
.buttonSeeProject {
  display: flex;
  justify-content: center;
}
#decoButton:hover {
  color: #C1272D;
}
#decoButton:active {
  outline-style:none;
}

/* RESPONSIVE */
@media (max-width: 1000px){
  #decoButton { padding: 3% 6%; margin-bottom: 10px;}
}
</style>