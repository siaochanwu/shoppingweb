<template>
  <div>
    
    <form @submit.prevent="signin">
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" v-model="user.username">
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" v-model="user.password">
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  created(){
    console.log(this.$route.params.id);//參數
    this.$http.get('https://randomuser.me/api/')
    .then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    });
  }
}
</script>

<style lang="">
  
</style>