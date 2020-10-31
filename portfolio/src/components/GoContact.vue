<template>
  <div class="goContact" @click="goContact">
    <img class="atPicto" alt="Picto Contact" src="@/assets/img/menu/contactPicto.png">
    <p class="contact">Contacts</p>
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
  width: 50%;
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
  font-size: 1em;
  font-family: 'Roboto';
  font-weight: lighter;
  color: white;
  width: max-content;
}
.goContact {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
}
</style>