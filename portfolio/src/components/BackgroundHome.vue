<template>
  <div class="images">
    <img class="lines" src="../assets/img/lines.png" alt="illustration2">
    <img class="me" src="../assets/img/moiR.png" alt="illustration de Flora Mallet">
    <img class="linesB" src="../assets/img/lines2Res.png" alt="illustration3">
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
  justify-content: space-between;
  align-items: flex-end;
  margin: 0;
  width: 100%;
}
.me {
  margin-right: 30%;
}
.lines {
  max-height: 100vh;
  width: auto;
}
.linesB {
  margin-bottom: 2%;
  margin-right: 2%;
}
</style>