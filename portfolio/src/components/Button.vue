<template>
  <div class="button">
    <button v-on:click="go" id="decoButton">C'est parti !</button>
  </div>
</template>

<script>

export default {
  name: 'Button',
  methods:{
    go() {
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
}
.button {
  display: flex;
  justify-content: center;
}
/* RESPONSIVE */
@media (max-width: 508px){
  #decoButton {
    font-size: 1.2em;
  }
}
</style>