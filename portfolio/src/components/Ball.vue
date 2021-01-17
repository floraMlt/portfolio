<template lang="html">
  <div class="ball">
    <svg width="500" height="350">
      <circle id="blue-circle" r="7" cx="50" cy="50" fill="#1b1464" />
      <animate 
        xlink:href="#blue-circle"
        attributeName="cy"
        from="50" to="100" 
        dur="3s"
        begin="click"
        calcMode="spline"
        values="50; 100; 70; 100; 85; 100; 50"
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
</style>