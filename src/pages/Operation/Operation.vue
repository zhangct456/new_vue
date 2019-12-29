<template>
  <div>
    <el-row>
      <el-col class="info-modular-box" :sm="24" :lg="12">
        <div class="info-modular">
          <div class="title">主机运行状态</div>
          <RunStatus></RunStatus>
        </div>
      </el-col>
      <el-col class="info-modular-box" :sm="24" :lg="12">
        <div class="info-modular">
          <div class="title">主机状态</div>
          <HostStatus></HostStatus>
        </div>
      </el-col>
      <el-col class="info-modular-box" :sm="24" :lg="12">
        <div class="info-modular">
          <div class="title">运行主机</div>
          <RunHost></RunHost>
        </div>
      </el-col>
      <el-col class="info-modular-box" :sm="24" :lg="12">
        <div class="info-modular">
          <div class="title">监控主机运行状态</div>
          <MonitorStatus></MonitorStatus>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RunStatus from "./Operation/RunStatus";
import HostStatus from "./Operation/HostStatus";
import RunHost from "./Operation/RunHost";
import MonitorStatus from "./Operation/MonitorStatus";

export default {
  name: "Operation",
  components: { RunStatus, HostStatus, RunHost, MonitorStatus },
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
</style>