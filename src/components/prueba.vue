<template>

  <div class="container-fluid"><NavBar /></div>
  <div class="container-fluid"><Main /></div>
  <div class="container-fluid"><bg /></div>
  <div class="container-fluid"><Modal_Login/></div>  

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

