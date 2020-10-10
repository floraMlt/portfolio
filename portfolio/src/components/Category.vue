<template>
  <div class="category">
    <img class="imgCat" :id="this.idImg" :src="this.srcImg" :alt="this.catName" :style="this.styleImg" v-on:click="go">
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
      cat:{type:String, required:true},
      src:{type:String, required:true},
      id:{type:String, required:true},
      style:{type:String, required:true}
  },
  data() {
    return {
      catName : this.cat,
      srcImg : this.src,
      idImg : this.id,
      styleImg : this.style
    }
  },
  methods: {
    go(){
      this.$router.push('projects_' + this.catName);
    }
  }
}
</script>

<style scoped>
.imgCat {
  height: 16vh;
}
</style>