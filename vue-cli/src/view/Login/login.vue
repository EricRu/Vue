<template>
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
<!--      <p v-show="showTishi">{{information}}</p>-->
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
    </div>
</template>

<script>
  import { setCookie,getCookie } from '../../assets/js/cookie.js'
  export default {
    name: "login",
    data(){
      return{
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        information: '',
        showInformation: false,
        showLogin: true
      }
      },
    mounted(){
      if(getCookie('username')){
        this.$router.push('/')
      }
    },
    methods:{
      login(){
        if(this.username == "" || this.password == ""){
          alert("请输入用户名或密码")
        }else{
          let data = {'username':this.username,'password':password}

          this.$http.post(x,data).then((res)=>{
            console.log(res)
            if(res.data == -1){
              this.information="该用户不存在";
              this.showInformation = true;
            }else if(res.data == 0){
              this.information="密码错误";
              this.showInformation = true;
            }else{
              this.information = "登录成功"
              this.showInformation = true
              setCookie('username',this.username,1000*60)
              setTimeout(function(){
                this.$router.push({path:'',query:{id:1}})
              }.bind(this),1000)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
