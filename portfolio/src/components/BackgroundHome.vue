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

/* RESPONSIVE */
@media (max-width: 980px){
  #me {
    width: 28vw;
    margin-right: 15%;
  }
  #txt {
    width: 144%;
  }
}
@media (max-width: 820px){
  #me {
    width: 28vw;
    margin-right: 15%;
  }
}
@media (max-width: 720px){
  #lines {
    max-height: 80vh;
    margin-top: 145px;
  }
  #me {
    width: 28vw;
    margin-right: -17%;
    margin-bottom: 15px;
  }
}
@media (max-width: 545px){
  #me {
    width: 30vw;
  }
}
@media (max-width: 508px){
  #lines {
    max-height: 75vh;
    margin-top: 182px;
  }
  #me {
    width: 36vw;
    margin-bottom: 25px;
  }
}
@media (max-width: 385px){
  #lines {
    max-height: 68vh;
    margin-top: 231px;
    margin-left: -4.5%;
  }
  #linesB {
    display: none;
  }
  #me {
    width: 42vw;
    margin-bottom: 26px;
    margin-right: 25%;
  }
}
</style>