<template>
  <div>
    <el-row class="input-content">
      <el-col :sm="{span: 20, offset: 2}" :lg="{span: 4, offset: 19}">
        <el-input v-model="keyword" placeholder="搜索..."></el-input>
      </el-col>
    </el-row>
    <el-table
      class="table"
      :data="tableData"
      :highlight-current-row="false"
      :header-cell-style="{ backgroundColor: '#2e7ead', color: '#999', textAlign: 'center' }"
      :row-style="rowStyle"
      :cell-style="{color: '#999'}"
      style="width: 100%"
    >
      <el-table-column prop="id" label="序号" width="100"></el-table-column>
      <el-table-column prop="name" label="连接状态"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TcpList",
  components: {},
  props: {},
  data() {
    return {
      keyword: "",
      tableData: []
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    rowStyle(row) {
      if (row.rowIndex % 2 == 0) {
        return { backgroundColor: "#153c66" };
      } else {
        return { backgroundColor: "#2e7ead" };
      }
    }
  }
};
</script>

<style lang="less" scoped>
.input-content {
  line-height: 40px;
}
.table {
  margin-top: 12px;
}
</style>