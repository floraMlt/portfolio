<template lang="html">
  <div id="modalcv">
    <sui-modal v-model="open">
    <i class="closeIcon" @click="toggle"></i>
    <!--<sui-image class="zoomImg" wrapped :src="this.imgSrc"/>-->
    <img class="imgCV" alt="cv" src="../assets/img/cv.jpg"/>
    </sui-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalCv',
  data() {
    return { 
        open: false,
        cvLink: require("@/assets/img/cv.jpg")
    };
  },
  /*props: {
    imgSrc:{type:String, required:true}
  },*/
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="css">
.imgCV {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.zoomImg{
    width: 20vw !important;
    /*border-radius: 10px !important;*/
    overflow: hidden !important;
}
.closeIcon {
  z-index: 15;
  position: absolute;
  color: #C1272D;
}
#modalcv .ui.modal {
  background-color: white !important;
  max-height: 96vh !important;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>