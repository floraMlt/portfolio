<template>
  <div class="categoryInstal">
    <img class="lettrine" src="../assets/img/1lettrine.png" alt="lettrine" v-on:click="go">
    <p class="txt">nstallations interactives</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryInstal',
  methods: {
    go(){
      this.$router.push('projects_installation');
    }
  }
}
</script>

<style scoped>
/*.categoryInstal {
    display: flex;
    align-items: flex-start;
}
.txt {
    font-family: "bodoniR";
    font-weight: 300;
    font-size: 3em;
    color: #ABB7D1;
    margin-left: -2%;
    position: absolute;
    margin: 0;
    margin-left: 8%;
}
.lettrine {
    width: 8%;
    height: auto;
    margin-bottom: 0.8%;
}*/
</style>