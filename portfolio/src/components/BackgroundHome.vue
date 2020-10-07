<template>
  <div class="bgHome">
      <div class="images">
        <img class="lines" src="../assets/img/lines.png" alt="illustration2">
        <img class="me" src="../assets/img/moi.png" alt="illustration de Flora Mallet">
        <img class="lines2" src="../assets/img/lines2.png" alt="illustration3">
      </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundHome'
}
</script>

<style scoped>
.images {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}
.moi {
    width: 20%;
    height:auto;
}
.lines {
    width: 10%;
    height: auto;
}
.lines2 {
    width: 20%;
    height: 20%;
}
</style>