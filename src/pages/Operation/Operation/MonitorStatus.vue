<template>
  <div>
    <div class="echart-box">
      <div class="echart" ref="echarts"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MonitorStatus",
  components: {},
  props: {},
  data() {
    return {
      echart: null
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.echart = this.$echarts.init(this.$refs.echarts);
    setTimeout(() => {
      this.drawEchart();
    }, 0);
  },
  methods: {
    drawEchart() {
      this.echart.setOption({
        legend: {
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {},
        textStyle: {
          color: "#fff"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "1%",
          containLabel: true
        },
        dataset: {
          dimensions: ["product", "2015", "2016", "2017"],
          source: [
            {
              product: "Matcha Latte",
              "2015": 43.3,
              "2016": 85.8,
              "2017": 93.7
            },
            { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
            {
              product: "Cheese Cocoa",
              "2015": 86.4,
              "2016": 65.2,
              "2017": 82.5
            },
            {
              product: "Walnut Brownie",
              "2015": 72.4,
              "2016": 53.9,
              "2017": 39.1
            }
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      });
      this.echart.resize();
    }
  }
};
</script>
<style lang="less" scoped>
.echart-box {
  height: 300px;
  padding: 24px;
  .echart {
    height: 200px;
  }
}
</style>