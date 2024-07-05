<template>
    <div class="background">
      <h1 class="heading">My Projects</h1>
    <div class="container">
      <div v-for="project in $store.state.projects" :key="project.id" class="project-card">
        <img :src="project.image" alt="Project Image" class="project-image">
        <div class="project-info" id="tDisplay">
          <h2 style="font-weight: bolder; ">{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <p class="card-text">
                    <a :href="project.github" target="_blank"><img id="icongit"  src="https://github.com/nazabrahams/newimages/blob/main/newimages/github.png?raw=true"></a>
                    <a :href="project.vercel" target="_blank"><img id="iconvercel"   src="https://github.com/nazabrahams/hostedimages3/blob/main/vercel1868-removebg-preview.png?raw=true" alt=""></a>
                  </p>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      getProjects() {
        return this.$store.state.projects
      }
    },
    computed: {
      getMyInfo() {
        return this.$store.dispatch('getMyInfo')
      }
    },
    mounted() {
      this.getMyInfo
    }
  }
  </script>
  
  <style scoped>
   .background{
    background-color: #e4d6a7;
    
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .project-card {
    height: 560px;
    width: 300px; 
    margin: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .project-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  
  .project-info {
    padding: 20px;
  }
  
  .project-info h2 {
    margin-top: 0;
  }
  
  .project-info p {
    margin-bottom: 10px;
  }

  #icongit{
  width: 40px;
  height: 40px;
}
#iconvercel{
  position: relative;
  left: 20px;
  width: 60px;
  height: 40px;
}
#tDisplay{
    display: none;
    background-color: #f0f0f0 ;
    transition: 4s;
    height: fit-content;
}
.container:hover #tDisplay{
    display: block;
}
#name{
    font-weight: bold;
    color: aqua;
}
.heading {
  margin-top: 70px;
  color: #1C110A;
  font-weight: bold;
  align-content: center;
  text-align: center;
}
  </style>
