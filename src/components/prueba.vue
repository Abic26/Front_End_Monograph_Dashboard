<template>
  
  <NavBar />
  <Main />
  <bg />
  <Modal_Login/>  

</template>
<script>
import NavBar from './Navbar.vue';
import Main from './Main.vue';
import bg from './Background.vue';
import Modal_Login from './Modal_Login.vue';


export default {
  components: {
    NavBar,
    Main,
    bg,
    Modal_Login,

},
}
</script>
<style></style>
