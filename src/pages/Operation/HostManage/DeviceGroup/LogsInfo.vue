<template>
  <div class="logs-info" :class="{'is-mobile': isMobile}">
    <el-row class="form-row">
      <el-col class="label" :xs="{span: 8}" :sm="{span: 8}" :lg="{span: 2}">告警级别：</el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 3}">
        <el-input v-model="warnLevel"></el-input>
      </el-col>
      <el-col class="label" :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 2}">监测时间：</el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 5}">
        <el-date-picker v-model="startTime" type="date" placeholder="开始日期"></el-date-picker>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 5, offset: 1}">
        <el-date-picker v-model="endTime" type="date" placeholder="结束日期"></el-date-picker>
      </el-col>
      <el-col class="label" :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 6}">
        <el-button type="primary">查询</el-button>
        <el-button type="primary">情况</el-button>
        <el-button type="primary">关闭</el-button>
        <el-button type="primary">重启</el-button>
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
      <el-table-column prop="name" label="IP地址"></el-table-column>
      <el-table-column prop="type" label="企业ID"></el-table-column>
      <el-table-column prop="note" label="时间"></el-table-column>
      <el-table-column prop="brand" label="监测时间"></el-table-column>
      <el-table-column prop="location" label="事件"></el-table-column>
      <el-table-column prop="location" label="消息"></el-table-column>
      <el-table-column prop="location" label="告警级别"></el-table-column>
      <el-table-column prop="location" label="告警类型"></el-table-column>
      <el-table-column prop="location" label="模块"></el-table-column>
      <el-table-column prop="location" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "LogsInfo",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return { warnLevel: "", startTime: "", endTime: "", tableData: [] };
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
.logs-info {
  padding: 24px;
  color: white;
  .form-row {
    line-height: 40px;
    .label {
      white-space: nowrap;
      text-align: right;
    }
  }
  .table {
    margin-top: 12px;
  }
}
.logs-info.is-mobile {
  .form-row {
    .label {
      text-align: left;
    }
  }
}
</style>