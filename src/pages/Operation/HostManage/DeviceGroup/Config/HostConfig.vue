<template>
  <div class="config-box" :class="{'is-mobile': isMobile}">
    <el-row class="form-row">
      <el-col class="label" :xs="8" :sm="8" :lg="3">设备名称：</el-col>
      <el-col :xs="16" :sm="16" :lg="5">
        <el-input v-model="name"></el-input>
      </el-col>
      <el-col class="label" :xs="8" :sm="8" :lg="3">类型：</el-col>
      <el-col :xs="16" :sm="16" :lg="5">
        <el-input v-model="type"></el-input>
      </el-col>
      <el-col class="label" :xs="8" :sm="8" :lg="3">IP地址：</el-col>
      <el-col :xs="16" :sm="16" :lg="5">
        <el-input v-model="ipAdress"></el-input>
      </el-col>
      <el-col class="label" :xs="8" :sm="8" :lg="3">设备品牌：</el-col>
      <el-col :xs="16" :sm="16" :lg="5">
        <el-select v-model="brand">
          <el-option value="aoc">aoc</el-option>
        </el-select>
      </el-col>
      <el-col class="label" :xs="8" :sm="8" :lg="3">型号：</el-col>
      <el-col :xs="16" :sm="16" :lg="5">
        <el-select v-model="model">
          <el-option value="aoc">aoc</el-option>
        </el-select>
      </el-col>
      <el-col class="label" :xs="8" :sm="8" :lg="3">版本号：</el-col>
      <el-col :xs="16" :sm="16" :lg="5">
        <el-select v-model="version">
          <el-option value="aoc">aoc</el-option>
        </el-select>
      </el-col>
      <el-col class="label" :xs="8" :sm="8" :lg="3">固定资产：</el-col>
      <el-col :xs="16" :sm="16" :lg="5">
        <el-input v-model="assets"></el-input>
      </el-col>
      <el-col class="label" :xs="8" :sm="8" :lg="3">AgentID：</el-col>
      <el-col :xs="16" :sm="16" :lg="5">
        <el-input v-model="agentid"></el-input>
      </el-col>
    </el-row>
    <el-row class="form-row">
      <el-col class="label" :xs="8" :sm="8" :lg="3">安装位置：</el-col>
      <el-col :xs="24" :sm="24" :lg="17">
        <el-input v-model="path"></el-input>
      </el-col>
    </el-row>
    <el-row class="button-box">
      <el-col :span="10" :offset="2">
        <el-button type="primary" size="medium">保存</el-button>
      </el-col>
      <el-col :span="10">
        <el-button type="primary" size="medium">取消</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HostConfig",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return {
      name: "",
      type: "",
      ipAdress: "",
      brand: "",
      model: "",
      version: "",
      assets: "",
      agentid: "",
      path: ""
    };
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
.config-box {
  padding: 24px;
  color: white;
  .form-row {
    line-height: 40px;
    .label {
      white-space: nowrap;
      text-align: right;
    }
  }
  .button-box {
    margin-top: 24px;
    .el-col {
      text-align: center;
    }
  }
}
.config-box.is-mobile {
  .form-row {
    .label {
      text-align: left;
    }
  }
}
</style>