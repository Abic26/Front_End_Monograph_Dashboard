<template>
  
  <NavBar />
  <Main />
  <bg />
  <Modal_Login/>  
    <!-- <Index_Login /> -->
    <!-- <prueba /> -->
</template>
<script>
import NavBar from './Navbar.vue';
import Main from './Main.vue';
import bg from './Background.vue';
import Modal_Login from './Modal_Login.vue';
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
<style></style>
