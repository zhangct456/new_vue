<template>
  <div class="icon-upload">
    <div class="icon-box">
      <img src="@/assets/logo.jpg" />
    </div>
    <el-row class="button-box">
      <el-col :span="10" :offset="2">
        <el-button type="primary" size="medium">上传</el-button>
      </el-col>
      <el-col :span="10">
        <el-button type="primary" size="medium">下载</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "IconUpload",
  components: {},
  props: {},
  data() {
    return {
      fileList: [],
      flie: ""
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
.icon-upload {
  padding: 24px;
}
.icon-box {
  height: 120px;
  line-height: 120px;
  text-align: center;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #2e6fa7;
  img {
    vertical-align: middle;
  }
}
.button-box {
  margin-top: 24px;
  .el-col {
    text-align: center;
  }
}
</style>