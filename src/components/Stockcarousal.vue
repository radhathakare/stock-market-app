<template>
  <div class="marquee-wrapper">
    <div class="container">
      <div class="row marquee-block">
        <div class="col-12 marquee-inner to-left" ref="marquee">
        
          <div class="marquee-content">
         
            <div class="marquee-item" v-for="(logo, index) in logos" :key="index">
              <img :src="logo.src" :alt="logo.alt" :height="logo.height" class="image-logo" />
            </div>
            
            <div class="marquee-item" v-for="(logo, index) in logos" :key="index">
              <img :src="logo.src" :alt="logo.alt" :height="logo.height" class="image-logo" />
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockCarousel',
  data() {
    return {
      logos: [
        { src: "https://wallpapers.com/images/featured/apple-logo-4k-uzxvz854vxuglpqy.jpg", alt: "logo", height: 60, width: 70 },
        { src: "https://blog.hubspot.com/hs-fs/hubfs/The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg?width=528&name=The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg", alt: "logo", height: 60 },
        { src: "https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg", alt: "logo", height: 60 },
        { src: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true", alt: "logo", height: 60 },
        { src: "https://www.shutterstock.com/image-vector/netflix-logo-icon-design-vector-260nw-2270211003.jpg", alt: "logo", height: 60 },
        { src: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-horiz-500x200-2c50-p@2x.png", alt: "logo", height: 60 },

       
      ],
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      const marqueeContent = this.$refs.marquee.querySelector(".marquee-content");
      const marqueeWidth = marqueeContent.clientWidth;

      function animateMarquee() {
        marqueeContent.style.transition = "transform 30s linear"; // Adjust the duration as needed
        marqueeContent.style.transform = `translateX(-${marqueeWidth}px)`;

        marqueeContent.addEventListener("transitionend", () => {
          marqueeContent.style.transition = "none";
          marqueeContent.style.transform = "translateX(0)";
          requestAnimationFrame(() => {
            animateMarquee();
          });
        });
      }

      animateMarquee();
    },
  },
};
</script>

<style scoped>
.marquee-wrapper{
  padding:80px 0;
}
.marquee-content {
  display: flex;
  animation: marquee 60s linear infinite;
  padding: 20px;
}

@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.marquee-item{
  padding: 10px 30px 30px 20px;
}
.marquee-block{
    height: 90px;
    width:100%;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    
}


</style>
