<template>
  <div
    class="base-box"
    :class="{
      'base-box-mobile': isMobile,
      'computer-show-aside': showAside,
      'business': styleType === 'business'
    }"
  >
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
      showAside: true,
      styleType: "business" // classic: 经典; business: 商务; simplicity: 简约;
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
  .content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #153c66;
    border: 1px solid #2e6fa7;
  }
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

.base-box.business {
  padding: 0 0 25px 60px;
  background-color: #edeff3;
  .content {
    background-color: #edeff3;
  }
}
.base-box.business.computer-show-aside {
  padding-left: 260px;
}
</style>
<style lang="less">
</style>