<template>
  <footer class="app-footer">
  <div class="container">
  <div class="row">
    <div class="social-icons col-lg-3 col-sm-12">
    <div class="section">
        <i class="fas fa-map-marker-alt"></i>
        <span class="copyright text-grey"> © 2023</span>
        
        
      </div>
      <div class="section">
        <span class="copyright text-grey">All rights reserved.</span>
        
      </div>
      
      
      <a href="#" class="mr-4"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fa fa-envelope"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
    </div>

    <div class="company-info col-lg-9 col-sm-12">
    <div class="section">
       <ul>
          <li><a href="http://localhost:8080/price">Prices</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        
      </div>
    <div class="section">
       <ul>
          <li><a href="http://localhost:8080/price">Prices</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        
      </div>
      <div class="section">
       <ul>
          <li><a href="http://localhost:8080/price">Prices</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        
      </div>
      <div class="section-qr">
       <p>Get started with stocks</p>
       <div class="scanner-c d-flex justify-content-center">
       <img src="https://static.crypto.com/layout/footer/qrCode.png" 
       alt="qrCode" width="70" height="80" loading="lazy" >
       </div>
      </div>
    </div>

    </div>
    </div>
  </footer>
</template>

<script>
import 'font-awesome/css/font-awesome.css'; 
import 'font-awesome/css/font-awesome.min.css';
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.app-footer {
  background-color: #0B1426;
  color: #fff;
  padding: 20px;
}

.social-icons {
  margin-bottom: 20px;
  display:block;
}

.social-icons a {
  color: #fff;
  
  text-decoration: none;
  font-size: 24px;
  padding:10px;
  margin:10px 0;
}

.company-info {
  display: flex;
  justify-content: space-between;
}

.section {
  flex: 1;
}

.section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.section p {
  font-size: 14px;
}

.section ul {
  list-style: none;
  padding: 0;
}

.section ul li {
  margin-bottom: 5px;
}

.section ul li a {
  color: #fff;
  text-decoration: none;
}


</style>
