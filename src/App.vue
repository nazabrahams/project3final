<template>
  
  <div id="navbar">
    <NavBarComp/>
    <router-view/>
    <FooterComp/>
  </div>


<!-- <div>
  <section id="home-section">
    <router-view name="home"></router-view>
  </section>
  <section id="about-section">
    <router-view name="about"></router-view>
  </section>
  <section id="education-section">
    <router-view name="education"></router-view>
  </section>
  <section id="testiomonials-section">
    <router-view name="testimonials"></router-view>
  </section>
  <section id="projects-section">
    <router-view name="projects"></router-view>
  </section>
  <section id="contact-section">
    <router-view name="contact"></router-view>
  </section>
</div> -->

</template>
<script>
import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue'

export default {
name: 'App' ,
components:{
  NavBarComp,
  FooterComp
}
}
</script>
<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}

nav {
padding: 30px;
}

nav a {
font-weight: bold;
color: #2c3e50;
}

nav a.router-link-exact-active {
color: #42b983;
}
body{
background-color: #E4D6A7;
}
</style>
