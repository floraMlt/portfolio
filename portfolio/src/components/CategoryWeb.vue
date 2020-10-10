<template>
  <div class="categoryWeb">
    <img class="lettrine" src="../assets/img/8lettrine.png" alt="lettrine" v-on:click="go">
    <p class="txt">eb</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryWeb',
  methods: {
    go(){
      this.$router.push('projects_web');
    }
  }
}
</script>

<style scoped>
/*.categoryWeb {
    display: flex;
    align-items: flex-start;
}
.txt {
    font-family: "bodoniR";
    font-weight: 300;
    font-size: 3em;
    color: #B68FB1;
    margin-left: -2%;
    position: absolute;
    margin: 0;
    margin-left: 7%;
}
.lettrine {
    width: 8%;
    height: auto;
    margin-bottom: 0.8%;
}*/
</style>