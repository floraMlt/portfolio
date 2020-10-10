<template>
  <div class="categoryDevJv">
    <img class="lettrine" src="../assets/img/6lettrine.png" alt="lettrine" v-on:click="go">
    <p class="txt">éveloppement et jeux-vidéos</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryDevJv',
  methods: {
    go(){
      this.$router.push('projects_dev-jeux-videos');
    }
  }
}
</script>

<style scoped>
/*.categoryDevJv {
    display: flex;
    align-items: flex-start;
}
.txt {
    font-family: "bodoniR";
    font-weight: 300;
    font-size: 3em;
    color: #EFE7D1;
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