<template>
  <div class="categoryAudio">
    <img class="lettrine" src="../assets/img/Audio.png" alt="Audiovisuel" v-on:click="go">
    <p class="txt">udiovisuel</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryAudio',
  methods: {
    go(){
      this.$router.push('projects_audiovisuel');
    }
  }
}
</script>

<style scoped>
/*.categoryAudio {
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
    margin-left: 8%;
}
.lettrine {
    width: 8%;
    height: auto;
    margin-bottom: 0.8%;
}*/
</style>