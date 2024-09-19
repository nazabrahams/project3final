<template>
    <h2 class="heading">Education</h2>
    <div class="container" id="education">
      <div v-for="education in $store.state.education" :key="education.id" class="educations-card">
        {{ education.placeOfInstitution }}<br>
        {{ education.year }}<br>
        {{ education.description }}<br>
        {{ education.contact }}<br>
        {{ education.name }}<br>
        {{ education.contactDetails }}<br>
      </div>
    </div>
    <h2 class="heading">Skills</h2>
    <div class="images">
      <div v-for="skills in $store.state.skills" :key="skills.id">
        <img :src="skills.image" alt="skills Image" class="skills-image animate__animated animate__tada animate__infinite">
      
      </div>
      </div>
      <h2 class="heading7">Soft Skills</h2>
    <div class="images justify-content-center">
      <div v-for="softSkills in $store.state.softSkills" :key="softSkills.id">
        <img :src="softSkills.image" alt="softSkills Image" class="softSkills-image animate__animated animate__tada animate__infinite">
        <p class="soft-skill-name">{{ softSkills.name }}</p>
      
      </div>
      </div>
  </template>
  
  <script>
  export default {
    methods: {
      getEducation() {
        return this.$store.state.education
      },
      getSkills() {
        return this.$store.state.skills
      },
      getSoftSkills() {
        return this.$store.state.softSkills
      }
    },
    mounted() {
      this.$store.dispatch('getData')
    }
  }
  </script>
  
  <style scoped>



  .soft-skill-name {
    font-size: 2rem;
    padding: 1rem;
    font-weight: bold;
    color: black;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
    overflow-x: hidden;
  }
  
  .educations-card {
    flex-basis: 30%; 
    flex-grow: 1; 
    margin: 20px;
    background-color:#1C110A;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #E4D6A7;
  }
  .heading{
    color: #1C110A;
    padding-top: 70px;
    font-weight: bold;
  }
  
  .images {
      display: flex;
      flex-wrap: nowrap;
      align-content: center;
      align-items: center;
      text-align: center;
      margin: 0 auto;
      
    }
   .skills-image {
     margin-right: 140px; 
      width: 160px;
      height: 150px;
      align-content: center;
      align-items: center;
      display: flex;
      text-align: center;
      padding-bottom: 40px;
      margin-left: 28px;
     
    }
   .softSkills-image {
     margin-right: 140px; 
      width: 160px;
      height: 150px;
      align-content: center;
      align-items: center;
      display: flex;
      text-align: center;
      padding-bottom: 40px;
      margin: 0 auto;
    }
    .heading7{
    color: #1C110A;
    margin-bottom: 8%;
    font-weight: bold;
  }
 
    
  </style>