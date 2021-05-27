<template>
  <div class="container mt-5">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src='/assets/slider-good4u.jpg' class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="/assets/slider-mylife.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="/assets/slider-dynamite.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>



  <!-- <div id="main" class="d-flex justify-content-center align-items-center">
    <div id="nav">
      <router-link to="/payments"><button type="button" class="btn btn-primary">Go to Payments</button></router-link>
      <p></p>
    </div>
  </div> -->
</template>

<script>

export default {
  name: 'home'
}
</script>

<style scope>
  #main {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>