<template>
  <div class="server-list" :class="{'is-mobile': isMobile}">
    <el-row class="form-row">
      <el-col class="label" :xs="{span: 8}" :sm="{span: 8}" :lg="{span: 2}">映像名称：</el-col>
      <el-col :xs="{span: 16}" :sm="{span: 16}" :lg="{span: 3}">
        <el-input v-model="imageName"></el-input>
      </el-col>
      <el-col class="label" :xs="{span: 8}" :sm="{span: 8}" :lg="{span: 2}">用户名：</el-col>
      <el-col :xs="{span: 16}" :sm="{span: 16}" :lg="{span: 3}">
        <el-input v-model="username"></el-input>
      </el-col>
      <el-col class="label" :xs="{span: 8}" :sm="{span: 8}" :lg="{span: 2}">CPU：</el-col>
      <el-col :xs="{span: 16}" :sm="{span: 16}" :lg="{span: 3}">
        <el-input v-model="cpu"></el-input>
      </el-col>
      <el-col class="btn-box" :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 5}">
        <el-button type="primary">关闭</el-button>
        <el-button type="primary">重启</el-button>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 4}">
        <el-input v-model="keyword" placeholder="搜索.."></el-input>
      </el-col>
    </el-row>
    <el-table
      class="table"
      :data="tableData"
      :highlight-current-row="false"
      :header-cell-style="{ backgroundColor: '#2e7ead', color: '#fff' }"
      :row-style="rowStyle"
      :cell-style="{color: '#999'}"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="type" label="PID"></el-table-column>
      <el-table-column prop="note" label="状态"></el-table-column>
      <el-table-column prop="brand" label="描述"></el-table-column>
      <el-table-column prop="location" label="启动类型"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ServerList",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return {
      imageName: "",
      username: "",
      cpu: "",
      keyword: "",
      tableData: [{}]
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
.server-list {
  padding: 24px;
  color: white;
  .form-row {
    line-height: 40px;
    .label {
      text-align: right;
    }
    .btn-box {
      padding-right: 12px;
      text-align: right;
    }
  }
  .table {
    margin-top: 12px;
  }
}
.server-list.is-mobile {
  .form-row {
    .label {
      text-align: left;
    }
    .btn-box {
      padding-right: 0;
    }
  }
}
</style>