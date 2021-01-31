<template>
  <div class="buttonReturn">
     <a class="btn btn1"><span></span>Retour</a>
  </div>
</template>

<script>

export default {
  name: "ButtonReturn"
}
</script>

<style scoped>
a.btn{
	position: absolute;    
  color: #fff;    
  font-size: 1.1em;
  width: 100px;
  height: 50px;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  letter-spacing: 2px;
}

a.btn::before, 
a.btn::after, 
span::before, 
span::after{
	content: '';
  position: absolute;    
  width: 10px;
  height: 10px;
  transition: 1s;
}

a.btn::before{
	top: -0.5px;
  left: -0.5px;
  border-top: 1.5px #C70039 solid;
  border-left: 1.5px #C70039 solid;
}

a.btn::after{
	top: -0.5px;
  right: -0.5px;
  border-top: 1.6px #C70039 solid;
  border-right: 1.6px #C70039 solid;
} 

span::before{
	bottom: -0.5px;
  left: -0.5px;
  border-bottom: 1.6px #C70039 solid;
  border-left: 1.6px #C70039 solid;
} 

span::after{
	bottom: -0.5px;
  right: -0.5px;
  border-bottom: 1.5px #C70039 solid;
  border-right: 1.5px #C70039 solid;
}

a.btn:hover{
  color: #280047;
}

a.btn:hover::before,
a.btn:hover::after,
a.btn:hover span::before,
a.btn:hover span::after{
  width: calc( 190px / 2 );
  height: calc( 40px / 2 );
}

/* RESPONSIVE*/
@media (max-width: 1150px){
  a.btn{
    font-size: 1em;
    width: 80px;
  }
  a.btn:hover::before,
  a.btn:hover::after,
  a.btn:hover span::before,
  a.btn:hover span::after{
    width: calc( 100px / 2 );
    height: calc( 20px / 2 );
  }
}

@media (max-width: 850px){
  a.btn{
    font-size: 0.9em;
    width: 60px;
  }
}

@media (max-width: 550px){
  a.btn{
    font-size: 0.8em;
    width: 45px;
    height: 45px;
    top: -7px;
  }
  a.btn:hover::before,
  a.btn:hover::after,
  a.btn:hover span::before,
  a.btn:hover span::after{
    width: calc( 80px / 2 );
    height: calc( 15px / 2 );
  }
}
</style>