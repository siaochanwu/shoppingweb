<template>
  <div id="app">
    
    <router-view/>

  </div>
</template>

<script>
export default {
  name:'App',
  // created(){
  //   const api = "https://vue-course-api.hexschool.io/api/wendywu007/products";
  //   this.$http.get(api).then((response)=>{
  //     console.log(response)
  //   })
  // }
}
</script>

<style lang="scss">
@import "./assets/all.scss";
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
