<template>
  <div class="canvas">
  </div>
</template>

<script>
import Webgl from '@/webgl/webgl';

export default {
  name: "Canvas",
  data() {
    return {
      webgl: null
    }
  },
  mounted() {
    const $mainCanvas = this.$el
    this.webgl = new Webgl($mainCanvas)
    this.webgl.createCanvas({
      container: $mainCanvas
    })
  }
}
</script>

<style scoped>
.canvas {
  height: 700px;
  width: 650px;
}
</style>