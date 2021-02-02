<!-- Animated/interactive blue ball next to my name, in the Home page -->
<template lang="html">
  <div class="ball">
    <svg width="20" height="100">
      <circle id="blue-circle" r="7" cx="10" cy="10" fill="#1b1464" />
      <animate 
        xlink:href="#blue-circle"
        attributeName="cy"
        from="10" to="60" 
        dur="3s"
        begin="click"
        calcMode="spline"
        values="10; 60; 30; 60; 45; 60; 10"
        keyTimes="0; 0.15; 0.3; 0.45; 0.6; 0.75; 1"
        keySplines="0.42 0 1 1;
                    0 0 0.59 1;
                    0.42 0 1 1;
                    0 0 0.59 1;
                    0.42 0 1 1;
                    0 0 0.59 1"
        fill="freeze"  
        id="circ-anim"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Ball'  
}
</script>

<style lang="css">
.ball:hover {
  cursor: pointer;
}
</style>