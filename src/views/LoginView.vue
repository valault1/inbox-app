<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CaptureComponent from '@/components/CaptureComponent.vue'; // @ is an alias to /src
import UserService from '@/services/UserService';


@Component({
  components: {
    CaptureComponent
  },
})
export default class LoginView extends Vue {
  input = {
    username: "",
    password: ""
  };
  async login() {
    console.log("authenticating...");
    if (this.input.username != "" && this.input.password != "") {
      let auth = await new UserService().authenticateUser(this.input.username, this.input.password);
      let user = await new UserService().getUser(this.input.username);
      console.log(user);
      console.log("The result of that authentication is: ");
      console.log(auth);
      if (auth) {
        this.$emit("authenticated", true);
        this.$session.start();
        this.$session.set('userId', user._id)
        this.$router.replace({ name: "home" });
      } 
      else {
        console.log("The username and / or password is incorrect");
      }
    } 
    else {
        console.log("A username and password must be present");
    }
  }

  
}
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>