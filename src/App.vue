<template>
  <div id="app">
   <router-view></router-view>
   
  </div>
  
</template>

<script>
export default {
  name: "App",

  
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
  background-image: url("https://i.gifer.com/7D7o.gif");
  min-height: 508px;
}
.content {
  text-align: center;
  color: white;
  padding: 15%;
  justify-content: center;
}
.content-m{
  margin:10px;
  padding:10px;
}
.content .download{
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
</style>
