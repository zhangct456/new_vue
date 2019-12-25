<template>
  <div class="base-box">
    <Header></Header>
    <Aside></Aside>
    <div class="content"></div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Aside from "./Aside.vue";

export default {
  name: "Base",
  components: { Header, Aside },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.base-box {
  width: 100%;
  height: 100%;
  padding: 40px 0 0 200px;
}
.content {
  width: 100%;
  height: 100%;
}
</style>