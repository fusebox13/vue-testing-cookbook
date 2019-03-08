<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <ul id="nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/element">Element</router-link>
          </li>
          <li>
            <router-link to="/vuetify">Vuetify</router-link>
          </li>
          <li>
            <router-link to="/vuex">Vuex</router-link>
          </li>
        </ul>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul#nav {
  padding: 0;
  li {
    list-style: none;
    padding: 1em;
    font-size: 2em;
    .router-link-exact-active {
      color: green;
    }
    a {
      text-decoration: none;
      color: lightgrey;
      &:hover {
        transition: color 0.25s ease-in-out;
        color: black;
      }
    }
  }
}
</style>
