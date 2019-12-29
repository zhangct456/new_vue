<template>
  <div class="info-tables">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="流量图" name="flow-chart">
        <FlowChart></FlowChart>
      </el-tab-pane>
      <el-tab-pane label="进程表" name="process-table">进程表</el-tab-pane>
      <el-tab-pane label="日志信息" name="loginfo">日志信息</el-tab-pane>
      <el-tab-pane label="事件" name="event">事件</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import FlowChart from "./InfoTables/FlowChart";

export default {
  name: "InfoTables",
  components: { FlowChart },
  props: {},
  data() {
    return {
      activeName: "flow-chart"
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClick(data) {
      console.log(data);
    }
  }
};
</script>
<style lang="less" scoped>
</style>