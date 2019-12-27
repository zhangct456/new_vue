<template>
  <div class="base-box">
    <Header></Header>
    <Aside></Aside>
    <div class="content">{{screenType}}</div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Aside from "./Aside.vue";

export default {
  name: "Base",
  components: { Header, Aside },
  provide() {
    return { BaseLayout: this };
  },
  inject: ["screenType"],
  props: {},
  data() {
    return {
      showAside: false
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.screenType);
  }
};
</script>
<style lang="less" scoped>
.base-box {
  width: 100%;
  height: 100%;
  padding: 80px 0 0 200px;
}
.content {
  width: 100%;
  height: 100%;
}
</style>