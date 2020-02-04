<template>
  <div class="bottom" :class="BaseLayout.styleType">
    <span>当前用户：主机超级管理员</span>
    <span>版权所有：{{$baseConfig.info.company.name}}({{$baseConfig.info.company.url}})</span>
    <span>电话：{{$baseConfig.info.phone}}</span>
    <span>版本号：{{$baseConfig.info.version}}</span>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  components: {},
  props: {},
  inject: ["BaseLayout"],
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style lang="less" scoped>
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  height: 25px;
  line-height: 25px;
  padding: 0 24px;
  color: white;
  background-color: #193c64;
  z-index: 3;
  span {
    margin-right: 20px;
  }
}
.bottom.business {
  background-color: #2c333f;
}
.bottom.simplicity {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>