<template>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <div id="app" >
      <div id="nav" hidden='true'>
        <router-link to="/">Capture</router-link> |
        <router-link to="/process">Process</router-link>
      </div>
      <br/><br/>
      <router-view/>
    </div>
      ...
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
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $body-color;
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
</style>
