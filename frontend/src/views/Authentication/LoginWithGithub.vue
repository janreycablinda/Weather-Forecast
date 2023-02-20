<template>
    <div>Login with Github, please wait!</div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    name: "LoginGithub",
    methods: {
      ...mapActions({
          login: 'auth/loginWithGithubCallback'
      }),
      loginUser(){
        this.login({code: this.$route.query.code}).then((response) => {
          if(response.data.access_token){
            this.$router.push({
                name: "Home"
            })
          }else{
            this.$router.push({
                name: "Login"
            })
          }
        })
      }
    },
    created(){
        this.loginUser();
    }
}
</script>