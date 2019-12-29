<template>
  <div class="assets-info">
    <el-row>
      <el-col>状态：在线</el-col>
    </el-row>
    <el-row>
      <el-col>固定资产号：1000001</el-col>
    </el-row>
    <el-row>
      <el-col>类型：windows</el-col>
    </el-row>
    <el-row>
      <el-col>品牌：aoc</el-col>
    </el-row>
    <el-row>
      <el-col>安装位置：c</el-col>
    </el-row>
    <el-row>
      <el-col>备注信息：---</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Assets",
  components: {},
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
.assets-info {
  padding: 24px;
}
</style>