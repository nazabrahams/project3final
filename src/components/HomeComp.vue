<template>
    <div>
      <div class="circle animate__animated animate__pulse animate__infinite">
        <p class="words"> Nazneen Abrahams</p>
        <p class="words2">Aspiring web developer</p>
        <a href="https://github.com/nazabrahams/hostedimages3/blob/main/NAZNEEN%20ABRAHAMS%20CV.docx_page-0001.jpg?raw=true" target="_blank" class="btn">My CV</a> 
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style scoped>
  .circle {
    width: 500px;
    height: 500px;
    background-color: #1C110A;
    border-radius: 50%;
    position: absolute;
    top: 27%;
    left: 32%;
    transform: translate(-50%, -50%);
    
  }
  
  .words {
    color: #E4D6A7;
    text-align: center;
    align-content: center;
    margin-top: 25%;
    font-weight:300;
    font-size: 30px;
    
  }
  
  .words2{
    color: #E4D6A7;
  }
  
  .btn{
    color:#1C110A ;
    background-color: #E4D6A7;
    font-weight: bold;
    margin-top: 22%;
  }
  </style>