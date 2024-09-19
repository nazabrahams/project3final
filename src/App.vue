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
<style src="./assets/styles.css">

</style>
