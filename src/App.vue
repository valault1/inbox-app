<template>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <div id="app" >
      <div id="nav">
        <router-link to="/">Capture</router-link> |
        <router-link to="/process">Process</router-link>
      </div>
      <router-view/>
    </div>
      ...
  </html>
</template>

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
