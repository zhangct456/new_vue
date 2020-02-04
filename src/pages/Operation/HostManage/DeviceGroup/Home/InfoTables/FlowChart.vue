<template>
  <div class="flow-chart">
    <div>
      <label>接口名称：</label>
      <el-select class="select" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >{{item.label}}</el-option>
      </el-select>
    </div>
    <el-row>
      <el-col :sm="24" :lg="16">
        <div>x</div>
      </el-col>
      <el-col :sm="24" :lg="8">
        <p>接口名称 : Intel(R)_PRO/1000_MT_Network_Connection</p>
        <p>IP地址 :</p>
        <p>发送字节数 : 1348133365</p>
        <p>接口状态 : up</p>
        <p>MAC地址 : 00:50:56:9f:0d:82</p>
        <p>接收字节总数 : 411448915</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "FlowChart",
  components: {},
  props: {},
  data() {
    return {
      value: "",
      options: [
        {
          value: "Intel(R)_PRO/1000_MT_Network_Connection",
          label: "Intel(R)_PRO/1000_MT_Network_Connection"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.flow-chart {
  padding: 0 24px;
  padding-bottom: 24px;
  color: white;
  .select {
    width: 50%;
  }
}
</style>