<script>
import NavBar from './components/NavBar.vue';
import Main from './components/Main.vue';
import bg from './components/Background.vue';
import Modal_Login from './components/Modal_Login.vue';
// import prueba from './components/prueba.vue';
// import Index_Login from './components/Index_Login.vue';







export default {
  components: {
    NavBar,
    Main,
    bg,
    Modal_Login,
    // Index_Login,
    // prueba
},
}
</script>
<template>
  
  <bg />

  <NavBar />
  <Modal_Login/>  
    <Main />
    <!-- <Index_Login /> -->
    <!-- <prueba /> -->
</template>


