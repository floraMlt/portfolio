<template>
  <div class="goContact">
    <i class="at icon atPicto" @click="goContact"> <p class="contact">Contact</p></i>
  </div>
</template>

<script>

export default {
  name: 'GoContact',
  methods:{
    goContact(){
      this.$router.push('/Contact')
    }
  }
}
</script>

<style scoped>
.atPicto {
  color: white;
  font-size: 1.4em;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.atPicto:hover {
  opacity: 1;
}
.contact {
  font-size: 0.7em;
  font-family: 'Roboto';
  font-weight: lighter;
  color: white;
}
</style>