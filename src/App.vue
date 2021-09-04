<template>
  <div>
    <Navbar />
    <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->

    <transition name="mi-transicion">
      <router-view />
    </transition>
    <Footer />
    
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#menu-v8 a {
  text-shadow: 1px 1px #000;
}
.mi-transicion-enter-active, .mi-transicion-leave-active {
transition: opacity .5s, padding 1s;
}
.mi-transicion-enter, .mi-transicion-leave-to{
opacity: 0;
padding: 10px;
}

</style>