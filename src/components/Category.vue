<!-- Component for one category in the category list -->
<template>
  <div class="category">
    <img class="imgCat" :id="this.idImg" :src="this.srcImg" :alt="this.catName" v-on:click="go">
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
      imgCat:{type:String, required:true},
      imgSrc:{type:String, required:true},
      imgId:{type:String, required:true}
  },
  data() {
    return {
      catName : this.imgCat,
      srcImg : this.imgSrc,
      idImg : this.imgId
    }
  },
  methods: {
    go(){
      this.$router.push('/projects/' + this.catName);
    }
  }
}
</script>

<style scoped>
.imgCat { height: 16vh; }
.imgCat:hover { cursor: pointer; }

/* RESPONSIVE */
@media (max-width: 1120px){
  .imgCat { height: 15vh; }
}
@media (max-width: 1000px){
  .imgCat { height: 14.5vh; }
}
@media (max-width: 930px){
  .imgCat { height: 13vh; }
}
@media (max-width: 808px){
  .imgCat { height: 12vh; }
}
@media (max-width: 750px){
  .imgCat { height: 11vh; }
  .category { height: fit-content; }
}
@media (max-width: 520px){
  .imgCat { height: 10vh; }
}
@media (max-width: 400px){
  #devJv { height: 9.2vh; }
}
</style>