<template>
  <div>
    <el-row class="input-content" :class="{'is-mobile': isMobile}">
      <el-col :sm="24" :lg="4">
        <el-col class="label" :span="12">设备类型：</el-col>
        <el-col :span="12">
          <el-input v-model="deviceType"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="24" :lg="5">
        <el-col class="label" :span="12">设备制造商和版本：</el-col>
        <el-col :span="12">
          <el-input v-model="deviceEdition"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="24" :lg="4">
        <el-col class="label" :span="12">设备ID：</el-col>
        <el-col :span="12">
          <el-input v-model="deviceId"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="24" :lg="4">
        <el-col class="label" :span="12">设备状态：</el-col>
        <el-col :span="12">
          <el-input v-model="deviceStatus"></el-input>
        </el-col>
      </el-col>
      <el-col :sm="{span: 20, offset: 2}" :lg="{span: 4, offset: 2}">
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
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="设备错误数"></el-table-column>
      <el-table-column prop="type" label="设备编号"></el-table-column>
      <el-table-column prop="note" label="设备类型"></el-table-column>
      <el-table-column prop="brand" label="设备状态"></el-table-column>
      <el-table-column prop="location" label="设备制造商和版本"></el-table-column>
      <el-table-column prop="status" label="设备ID"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "HardwareInfo",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return {
      deviceType: "",
      deviceEdition: "",
      deviceId: "",
      deviceStatus: "",
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