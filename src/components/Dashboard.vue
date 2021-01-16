<template>
  <div>
    <Navbar />
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-0 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
          
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar"; //插入元件
import Navbar from "./Navbar";
import Alert from "./AlertMessage";

export default{
  components: {
    //匯入元件
    Sidebar,
    Navbar,
    Alert,
  },
}
</script>
