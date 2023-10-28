<template>
  <div id="app">
   <router-view></router-view>
    <main>
      <NavbarHeader/>
      <div class="content-home">
        <h1>Make every investment</h1>
        <h3>
          A website where you can trade stocks, options, mutual funds, and more.
        </h3>
        <div class="d-flex justify-content-center mt-4">
        <button class="download">Download App</button>
        </div>
      </div>
    </main>
    <div class="content-m">
    <StockCarousal/>
    <div class="scroll-fade-in" ref="fadeInElement" :class="{ 'fade-in': isVisible }">
    <CheckPrice/>
     </div>
     <div class="scroll-fade-in" ref="fadeInElement" :class="{ 'fade-in': isVisible }">
    <StockChart/>
    </div>
    </div>
    <AppFooter/>
  </div>
  
  
</template>

<script>
import NavbarHeader from "../components/Navbar/header.vue";
import StockChart from "../components/Stockchart.vue";
import StockCarousal from "../components/Stockcarousal.vue";
import AppFooter from "../components/Footer/Footer.vue";
import CheckPrice from "../components/Checkprice.vue";
export default {
  name: "HomeView",

  components: {
    NavbarHeader,
    StockChart,
    StockCarousal,
    AppFooter,
    CheckPrice
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleScroll() {
      const element = this.$refs.fadeInElement;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < window.innerHeight) {
        this.isVisible = true;
        console.log("Element is visible.");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    background-color: #010118;
    position: relative;
}
main {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-size: cover;
  background-position: bottom;
  transition: 2.5s;
  background-image: url("../assets/gif.gif");
  min-height: 508px;
}
.content-home{
  text-align: center;
  color: white;
  padding: 15%;
  justify-content: center;
  transform: scale(0.94);
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  filter: blur(4px);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}
  @keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

 
.content-m{
  margin:10px;
  padding:10px;
}
.content-home .download{
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
}
.scroll-fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.2s, transform 0.9s;
}

.scroll-fade-in.fade-in {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .content-home{
    padding:25% 20%;
  }
}

</style>
