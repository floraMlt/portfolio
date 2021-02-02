<template lang="html">
  <div>
    <sui-modal v-model="open">
      <i class="close icon" id= "closeIcon" @click="toggle"></i>
      <img class="zoomImg" wrapped size="big" v-bind:src="imgSrc"/>
    </sui-modal>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return { 
      open: false
    }
  },
  props: {
    imgSrc: { type:String }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>

<style lang="css">
.zoomImg{
  width: 100% !important;
  margin: 0 auto;
  border-radius: 10px !important;
  overflow: hidden;
}
#closeIcon {
  z-index: 15;
  position: absolute;
  color: #C1272D;
  top: 1%;
  right: 1%;
}
.ui.modal {
  background-color: rgba(0,0,0,0) !important;
  width: 50% !important;
}

/* RESPONSIVE */
@media (max-width: 1000px){
  #closeIcon {
    top: -2px !important;
    right: -2px !important;
  }
  .ui.modal {
    width: 85% !important;
  }
}
@media (max-width: 650px){
  #closeIcon {
    top: -5px !important;
    right: -5px !important;
    font-size: 1em;
  }
  .ui.modal {
    width: 90% !important;
  }
}
</style>