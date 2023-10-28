<template>
  <div class="container">
    <div class="row content-price">
      <div class="col-lg-6 col-sm-12 price-container">
          <h1>Your stock journey starts here.</h1>
          
          <div class="d-flex justify-content-center mt-4">
          
          <a href="http://localhost:8080/price" style="text-decoration: none;">
          <button class="btn-price">
          Check Stock Prices
          </button></a>
          </div>
      </div>
     <div class="col-lg-6 col-sm-12">
       <img src="../assets/stock-mobile.png" 
       alt="mobile" loading="lazy" class="mobileimg" width="550" height="550">
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: "CheckPrice",
}
</script>

<style>
.content-price{
    display:flex;
}
.price-container{
    margin-top: 13%;
    color:white;
}
.btn-price{
    color: white;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    background: transparent;
    height: 54px;
    cursor: pointer;
    padding: 13px 24px;
    text-decoration: none;
}
@media (max-width: 768px) {
  .mobileimg{
    width:300px;
    height:400px;
  
  }
  }

</style>