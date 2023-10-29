<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
      <a href="https://price-of-stock.netlify.app">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhAyUO4U0f2uY5t5KlFm_G5nkjdzffr5WZg&usqp=CAU" width="80" height="45">
        
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            
            
  
          </ul>
          
          
          <ul class="navbar-nav">
          <li class="nav-item">
              
              <a class="nav-link active text-white ml-4 mr-4" aria-current="page" href="https://price-of-stock.netlify.app/price">   
                Prices</a>
            </li>
          <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white ml-4"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Company
              </a>
              <ul class="dropdown-menu">
                <li></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <button class="download-app">
              Download App
              </button>
            </li>
           <li class="nav-item">
              <a class="nav-link" aria-disabled="true">Sign Up</a>
            </li>
             <li class="nav-item">
              <a class="nav-link" aria-disabled="true">Log In</a>
            </li>
            </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'NavbarHeader', 
}
</script>

<style scoped>
.navbar {
  background-color: #061121;
  color: #fff; 
}

.navbar-toggler-icon {
  background-color: #fff; 
}

.nav-link {
  color: #fff; 
}

.download-app {
  box-sizing: border-box;
    margin: 0;
    padding: 8px;
    border: 1.5px solid rgba(17, 153, 249, 0.5);
    border-radius: 8px;
    background-color: #061121;
    color:white;
}
</style>
