<template>
  <el-menu mode="horizontal" :default-active="fullPath" router>
    <template v-for="(item, index) in routerList">
      <template v-if="item.meta.visible">
        <el-menu-item v-if="!item.children" :key="item.key" :index="item.path">{{item.name}}</el-menu-item>
        <sub-menu v-else :data="item" :path="item.path" :key="item.key"></sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script>
import SubMenu from "./subMenu";

export default {
  data() {
    return {};
  },
  components: {
    "sub-menu": SubMenu
  },
  computed: {
    // router 数据
    routerList() {
      return this.$router.options.routes;
    },
    // 当前path路径
    fullPath() {
      return this.$route.fullPath;
    }
  },
  created() {},
  methods: {}
};
</script>


<style lang="less">
</style>
