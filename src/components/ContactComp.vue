<template >
    <div class="container">
        <h2 class="contact animate__animated animate__jackInTheBox">Contact Me </h2>
          <!-- <form class="myfoot"
                      action="https://submit-form.com/8mGYB9bl4"
                    method="POST"
                    enctype="multipart/form-data"
                      >
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Name</label>
                          <input type="text" class="form-control" id="exampleInputEmail1" name="Name" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3-">
                          <label for="exampleInputEmail1" class="form-label">Email</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" name="Email" aria-describedby="emailHelp">
                          <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3-n">
                          <label for="exampleInputEmail1" class="form-label"> Message</label>
                          <input type="text" class="form-control"  id="exampleInputEmail1" name="Message" aria-describedby="emailHelp" style="height: 84px;">
                        </div>
                        <button type="submit" class="submit">Send</button> 
                      </form> -->
                      <form action="https://submit-form.com/8mGYB9bl4">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required="" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" placeholder="Email" required="" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <textarea class="form-control" id="message" name="message" placeholder="Message" required="" style="height: 84px;"></textarea>
  </div>
  <button type="submit" class="submit">Send</button>
</form>
  
                      <p class="contact2 animate__animated animate__pulse animate__infinite">
                                   Cell: 072 908 0220 <br>
                                   Email: nazabrahams07@gmail.com<br>
                                   Penlyn Estate, Cape Town, South Africa</p>
                  
        
      </div>
  </template>
  <script>
  export default {
      
  }
  </script>
  <style scoped>
      .mb-3{
      width: 50%;
  }
  
  .mb-3-{
      width: 60%;
  }
  
  .mb-3-n{
      width: 80%;
     
  }
  
  .submit {
      color:#E4D6A7;
      background-color: #1C110A;
      border: #1C110A;
      font-weight: bold;
      align-content: start;
      justify-content: start;
  
  }
  
  .form-label {
      font-weight: bold;
      color: #1C110A;
      
     
  }
  .container {
      padding-top: 150px;
      text-align: left;
  }
  
  .contact{
    text-align: left;
    margin-bottom: 40px;
    color: #1C110A;
    font-weight: 600;
  }
  
  .contact2{
    text-align: center;
    color: #1C110A;
    font-weight: bold;
  }
  </style>