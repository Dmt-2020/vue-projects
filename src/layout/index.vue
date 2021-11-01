<template>
    <div id="nav">
      <el-container>
        <el-header>
          <slot name="header"></slot>
        </el-header>
        <el-main>
          <slot name="main"></slot>
        </el-main>
        <el-footer>This is dmt'blog page</el-footer>
      </el-container>
    </div>
</template>

<script>
export default {
    name:'Layout'
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-header,
.el-footer {
  background-color: darkcyan;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100%;
}
</style>
