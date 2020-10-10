<template>
  <div class="categoryAnim">
    <img class="lettrine" src="../assets/img/catAnim.png" alt="Animation" v-on:click="go">
  </div>
</template>

<script>
export default {
  name: 'CategoryAnim',
  methods: {
    go(){
      this.$router.push('projects_anim');
    }
  }
}
</script>

<style scoped>
/*.categoryAnim {
    display: flex;
    align-items: flex-start;
}
.txt {
    font-family: "bodoniR";
    font-weight: 300;
    font-size: 3em;
    color: #467290;
    margin-left: 2%;
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