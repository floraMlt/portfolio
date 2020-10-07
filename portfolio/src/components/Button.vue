<template>
  <div class="button">
    <button v-on:click="go" class="decoButton">C'est parti !</button>
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
.decoButton {
  border: #C1272D 0.3px solid;
  background-color: white;
  color: #1B1464;
  border-radius: 50px;
  font-family: "BodoniI";
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
}

</style>