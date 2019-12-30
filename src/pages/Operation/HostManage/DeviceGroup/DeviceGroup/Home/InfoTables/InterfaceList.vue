<template>
  <div>
    <el-row class="input-content" :class="{'is-mobile': isMobile}">
      <el-col :sm="24" :lg="5">
        <el-col class="label" :span="10">接口号：</el-col>
        <el-col :span="14">
          <el-input v-model="interfaceNo"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="24" :lg="5">
        <el-col class="label" :span="10">MTU：</el-col>
        <el-col :span="14">
          <el-input v-model="mtu"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="24" :lg="5">
        <el-col class="label" :span="10">速率：</el-col>
        <el-col :span="14">
          <el-input v-model="rate"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="{span: 20, offset: 2}" :lg="{span: 4, offset: 4}">
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
      <el-table-column prop="name" label="速率"></el-table-column>
      <el-table-column prop="type" label="接受字节总数"></el-table-column>
      <el-table-column prop="note" label="接受单播报文数"></el-table-column>
      <el-table-column prop="brand" label="接口类型"></el-table-column>
      <el-table-column prop="location" label="接口状态"></el-table-column>
      <el-table-column prop="status" label="接口名称"></el-table-column>
      <el-table-column prop="status" label="发送字节总数"></el-table-column>
      <el-table-column prop="status" label="MTU"></el-table-column>
      <el-table-column prop="status" label="MAC地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "InterfaceList",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return {
      interfaceNo: "",
      mtu: "",
      rate: "",
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