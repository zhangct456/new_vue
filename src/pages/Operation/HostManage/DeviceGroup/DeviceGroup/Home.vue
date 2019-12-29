<template>
  <div class="device-group-home">
    <el-row class="info-modular-row">
      <el-col class="info-modular-box" :sm="24" :lg="8">
        <div class="info-modular">
          <div class="title">资产检测</div>
          <Assets></Assets>
        </div>
      </el-col>
      <el-col class="info-modular-box" :sm="24" :lg="8">
        <div class="info-modular">
          <div class="title">运行状态</div>
          <RuningStatus></RuningStatus>
        </div>
      </el-col>
      <el-col class="info-modular-box" :sm="24" :lg="8">
        <div class="info-modular">
          <div class="title">主机描述</div>
          <HostDescribe></HostDescribe>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="info-modular-box" :span="24">
        <div class="info-modular">
          <InfoTables></InfoTables>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Assets from "./Home/Assets";
import RuningStatus from "./Home/RuningStatus";
import HostDescribe from "./Home/HostDescribe";
import InfoTables from "./Home/InfoTables";

export default {
  name: "Home",
  components: { Assets, RuningStatus, HostDescribe, InfoTables },
  props: {},
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
.info-row {
  display: flex;
}
</style>