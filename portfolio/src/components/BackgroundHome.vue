<template>
  <div class="images">
    <img id="lines" src="../assets/img/deco/lines.png" alt="illustration2">
    <img id="me" src="../assets/img/deco/meNew.png" alt="illustration de Flora Mallet">
    <img id="linesB" src="../assets/img/deco/lines7.png" alt="illustration3">
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
#me {
  margin-right: 25%;
  /*height: 65vh;*/
  width: 23vw;
}
#lines {
  max-height: 100vh;
  width: auto;
}
#linesB {
  margin-bottom: 2%;
  margin-right: 2%;
  width: 25vw;
}
</style>