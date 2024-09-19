<!-- <template>
    <div class="container" id="testimonials">
      <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(testimonial, index) in $store.state.testimonials" :key="testimonial.id" class="carousel-item" :class="{ 'active': index === 0 }">
            <div class="testimonials-card">
              <img :src="testimonial.image" alt="testimonial Image" class="testimonial-image">
              <p style="font-weight: bolder; "> {{ testimonial.name }}<br></p>
              {{ testimonial.position }}<br>
              <div class="testimonial-message">
                {{ testimonial.message }}<br>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      getTestimonials() {
        return this.$store.state.testimonials
      }
    },
    mounted() {
      this.$store.dispatch('getData')
    }
  }
  </script>
  
  <style scoped>
  .testimonials-card {
    width: 300px; 
    margin: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    align-content: center;
    align-items: center;
    margin: 20px auto;
  }
  
  .testimonial-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  
  .testimonial-message {
    padding: 20px;
    background-color: #f0f0f0;
  }
  
  </style> -->
  <template lang="">
    <div>
      
    </div>
  </template>
  <script>
  export default {
    
  }
  </script>
  <style lang="">
    
  </style>