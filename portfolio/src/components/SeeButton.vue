<template>
  <div class="button">
    <button v-on:click="see" id="decoButton">Découvrir</button>
  </div>
</template>

<script>

export default {
  name: 'Button',
  props: {
    titleProject:{type:String, required:true},
    catProject:{type:String, required:true}
  },
  data() {
    return {
      title: this.titleProject,
      cat: this.catProject
    }
  },
  methods:{
    see() {
      this.$router.push({name:'projects/' + this.title})
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
  width: 70%;
}
.button {
  display: flex;
  justify-content: center;
}

</style>