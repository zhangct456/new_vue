<template>
  <div class="aside"></div>
</template>

<script>
export default {
  name: "Aside",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    window.console.log("aside");
  }
};
</script>

<style lang="less" scoped>
.aside {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  width: 200px;
  background-color: #133a63;
}
</style>