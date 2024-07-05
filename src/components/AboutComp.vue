<template>
    <div>
      <img class="me animate__animated animate__slideInLeft" src="https://github.com/nazabrahams/newimages/blob/main/newimages/me.jpg?raw=true">
      <p class="aboutMe animate__animated animate__backInDown">My name is Nazneen Abrahams,<br> im an aspiring web developer who is currently studying at Life Choices Coding Academy. I am driven by a passion for innovation, I thrive in collaborative environments where I lead by example, fostering teamwork and achieving collective goals through effective communication and strong leadership. With a proven track record of delivering measurable results and embracing change as an opportunity for growth, I am dedicated to continuous learning and excellence in every endeavor.</p>
    </div>
  </template>
  <script>
  export default {
    
  }
  </script>
  <style scoped>
    .me{
      width: 320px;
      height: 320px;
      position: absolute;
      left: 5%;
      top: 35%;
      transform: translateY(-50%);
      border-color: #1C110A;
      border-width: 15px; 
      border-style: solid; 
     
    }
  
    
    .aboutMe {
      position: absolute;
      top: 50%;
      left: 23%;
      transform: translate(-50%, -50%);
      text-align: center;
      margin-left: 80px;
      color: #1C110A;
      font-weight: 600;
    }
  </style>