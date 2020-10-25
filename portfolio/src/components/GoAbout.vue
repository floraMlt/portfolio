<template>
  <div class="goAbout">
    <i class="address card outline icon aboutPicto" @click="goAbout"> <p class="about">A propos</p></i>
  </div>
</template>

<script>

export default {
  name: 'GoAbout',
  methods:{
    goAbout(){
      this.$router.push('/About')
    }
  }
}
</script>

<style scoped>
.aboutPicto {
  color: white;
  font-size: 1.4em;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.aboutPicto:hover {
  opacity: 1;
}
.about {
  font-size: 0.7em;
  font-family: 'Roboto';
  font-weight: lighter;
  color: white;
}
</style>