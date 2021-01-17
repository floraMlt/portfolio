<template>
  <div class="button">
    <button v-on:click="go" id="decoButton">C'est parti !</button>
  </div>
</template>

<script>

export default {
  name: 'Button',
  props: {
    wait:{type:Boolean}
  },
  methods:{
    go() {
      if(this.wait===false){
        this.projects()
      } else {
        setTimeout(this.projects, 1800)
      }
    },
    projects() {
      this.$router.push({name:'ProjectCategories'})
    }
  }
}
</script>

<style scoped>
#decoButton {
  border: #C1272D 0.5px solid;
  background-color: white;
  color: #1B1464;
  border-radius: 50px;
  font-family: "BodoniI";
  font-size: 1.3em;
  padding: 2% 5%;
  /*transition: padding 0.5s, font-size 0.5s;*/
  transition: background-color 0.5s, color 0.5s;
}
.button {
  display: flex;
  justify-content: center;
}
#decoButton:hover {
  /*font-size: 1.4em;
  padding: 2.8% 5.8%;*/
  background-color: #C1272D ;
  color: white;
}
#decoButton:active {
  outline-style:none;
}
/* RESPONSIVE */
@media (max-width: 508px){
  #decoButton {
    font-size: 1.2em;
  }
}
</style>