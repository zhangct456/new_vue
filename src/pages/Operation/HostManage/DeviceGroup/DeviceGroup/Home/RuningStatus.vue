<template>
  <div>
    <el-row class="running-status-info">
      <el-col class="running-status" :span="8">
        <el-progress type="dashboard" :width="100" :percentage="cpu" :color="customColorMethod"></el-progress>
      </el-col>
      <el-col class="running-status" :span="8">
        <el-progress type="dashboard" :width="100" :percentage="storge" :color="customColorMethod"></el-progress>
      </el-col>
      <el-col class="running-status" :span="8">
        <el-progress type="dashboard" :width="100" :percentage="disk" :color="customColorMethod"></el-progress>
      </el-col>
    </el-row>
    <el-row class="running-status-title">
      <el-col class="status-title" :span="8">CPU</el-col>
      <el-col class="status-title" :span="8">内存</el-col>
      <el-col class="status-title" :span="8">硬盘</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "RunningStatus",
  components: {},
  props: {},
  data() {
    return {
      cpu: 65,
      storge: 12,
      disk: 90
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    customColorMethod(percentage) {
      if (percentage < 60) {
        return "#67c23a";
      } else if (percentage < 80) {
        return "#e6a23c";
      } else {
        return "#ff4949";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.running-status-info {
  .running-status {
    padding-top: 50px;
    text-align: center;
    .el-progress {
      width: 100px;
    }
  }
}
.running-status-title {
  color: white;
  padding-bottom: 50px;
  .status-title {
    text-align: center;
  }
}
</style>
<style>
.running-status-info .el-progress__text {
  color: white;
}
</style>