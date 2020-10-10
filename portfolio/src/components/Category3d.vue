<template>
  <div class="category3d">
    <img class="img" src="../assets/img/cat3D.png" alt="3D" v-on:click="go">
  </div>
</template>

<script>
export default {
  name: 'Category3d',
  methods: {
    go(){
      this.$router.push('projects_3d');
    }
  }
}
</script>

<style scoped>
/*.category3d {
    display: flex;
    align-items: flex-start;
}
.txt {
    font-family: "bodoniR";
    font-weight: 300;
    font-size: 3em;
    color: #467290;
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