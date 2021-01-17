<template>
  <div class="goContact" @click="goContact">
    <img class="atPicto" alt="Picto Contact" src="@/assets/img/menu/contactPicto.png">
    <p class="contact">Contacts</p>
  </div>
</template>

<script>

export default {
  name: 'GoContact',
  props: {
    wait:{type:Boolean}
  },
  methods:{
    goContact(){
      if(this.wait===false){
        this.contact()
      } else {
        setTimeout(this.contact, 1600)
      }
    },
    contact() {
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

/* RESPONSIVE */
@media (max-width: 1100px){
  .atPicto { width: 77%; }
  .contact { font-size: 0.9em; }
}
@media (max-width: 780px){
  .atPicto { width: 90%; }
  .contact { font-size: 0.85em; }
}
@media (max-width: 700px){
  .atPicto { width: 110%; }
}
@media (max-width: 510px){
  .atPicto { width: 140%; }
}
@media (max-width: 420px){
  .atPicto { width: 130%; }
  .contact { font-size: 0.8em; }
}
</style>