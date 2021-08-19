<template>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <div id="app" >
      <div id="nav">
        <router-link to="/">Capture</router-link> |
        <router-link to="/process">Process</router-link> | 
        <router-link to="/settings">Settings</router-link>
      </div>
      <router-view @authenticated="setAuthenticated" />
    </div>
  </html>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CaptureComponent from '@/components/CaptureComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    CaptureComponent,
  },
})
export default class App extends Vue {

  authenticated = false;
  mounted() : void{
    console.log("mounted!");
    if (!this.$session.exists()) {
      console.log("SESSION DOES NOT EXISTS");
      this.$router.replace({ name: "login" })
    }
    else {
      console.log("Session exists!");
      console.log(this.$session.getAll());
    }
  }

  setAuthenticated(status : boolean) : void {
    this.authenticated = status;
  }

  logout() : void {
    this.setAuthenticated(false);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
  background-color: $body-bg
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: $primary;
}

#nav a.router-link-exact-active {
  color: $body-color;
}

// Disables touble tap zoom on ios
button {
  touch-action: manipulation;
}
</style>
