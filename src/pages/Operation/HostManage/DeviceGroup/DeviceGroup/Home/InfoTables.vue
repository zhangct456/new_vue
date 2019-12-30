<template>
  <div class="info-tables">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="流量图" name="flow-chart">
        <FlowChart></FlowChart>
      </el-tab-pane>
      <el-tab-pane label="进程表" name="process-table">
        <ProcessTable></ProcessTable>
      </el-tab-pane>
      <el-tab-pane label="软件安装列表" name="software-list">
        <SoftwareList></SoftwareList>
      </el-tab-pane>
      <el-tab-pane label="路由表" name="route-list">
        <RouteList></RouteList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import FlowChart from "./InfoTables/FlowChart";
import ProcessTable from "./InfoTables/ProcessTable";
import SoftwareList from "./InfoTables/SoftwareList";
import RouteList from "./InfoTables/RouteList";

export default {
  name: "InfoTables",
  components: { FlowChart, ProcessTable, SoftwareList, RouteList },
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