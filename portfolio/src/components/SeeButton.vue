<template>
  <div class="button">
    <button v-on:click="callback" id="decoButton">Découvrir</button>
  </div>
</template>

<script>

export default {
  name: 'Button',
  props: {
    callback: {type:Function, required:true}
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
  width: 70%;
}
.button {
  display: flex;
  justify-content: center;
}

/* REPONSIVE */
@media (max-width: 628px){
  #decoButton {
    width: 61%;
    padding: 1.5% 3%;
    font-size: 1.2em;
  }
}
</style>