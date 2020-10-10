<template>
  <div class="categoryIllu">
    <img class="lettrine" src="../assets/img/3lettrine.png" alt="lettrine" v-on:click="go">
    <p class="txt">llustration</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryIllu',
  methods: {
    go(){
      this.$router.push('projects_illu');
    }
  }
}
</script>

<style scoped>
/*.categoryIllu {
    display: flex;
    align-items: flex-start;
}
.txt {
    font-family: "bodoniR";
    font-weight: 300;
    font-size: 3em;
    color: #C0D4E4;
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