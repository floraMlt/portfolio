<template>
  <div class="canvas">

  </div>
</template>

<script>
import Webgl from '@/webgl/Webgl';

//var nameInput = document.getElementById('text'); this.ref.nomRef

document.querySelector('#text').addEventListener('input', function (e) {
    e.preventDefault();
    console.log(nameInput.value);    
});

export default {
  data(){
    return {
      webgl: null
    }
  },
  mounted() {
    const $mainCanvas = this.$el // fait appel à premiere div, sinon utiliser les refs
    this.webgl = new Webgl($mainCanvas)
    this.webgl.start()
  }
}
</script>

<style>

</style>