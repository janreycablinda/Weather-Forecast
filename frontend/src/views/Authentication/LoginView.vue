<template>
  <div class="home">
      <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
      <button @click="loginGithub">Login</button>
  </div>
</template>
  
<script>
import {mapActions} from 'vuex';

export default {
  name: 'HomeView',
  methods: {
    ...mapActions({
      loginWithGithub: "auth/loginWithGithub"
    }),
    loginGithub(){
      this.loginWithGithub().then((response) => {
        if(response.data.url){
          window.location.href = response.data.url;
        }
      });
    },
  }
}

</script>
  