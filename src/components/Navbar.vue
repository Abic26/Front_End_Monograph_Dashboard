<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="d-flex justify-content-md-start align-items-center view">
          <img class="logo" src="/logo.svg" alt="">
          <button class="navbar-toggler d-gl-flex justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu">
            <span class="navbar-toggler-icon">
            <img class="close" :src="isMenuOpen ? closedImage : openImage">            

            </span>
          </button>
        </div >
          <div class="collapse navbar-collapse options" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0" >
              <li class="nav-item">
                <p class="nav-link espacio">PRODUCT</p>
              </li>
              <li class="nav-item espacio">
                <p class="nav-link" >FEATURES</p>
              </li>
              <li class="nav-item espacio">
                <p class="nav-link" >PRICING</p>
              </li>
              <li class="nav-item login">
                <button type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">LOGIN</button>
                <!-- <p class="nav-link"  >LOGIN</p> -->
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <slot></slot>
    </header>   
    <!-- <Modal_Login /> -->
  </template>
<script>
  export default {
    data: ()=>({
  
    isMenuOpen: false,
    openImage:"",
    closedImage: "/icon-close.png",
  

    }),
    methods: {
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  },
},

  }

</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
  /* font-family: 'Barlow Condensed', sans-serif; */
  /* Styles generals of nav desing */
  header{
    width: 20px;
    height: 20px;
    z-index: 2;
  }
  .view{
    /* padding: 20px; */
    width: 300px;
    /* height: 250px; */
  }
  .navbar {
    z-index: 999;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 50px;

  }
  p{
    color: black;
    font-weight: bolder; 
  }
  p:hover{
    color: #00000076;
    cursor: pointer;
    border-bottom: 2px solid #000;

  }
  .login button{
    color: #00000076;


  }
  
  img {
    padding-left: 220px; 
  }
  
  .options {
    justify-content: flex-end;
  }

  
  .espacio {
    padding-left: 30px; 
  }
  
  .login {
    padding: 0 130px; 
  }
  
  .login p {
    color: #00000076;
  }
  .login button:hover {
    font-weight: bolder; 
    color: black;
    border-bottom:solid #00000064 ;

  }
  .navbar-toggler{
    background: #00000000;
    
    }

  /* Styles generals of nav responsive desing */


  @media (max-width: 768px) {
    header{
      overflow: hidden;
    }
    .logo{
      padding-left: 35px;
      
    }
    img {
      padding-left: 0px; 
    }
  
    .options {
      padding-top: 20px;
      align-items: center;
      justify-content: center; 
      margin: 0 8vh 0 8vh;
      background-color: white;
    }
    .options p{
    color: black;
    font-weight: bolder; 
    }
    .options p:hover{
      color: #00000076;
      cursor: pointer;
      border-bottom: 0px #00000000;
    
    }
   
  
    .espacio {
      padding-left: 43%; 
    }
  
    .login {
      border-top:solid ;
      padding-left: 45%; 
    }
  
    .navbar-toggler-icon {
      display: flex;
      width: 24px;
      height: 24px;
    }
    .navbar-toggler{
      /* display: none; */
      margin-left: 320px;
      cursor: pointer;
      /* background: red; */
    }


  }
  </style>





  
  