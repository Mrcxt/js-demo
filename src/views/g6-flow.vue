<template>
  <div class="g6-flow">
    <!-- 缩略图 DOM 结构规约参考 Minimap API -->
    <div id="minimap">
      minimap
    </div>
    <!-- 工具栏 DOM 结构规约参考 Toolbar API -->
    <div id="toolbar">
      toolbar
    </div>
    <!-- 元素面板栏 DOM 结构规约参考 Itempannel API -->
    <div id="itempannel">
      itempannel
    </div>
    <!-- 详情面板栏 DOM 结构规约参考 Detailpannel API -->
    <div id="detailpannel">
      detailpannel
    </div>
    <!-- 右键菜单栏 DOM 结构规约参考 Contextmenu API -->
    <div id="contextmenu">
      contextmenu
    </div>
    <!-- 参考 Flow、Mind API -->
    <div id="page">
      page
    </div>
  </div>
</template>

<script>
import G6Editor from "@antv/g6-editor";
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const editor = new G6Editor();
      const minimap = new G6Editor.Minimap({
        container: "minimap"
      });
      const toolbar = new G6Editor.Toolbar({
        container: "toolbar"
      });
      const contextmenu = new G6Editor.Contextmenu({
        container: "contextmenu"
      });
      const itempannel = new G6Editor.Itempannel({
        container: "itempannel"
      });
      const detailpannel = new G6Editor.Detailpannel({
        container: "detailpannel"
      });
      const page = new G6Editor.Flow({
        graph: {
          container: "page"
        }
      });
      editor.add(minimap);
      editor.add(toolbar);
      editor.add(contextmenu);
      editor.add(itempannel);
      editor.add(detailpannel);
      editor.add(page);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
