<template>
  <div>
    <el-row class="input-content" :class="{'is-mobile': isMobile}">
      <el-col :sm="24" :lg="4">
        <el-col class="label" :span="10">进程号：</el-col>
        <el-col :span="14">
          <el-input v-model="processNo"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="24" :lg="4">
        <el-col class="label" :span="10">进程名称：</el-col>
        <el-col :span="14">
          <el-input v-model="processName"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="24" :lg="4">
        <el-col class="label" :span="10">进程ID：</el-col>
        <el-col :span="14">
          <el-input v-model="processId"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="24" :lg="4">
        <el-col class="label" :span="10">进程类型：</el-col>
        <el-col :span="14">
          <el-input v-model="processType"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="{span: 20, offset: 2}" :lg="{span: 4, offset: 3}">
        <el-input v-model="keyword" placeholder="搜索..."></el-input>
      </el-col>
    </el-row>
    <el-table
      class="table"
      :data="tableData"
      :highlight-current-row="false"
      :header-cell-style="{ backgroundColor: '#2e7ead', color: '#999' }"
      :row-style="rowStyle"
      :cell-style="{color: '#999'}"
      style="width: 100%"
    >
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="进程路径"></el-table-column>
      <el-table-column prop="type" label="进程类型"></el-table-column>
      <el-table-column prop="note" label="进程状态"></el-table-column>
      <el-table-column prop="brand" label="进程名称"></el-table-column>
      <el-table-column prop="location" label="进程号"></el-table-column>
      <el-table-column prop="status" label="进程参数"></el-table-column>
      <el-table-column prop="status" label="进程占用内存容量"></el-table-column>
      <el-table-column prop="status" label="进程ID"></el-table-column>
      <el-table-column prop="status" label="进程cpu使用率"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ProcessTable",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return {
      processNo: "",
      processName: "",
      processId: "",
      processType: "",
      keyword: "",
      tableData: []
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
  color: white;
  .label {
    white-space: nowrap;
    padding-left: 10px;
  }
}
.input-content.is-mobile {
  .label {
    text-align: left;
  }
}
.table {
  margin-top: 12px;
}
</style>