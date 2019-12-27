<template>
  <div class="table-box">
    <el-table
      :data="tableData"
      :highlight-current-row="false"
      :header-cell-style="{ backgroundColor: '#2e7ead', color: '#999' }"
      :row-style="rowStyle"
      :cell-style="{color: '#999'}"
      style="width: 100%"
    >
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="note" label="型号"></el-table-column>
      <el-table-column prop="brand" label="品牌"></el-table-column>
      <el-table-column prop="location" label="安装位置"></el-table-column>
      <el-table-column prop="status" label="在线状态"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "RunHost",
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "运维主机",
          type: "windows",
          status: "在线"
        },
        {
          id: 1,
          name: "DHCP服务器",
          type: "windows",
          status: "在线"
        },
        {
          id: 1,
          name: "财务服务器",
          type: "windows",
          status: "在线"
        }
      ]
    };
  },
  computed: {},
  methods: {
    rowStyle(row) {
      if (row.rowIndex % 2 == 0) {
        return { backgroundColor: "#153c66" };
      } else {
        return { backgroundColor: "#2e7ead" };
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.table-box {
  padding: 24px;
}
</style>