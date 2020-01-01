<template>
  <div class="host-describe" :class="{'is-mobile': isMobile}">
    <p>运行时间：116 days, 7:07:53.31</p>
    <p>设备名称：WIN-4MITTOMD32B</p>
    <p>系统进程数：81</p>
    <p>系统物理内存容量（GB）：30.93</p>
    <p>系统提供的服务数：79</p>
    <p>系统描述：Hardware: Intel64 Family 6 Model 62 Stepping 4 AT/AT COMPATIBLE - Software: Windows Version 6.1 (Build 7601 Multiprocessor Free)</p>
    <p>系统主机会话数：1</p>
    <p>当前系统时间：2019年12月29日20时27分12秒</p>
    <p>品牌/型号：Microsoft</p>
    <p>运行时间：116 days, 7:07:53.31</p>
    <p>设备名称：WIN-4MITTOMD32B</p>
    <p>系统进程数：81</p>
    <p>系统物理内存容量（GB）：30.93</p>
    <p>系统提供的服务数：79</p>
    <p>系统描述：Hardware: Intel64 Family 6 Model 62 Stepping 4 AT/AT COMPATIBLE - Software: Windows Version 6.1 (Build 7601 Multiprocessor Free)</p>
    <p>系统主机会话数：1</p>
    <p>当前系统时间：2019年12月29日20时27分12秒</p>
    <p>品牌/型号：Microsoft</p>
  </div>
</template>
<script>
export default {
  name: "HostDescribe",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return {};
  },
  computed: {
    isMobile() {
      return this.screenType === "mobile";
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.host-describe {
  // width: calc(100% + 40px);
  max-height: 250px;
  padding: 24px;
  overflow-y: auto;
  color: white;
}
.host-describe.is-mobile {
  max-height: none;
}
</style>