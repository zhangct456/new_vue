<template>
  <div>
    <el-row class="input-content" :class="{'is-mobile': isMobile}">
      <el-col :sm="24" :lg="6">
        <el-col class="label" :span="12">网络ip地址：</el-col>
        <el-col :span="12">
          <el-input v-model="ipAddress"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="{span: 20, offset: 2}" :lg="{span: 4, offset: 13}">
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
      <el-table-column prop="name" label="网络ip地址"></el-table-column>
      <el-table-column prop="name" label="网络子网掩码"></el-table-column>
      <el-table-column prop="name" label="网络最大重组数据包"></el-table-column>
      <el-table-column prop="name" label="MAC地址"></el-table-column>
      <el-table-column prop="name" label="流量设备名称"></el-table-column>
      <el-table-column prop="name" label="设备ID"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "IpList",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return {
      ipAddress: "",
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
    text-align: right;
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