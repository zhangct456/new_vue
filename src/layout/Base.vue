<template>
  <div class="base-box" :class="{'base-box-mobile': isMobile, 'computer-show-aside': showAside}">
    <Header></Header>
    <Aside></Aside>
    <div class="content">
      <router-view />
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Aside from "./Aside.vue";
import Bottom from "./Bottom";

export default {
  name: "Base",
  components: { Header, Aside, Bottom },
  provide() {
    return { BaseLayout: this };
  },
  inject: ["screenType"],
  props: {},
  data() {
    return {
      showAside: true
    };
  },
  computed: {
    isMobile() {
      return this.screenType === "mobile";
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {
    if (this.screenType === "mobile") {
      this.showAside = false;
    } else {
      this.showAside = true;
    }
  }
};
</script>
<style lang="less" scoped>
.base-box {
  width: 100%;
  height: 100%;
  padding: 80px 0 25px 0px;
  background-color: #153c66;
  transition: 0.5s all ease;
}
.computer-show-aside {
  padding-left: 200px;
}
.base-box-mobile {
  width: 100%;
  height: 100%;
  padding: 0;
  padding-top: 40px;
  padding-bottom: 25px;
  background-color: #153c66;
}
.content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #153c66;
  border: 1px solid #2e6fa7;
}
</style>