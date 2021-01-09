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

</style>
