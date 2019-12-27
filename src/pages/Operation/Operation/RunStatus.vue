<template>
  <div>
    <div class="host-list">
      <el-row>
        <el-col :span="4" v-for="(item, i) of hostList" :key="i">
          <span>
            <i class="el-icon-s-platform"></i>
          </span>
          <span>{{item.name}}</span>
        </el-col>
      </el-row>
    </div>
    <div class="echart-box">
      <div class="echart" ref="echart"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RunStatus",
  components: {},
  props: {},
  data() {
    return {
      hostList: [{ name: "ens34" }, { name: "ens35" }],
      echart: null
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.echart = this.$echarts.init(this.$refs.echart);
    setTimeout(() => {
      this.drawEchart();
    }, 0);
  },
  methods: {
    drawEchart() {
      this.echart.setOption({
        title: {
          text: "折线图堆叠",
          textStyle: {
            color: "#ffffff"
          }
        },
        textStyle: {
          color: "#ffffff"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "1%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
      this.echart.resize();
    }
  }
};
</script>
<style lang="less" scoped>
.host-list {
  margin-top: 12px;
  padding: 0 24px;
  .el-row {
    list-style: none;
    background-color: #2e6fa7;
    .el-col {
      padding: 5px 0;
      span {
        display: block;
        line-height: 20px;
        text-align: center;
        color: white;
        i {
          font-size: 30px;
          color: #00b7ee;
        }
      }
    }
  }
}
.echart-box {
  height: 300px;
  padding: 24px;
  .echart {
    height: 200px;
  }
}
</style>