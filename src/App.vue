<template>
  <div id="app">
    <el-container>
      <el-header>
        <menu-group></menu-group>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MenuGroup from "./components/MenuGroup";
export default {
  name: "",
  components: {
    MenuGroup
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
