<template>
    <nav>
        <div class="fixed-top">
          <header id="nav-colour" class="d-flex justify-content-between">
            <div style="width: 100%; height: 130px; background-color: #1C110A"
              class="d-flex justify-content-between">
              <a class="nav bar-brand justify-content-start" href="#"> <img src="
                https://nazabrahams.github.io/newimages/newimages/avatar 1.png" alt="logo" width="100"
                  height="100"></a>
                <ul class=" nav nav-underline justify-content-end">
                  <li class="nav-item">
                    <a class="nav-link" href="../components/HomeComp.vue">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#education">Resume</a>
                  </li>
                  <!-- <li class="nav-item">
                    <a class="nav-link" href="#testimonials">Testimonials</a>
                  </li> -->
                  <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                  </li>
      
                </ul>
            </div>
      
          </header>
      
        </div>
    </nav>
</template>
<script>
export default {
    name: 'NavBarComp',
};
</script>
<style>
.nav-link{
    color: #e4d6a7;
    
}
.nav-item{
  font-size: 21px;
}
.nav-link  :hover{
  color: #e4d6a7;
}
</style>