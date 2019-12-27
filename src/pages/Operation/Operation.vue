<template>
  <div>
    <el-row>
      <el-col class="box" :sm="24" :lg="12">
        <div class="info-modular">
          <div class="title">主机运行状态</div>
          <RunStatus></RunStatus>
        </div>
      </el-col>
      <el-col class="box" :sm="24" :lg="12"></el-col>
      <el-col class="box" :sm="24" :lg="12"></el-col>
      <el-col class="box" :sm="24" :lg="12"></el-col>
    </el-row>
  </div>
</template>

<script>
import RunStatus from "./Operation/RunStatus";

export default {
  name: "Operation",
  components: { RunStatus },
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
.box {
  padding: 5px;
  .info-modular {
    border-radius: 5px;
    border: 1px solid #2e6fa7;
    .title {
      color: white;
      font-size: 12px;
      line-height: 30px;
      padding: 0 24px;
      background-color: #2e6fa7;
    }
  }
}
</style>