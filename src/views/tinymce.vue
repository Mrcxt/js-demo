<template>
  <div class="">
    <tinymce id="tinymce" v-model="data" :other_options="options"></tinymce>
  </div>
</template>

<script>
import lang from "../../public/langs/zh_CN";
export default {
  name: "",
  data() {
    return {
      data: "",
      options: {
        height: 200
      }
    };
  }
};
</script>
<style lang="less">
</style>

