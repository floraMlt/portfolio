<!-- Button used in the home page to access to the list of categories -->
<template>
  <div class="button">
    <button v-on:click="go" id="decoButton">C'est parti !</button>
  </div>
</template>

<script>

export default {
  name: 'Button',
  props: {
    wait: { type:Boolean }
  },
  methods:{
    /* Check if there is a line animation in this page, if yes, 
      put a delay before moving the user to an other page, displaying the entire line animation */
    go() {
      if(this.wait === false){
        this.projects()
      } else if (window.innerWidth <= 980) {
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
  transition: background-color 0.5s, color 0.5s;
}
.button {
  display: flex;
  justify-content: center;
}
#decoButton:hover {
  background-color: #C1272D ;
  color: white;
  cursor: pointer;
}
#decoButton:active {
  outline-style: none;
}
#decoButton:focus {
  outline: none;
}

/* RESPONSIVE */
@media (max-width: 508px){
  #decoButton {
    font-size: 1.2em;
  }
}
</style>