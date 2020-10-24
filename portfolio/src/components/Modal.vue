<template lang="html">
  <div>
    <sui-modal v-model="open">
    <i class="closeIcon" @click="toggle"></i>
    <sui-image class="zoomImg" wrapped size="big" :src="this.imgSrc"/>
    </sui-modal>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return { 
        open: false
    };
  },
  props: {
    imgSrc:{type:String, required:true}
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="css">
.zoomImg{
    width: 100% !important;
    margin: 0 auto;
    border-radius: 10px !important;
    overflow: hidden;
}
.closeIcon {
  z-index: 15;
  position: absolute;
  color: #C1272D;
}
.ui.modal {
  background-color: rgba(0,0,0,0) !important;
  width: 50% !important;
}
</style>