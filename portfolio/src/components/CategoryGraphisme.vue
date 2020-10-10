<template>
  <div class="categoryGraphisme">
    <img class="lettrine" src="../assets/img/7lettrine.png" alt="lettrine" v-on:click="go">
    <p class="txt">esign graphique</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryGraphisme',
  methods: {
    go(){
      this.$router.push('projects_graphisme');
    }
  }
}
</script>

<style scoped>
/*.categoryGraphisme {
    display: flex;
    align-items: flex-start;
}
.txt {
    font-family: "bodoniR";
    font-weight: 300;
    font-size: 3em;
    color: #F19DC0;
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