<template>
  <div class="device-group-config">
    <el-row class="info-modular-row" :class="{'info-modular-row-flex': !isMobile}">
      <el-col class="info-modular-box" :sm="24" :lg="8">
        <div class="info-modular">
          <div class="title">图标</div>
          <IconUpload></IconUpload>
        </div>
      </el-col>
      <el-col class="info-modular-box" :sm="24" :lg="16">
        <div class="info-modular">
          <div class="title">配置</div>
          <HostConfig></HostConfig>
        </div>
      </el-col>
    </el-row>
    <el-row class="info-modular-row" :class="{'info-modular-row-flex': !isMobile}">
      <el-col class="info-modular-box" :sm="24" :lg="12">
        <div class="info-modular">
          <div class="title">协议</div>
          <Protocol></Protocol>
        </div>
      </el-col>
      <el-col class="info-modular-box" :sm="24" :lg="12">
        <div class="info-modular">
          <div class="title">参数</div>
          <ParamsConfig></ParamsConfig>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IconUpload from "./Config/IconUpload";
import HostConfig from "./Config/HostConfig";
import Protocol from "./Config/Protocol";
import ParamsConfig from "./Config/ParamsConfig";

export default {
  name: "Config",
  components: { IconUpload, HostConfig, Protocol, ParamsConfig },
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
<style>
</style>