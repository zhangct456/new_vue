<template>
  <div>
    <dv-full-screen-container class="page">
      <dv-loading v-show="!loadingFlag">Loading...</dv-loading>
      <div class="header">
        <div class="header-bg">
          <div class="header-shadow"></div>
          <!-- <dv-border-box-8 class="header-bg-light" :reverse="true" :dur="50"></dv-border-box-8> -->
        </div>
        <img class="header-content" src="static/fullpage/header.png" />
      </div>
      <div class="content">
        <div class="left">
          <div class="left-box left-box-1">
            <img src="static/fullpage/box1.png" />
            <div class="box-content">
              <div class="slider">
                <div class="slider-line" :style="{width: sliderWidth}">
                  <span class="percent">100%</span>
                </div>
                <span class="num">10000</span>
              </div>
              <div class="top-title">
                <span>TOP排行</span>
                <div class="line"></div>
              </div>
              <div class="top-slider">
                <div class="aslider" v-for="(item, index) of topSliderList" :key="index">
                  <span class="num">{{item.number}}</span>
                  <div class="slider-box">
                    <div
                      class="slider-line"
                      :style="{'height': item.number / 10000 * 30 + 10 + 'px'}"
                    ></div>
                  </div>
                  <span class="name">{{item.name}}</span>
                </div>
              </div>
              <div class="circle-list">
                <div class="acircle" v-for="(item, i) of topCircleList" :key="i">
                  <div class="circle-box">
                    <el-progress
                      type="circle"
                      :percentage="item.number"
                      :stroke-width="3"
                      :width="30"
                      :color="item.color"
                    ></el-progress>
                  </div>
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="left-box left-box-2">
            <img src="static/fullpage/box2.png" />
            <div class="box-content">
              <div class="water">
                <dv-water-level-pond :config="waterConfig" style="width:80px;height:80px" />
              </div>
              <div class="slider-list">
                <div class="slider-title">TOP排行</div>
                <div class="aslider" v-for="(item, i) of topSliderList" :key="i">
                  <div class="slider-line" :style="{'width': item.number / 100 + '%'}"></div>
                  <span class="no">NO.{{i + 1}}</span>
                  <span class="name">{{item.name}}</span>
                  <span class="number">{{item.number}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="left-box left-box-3">
            <img src="static/fullpage/box3.png" />
            <div class="box-content">
              <div class="circle">
                <el-progress
                  type="circle"
                  :stroke-width="10"
                  :width="80"
                  :percentage="88"
                  :color="['#00ea96', '#009b3c']"
                ></el-progress>
              </div>
              <div class="table">
                <div class="table-title">TOP排行</div>
                <div class="row" v-for="(item, i) of topSliderList" :key="i">
                  <div class="row-line"></div>
                  <div class="row-content">
                    <span class="no">NO.{{i + 1}}</span>
                    <span class="name">{{item.name}}</span>
                    <span class="number">{{item.number}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-box left-box-4">
            <img src="static/fullpage/box4.png" />
            <div class="box-content">
              <div class="slider">
                <div class="slider-line" :style="{width: sliderWidth2}">
                  <span class="percent">80%</span>
                </div>
                <span class="num">10000</span>
              </div>
              <div class="top-title">
                <span>TOP排行</span>
                <div class="line"></div>
              </div>
              <div class="top-slider">
                <div class="aslider" v-for="(item, index) of topSliderList" :key="index">
                  <span class="num">{{item.number}}</span>
                  <div class="slider-box">
                    <div
                      class="slider-line"
                      :style="{'height': item.number / 10000 * 30 + 10 + 'px'}"
                    ></div>
                  </div>
                  <span class="name">{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="center">
          <div class="map-box">
            <span class="map-title">生源地(全国)占比率</span>
            <img class="map-lenged" src="static/fullpage/lenged.png" />
            <div id="MapArea"></div>
            <div class="grade-box">
              <div class="grade-title">TOP排行</div>
              <div
                class="grade-slider"
                v-for="item of gradeList"
                :key="item.no"
                :style="{width: item.number / 10000 * 250 + 'px'}"
              >
                <span
                  class="no"
                  :class="{'no1': item.no == 1,'no2': item.no == 2,'no3': item.no == 3}"
                >NO.{{item.no}}</span>
                <span class="name">{{item.name}}</span>
                <span class="num">{{item.number}}</span>
              </div>
            </div>
            <div class="map-box-bottom">
              <span>实到人数 8888</span>
              <span>实到人数 8888</span>
              <span>报到率 88%</span>
              <div class="map-box-bottom-shadow"></div>
              <div class="angleLT"></div>
              <div class="angleLB"></div>
              <div class="angleRT"></div>
              <div class="angleRB"></div>
            </div>
            <div class="map-grid">
              <img src="static/fullpage/map-grid.png" />
            </div>
          </div>
          <div class="center-box">
            <img src="static/fullpage/box-table.png" />
            <div class="box-content">
              <div class="table-data">
                <div class="row" v-for="(item, i) of centerData" :key="i">
                  <div class="col col-1">{{item.no}}</div>
                  <div class="col col-2">{{item.name}}</div>
                  <div class="col col-3">{{item.shouldNum}}</div>
                  <div class="col col-4">{{item.actualNum}}</div>
                  <div class="col col-5">{{item.percent}}</div>
                  <div class="col col-6">
                    {{item.male}}:{{item.female}}
                    <div class="percent-box">
                      <div
                        class="percent-col"
                        :style="{marginLeft: ((item.male - item.female) / (item.male + item.female) * 20 - 85) + 'px'}"
                      >
                        <div class="percent-left"></div>
                        <div class="percent-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-box right-box-1">
            <img src="static/fullpage/box5.png" />
            <div class="box-content">
              <div class="circle">
                <el-progress
                  type="circle"
                  :stroke-width="10"
                  :width="80"
                  :percentage="88"
                  :color="['#00e4fc']"
                ></el-progress>
              </div>
              <div class="table">
                <div class="table-title">TOP排行</div>
                <div class="row" v-for="(item, i) of topSliderList" :key="i">
                  <div class="row-line"></div>
                  <div class="row-content">
                    <span class="no">NO.{{i + 1}}</span>
                    <span class="name">{{item.name}}</span>
                    <span class="number">{{item.number}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-box right-box-2">
            <img src="static/fullpage/box6.png" />
            <div class="box-content">
              <div class="slider">
                <div class="slider-line" :style="{width: sliderWidth3}">
                  <span class="percent">80%</span>
                </div>
                <span class="num">10000</span>
              </div>
              <div class="top-title">
                <span>TOP排行</span>
                <div class="line"></div>
              </div>
              <div class="top-slider">
                <div class="aslider" v-for="(item, index) of topSliderList" :key="index">
                  <span class="num">{{item.number}}</span>
                  <div class="slider-box">
                    <div
                      class="slider-line"
                      :style="{'height': item.number / 10000 * 30 + 10 + 'px'}"
                    ></div>
                  </div>
                  <span class="name">{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right-box right-box-3">
            <img src="static/fullpage/box7.png" />
            <div class="box-content">
              <div class="water">
                <dv-water-level-pond :config="waterConfig" style="width:80px;height:80px" />
              </div>
              <div class="slider-list">
                <div class="slider-title">TOP排行</div>
                <div class="aslider" v-for="(item, i) of topSliderList" :key="i">
                  <div class="slider-line" :style="{'width': item.number / 100 + '%'}"></div>
                  <span class="no">NO.{{i + 1}}</span>
                  <span class="name">{{item.name}}</span>
                  <span class="number">{{item.number}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right-box right-box-4">
            <img src="static/fullpage/box8.png" />
            <div class="box-content">
              <div class="slider">
                <div class="slider-line" :style="{width: sliderWidth4}">
                  <span class="percent">80%</span>
                </div>
                <span class="num">10000</span>
              </div>
              <div class="top-title">
                <span>TOP排行</span>
                <div class="line"></div>
              </div>
              <div class="slider-list">
                <div class="aslider" v-for="(item, i) of topSliderList" :key="i">
                  <span class="number">{{item.number}}</span>
                  <div class="slider-line">
                    <div
                      class="slider-line-sub"
                      :class="{'slider-line-sub-no' : 20 - (item.number / 10000 * 20) > j}"
                      :style="{opacity: (20 - j) / 20 * 0.7 + 0.3}"
                      v-for="(subitem, j) of lineArr"
                      :key="j"
                    ></div>
                  </div>
                  <span class="name">{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script>
export default {
  name: "FullPage",
  components: {},
  props: {},
  data() {
    return {
      loadingFlag: false,
      gradeListConfig: {
        data: [
          {
            name: "周口",
            value: 55
          },
          {
            name: "南阳",
            value: 120
          },
          {
            name: "西峡",
            value: 78
          },
          {
            name: "驻马店",
            value: 66
          },
          {
            name: "新乡",
            value: 80
          },
          {
            name: "信阳",
            value: 45
          },
          {
            name: "漯河",
            value: 29
          }
        ]
      },
      gradeList: [
        {
          no: 1,
          name: "山西省",
          number: 10000
        },
        {
          no: 2,
          name: "河南省",
          number: 9800
        },
        {
          no: 3,
          name: "河北省",
          number: 9600
        },
        {
          no: 4,
          name: "广东省",
          number: 9400
        },
        {
          no: 5,
          name: "辽宁省",
          number: 9200
        },
        {
          no: 6,
          name: "江苏省",
          number: 9000
        },
        {
          no: 7,
          name: "湖南省",
          number: 8800
        },
        {
          no: 8,
          name: "湖北省",
          number: 8600
        },
        {
          no: 9,
          name: "四川省",
          number: 8400
        },
        {
          no: 10,
          name: "福建省",
          number: 8200
        },
        {
          no: 11,
          name: "山东省",
          number: 8000
        }
      ],
      topSliderList: [
        {
          name: "山西省",
          number: 0
        },
        {
          name: "河南省",
          number: 0
        },
        {
          name: "河北省",
          number: 0
        },
        {
          name: "广东省",
          number: 0
        },
        {
          name: "辽宁省",
          number: 0
        }
      ],
      topCircleList: [
        {
          number: 88,
          name: "个人信息",
          color: ["#ca35ad", "#f9cbd7"]
        },
        {
          number: 88,
          name: "家庭信息",
          color: ["#d4e2a4", "#34c298"]
        },
        {
          number: 88,
          name: "健康信息",
          color: ["#ffb121", "#e84ca9"]
        },
        {
          number: 88,
          name: "校服信息",
          color: ["#2891dd", "#1db8d1"]
        },
        {
          number: 88,
          name: "照片信息",
          color: ["#d00054", "#f9b654"]
        }
      ],
      waterConfig: {
        data: [88],
        shape: "round",
        formatter: "{value}%"
      },
      centerData: [
        {
          no: "01",
          name: "信息填报",
          shouldNum: 8888,
          actualNum: 8888,
          percent: "88%",
          male: 1,
          female: 1
        },
        {
          no: "02",
          name: "班级报道",
          shouldNum: 8888,
          actualNum: 8888,
          percent: "88%",
          male: 1,
          female: 1
        },
        {
          no: "03",
          name: "宿舍报道",
          shouldNum: 8888,
          actualNum: 8888,
          percent: "88%",
          male: 1,
          female: 1
        },
        {
          no: "04",
          name: "缴纳费用",
          shouldNum: 8888,
          actualNum: 8888,
          percent: "88%",
          male: 1,
          female: 1
        },
        {
          no: "05",
          name: "绿色通道",
          shouldNum: 8888,
          actualNum: 8888,
          percent: "88%",
          male: 1,
          female: 2
        }
      ],
      sliderWidth: "20%",
      sliderWidth2: "20%",
      sliderWidth3: "20%",
      sliderWidth4: "20%",
      lineArr: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.loadingFlag = true;
    setTimeout(() => {
      jsMap.config("#MapArea", {
        name: "china",
        width: 400,
        height: 300,
        fill: {
          shanxi: "#ee2e6c",
          hebei: "#fea44a",
          henan: "#40c295",
          heilongjiang: "#0041f3",
          liaoning: "#0041f3",
          jilin: "#0041f3",
          tianjin: "#0041f3",
          shandong: "#0041f3",
          anhui: "#0041f3",
          jiangxi: "#0041f3",
          hunan: "#0041f3",
          guangdong: "#0041f3",
          neimenggu: "#0000b6",
          hubei: "#0000b6",
          guizhou: "#0000b6",
          guangxi: "#0000b6",
          yunnan: "#0000b6",
          fujian: "#0000b6",
          jiangsu: "#0000b6",
          zhejiang: "#0000b6",
          shaanxi: "#0000b600",
          ningxia: "#0000b600",
          gansu: "#0000b600",
          qinghai: "#0000b600",
          sichuan: "#0000b600",
          chongqing: "#0000b600",
          xizang: "#0000b600",
          xinjiang: "#0000b600",
          hainan: "#0000b600",
          taiwan: "#0000b600"
        },
        strokeColor: "#c3ffff",
        strokeWidth: 2,
        areaNameColor: "#fff",
        hoverFill: {
          shanxi: "#ee2e6c",
          hebei: "#fea44a",
          henan: "#40c295",
          heilongjiang: "#0041f3",
          liaoning: "#0041f3",
          jilin: "#0041f3",
          tianjin: "#0041f3",
          shandong: "#0041f3",
          anhui: "#0041f3",
          jiangxi: "#0041f3",
          hunan: "#0041f3",
          guangdong: "#0041f3",
          neimenggu: "#0000b6",
          hubei: "#0000b6",
          guizhou: "#0000b6",
          guangxi: "#0000b6",
          yunnan: "#0000b6",
          fujian: "#0000b6",
          jiangsu: "#0000b6",
          zhejiang: "#0000b6",
          shaanxi: "#0000b600",
          ningxia: "#0000b600",
          gansu: "#0000b600",
          qinghai: "#0000b600",
          sichuan: "#0000b600",
          chongqing: "#0000b600",
          xizang: "#0000b600",
          xinjiang: "#0000b600",
          hainan: "#0000b600",
          taiwan: "#0000b600"
        },
        areaName: true
      });
      this.sliderWidth = "100%";
      this.sliderWidth2 = "80%";
      this.sliderWidth3 = "80%";
      this.sliderWidth4 = "80%";
      this.topSliderList = [
        {
          name: "山西省",
          number: 10000
        },
        {
          name: "河南省",
          number: 9800
        },
        {
          name: "河北省",
          number: 9600
        },
        {
          name: "广东省",
          number: 9400
        },
        {
          name: "辽宁省",
          number: 9200
        }
      ];
    }, 0);
  }
};
</script>
<style lang="less" scoped>
.page {
  background-image: linear-gradient(#00002b, #000017);
  padding: 24px;
  .header {
    .header-bg {
      position: fixed;
      width: 57%;
      height: 110px;
      top: -18px;
      left: 21.5%;
      background: #00009b;
      border-radius: 10px;
      color: white;
      transform: perspective(250px) rotateX(-20deg);
      overflow: hidden;
      z-index: 10;
      .header-shadow {
        position: absolute;
        width: 200%;
        height: 100%;
        left: -50%;
        bottom: 1px;
        box-shadow: inset 0px 0px 22px 0px rgba(255, 255, 255, 1);
        z-index: 11;
      }
    }
    .header-content {
      position: fixed;
      z-index: 3;
      width: 40%;
      left: 30%;
      top: 12px;
      z-index: 12;
    }
  }
  .content {
    margin-top: 40px;
    display: flex;
    .left {
      flex: 2;
      .left-box {
        position: relative;
        margin-top: 10px;
        img {
          width: 100%;
        }
        .box-content {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
        }
      }
      .left-box-1 {
        .box-content {
          .slider {
            position: relative;
            margin-left: 10%;
            margin-top: 50px;
            width: 80%;
            height: 12px;
            border-radius: 10px;
            box-shadow: inset 0 0 9px 0 #00349b;
            border: 1px solid #0030fd;
            .slider-line {
              position: absolute;
              top: -1px;
              left: -1px;
              width: 20%;
              height: 12px;
              border-radius: 10px;
              background-image: linear-gradient(to right, #00349b, #00ecfd);
              transition: 1s all ease;
              .percent {
                position: absolute;
                display: block;
                font-size: 12px;
                color: #000034;
                line-height: 13px;
                right: 10px;
                transform: scale(0.7);
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                top: -1px;
                right: -2px;
                width: 14px;
                height: 14px;
                border-radius: 10px;
                background-color: #00ecfd;
                box-shadow: 7px 0 10px 0 #000087;
              }
            }
            .num {
              font-size: 12px;
              color: #6bffff;
              line-height: 13px;
              float: left;
              transform: scale(0.7);
            }
          }
          .top-title {
            margin-top: 10px;
            margin-left: 10%;
            margin-bottom: 2px;
            color: #00a6d4;
            font-size: 12px;
            span {
              transform: scale(0.5);
            }
            .line {
              position: relative;
              float: right;
              margin-right: 12%;
              margin-top: 7px;
              width: 66%;
              height: 2px;
              background-image: linear-gradient(to right, #0047c3, #8cefff);
              &::after {
                content: "";
                position: absolute;
                right: -1px;
                top: -1px;
                display: block;
                width: 4px;
                height: 4px;
                border-radius: 4px;
                background-color: #8cefff;
              }
            }
          }
          .top-slider {
            width: 80%;
            margin-left: 10%;
            display: flex;
            .aslider {
              flex: 1;
              .num {
                display: block;
                font-size: 12px;
                color: #00e7fe;
                text-align: center;
                transform: scale(0.7);
              }
              .slider-box {
                position: relative;
                width: 10px;
                height: 40px;
                margin: 0 auto;
                border-radius: 12px;
                border: 1px solid #041997;
                box-shadow: inset 0 0 10px 0 #000074;
                .slider-line {
                  position: absolute;
                  width: 10px;
                  height: 10px;
                  border-radius: 12px;
                  bottom: -1px;
                  left: -1px;
                  background-image: linear-gradient(to top, #003fad, #00e6fd);
                  transition: 1s all ease;
                }
              }
              .name {
                display: block;
                font-size: 12px;
                color: #00e7fe;
                text-align: center;
                transform: scale(0.5);
              }
            }
          }
          .circle-list {
            width: 80%;
            margin-left: 10%;
            display: flex;
            .acircle {
              flex: 1;
              padding-top: 5px;
              overflow: hidden;
              .circle-box {
                width: 30px;
                margin: 0 auto;
              }
              span {
                display: block;
                white-space: nowrap;
                margin-top: -5px;
                margin-left: -2.5px;
                font-size: 12px;
                color: #00e6fd;
                text-align: center;
                transform: scale(0.5);
              }
            }
          }
        }
      }
      .left-box-2 {
        .box-content {
        }
        .water {
          float: left;
          width: 50%;
          padding-top: 50px;
          padding-left: 35px;
        }
        .slider-list {
          width: 50%;
          float: right;
          padding-right: 30px;
          padding-top: 30px;
          .slider-title {
            text-align: right;
            font-size: 12px;
            color: #00a6d4;
          }
          .aslider {
            margin-top: 5px;
            position: relative;
            height: 12px;
            border-radius: 10px;
            box-shadow: inset 0 0 9px 0 #00349b;
            border: 1px solid #0030fd;
            .slider-line {
              position: absolute;
              top: -1px;
              left: -1px;
              width: 0%;
              height: 12px;
              border-radius: 10px;
              background-image: linear-gradient(to right, #00349b, #00ecfd);
              transition: 1s all ease;
            }
            .no {
              color: white;
              font-size: 12px;
              position: absolute;
              top: -3px;
              left: 0;
              transform: scale(0.7);
            }
            .name {
              color: white;
              font-size: 12px;
              position: absolute;
              top: -3px;
              left: 22px;
              transform: scale(0.7);
            }
            .number {
              color: white;
              font-size: 12px;
              position: absolute;
              top: -3px;
              right: 2px;
              transform: scale(0.7);
            }
          }
        }
      }
      .left-box-3 {
        .box-content {
          .circle {
            float: left;
            width: 50%;
            padding-top: 45px;
            padding-left: 34px;
          }
          .table {
            float: right;
            width: 50%;
            padding-top: 23px;
            padding-right: 20px;
            .table-title {
              font-size: 12px;
              color: #00a6d4;
              margin-bottom: 5px;
            }
            .row {
              .row-line {
                position: relative;
                float: right;
                width: 100%;
                height: 1px;
                background-image: linear-gradient(to right, #0047c3, #8cefff);
              }
              .row-content {
                font-size: 12px;
                color: #00a6d4;
                &::before {
                  content: "";
                  display: block;
                  float: left;
                  width: 6px;
                  height: 6px;
                  margin-top: 5px;
                  margin-left: 5px;
                  border-radius: 10px;
                  background-color: #00a6d4;
                }
                .no {
                  float: left;
                  display: block;
                  font-size: 12px;
                  transform: scale(0.7);
                }
                .name {
                  float: left;
                  display: block;
                  font-size: 12px;
                  transform: scale(0.7);
                }
                .number {
                  float: right;
                  display: block;
                  font-size: 12px;
                  transform: scale(0.7);
                }
              }
            }
          }
        }
      }
      .left-box-4 {
        .box-content {
          .slider {
            position: relative;
            margin-left: 10%;
            margin-top: 50px;
            width: 80%;
            height: 12px;
            border-radius: 10px;
            box-shadow: inset 0 0 9px 0 #00349b;
            border: 1px solid #0030fd;
            .slider-line {
              position: absolute;
              top: -1px;
              left: -1px;
              width: 20%;
              height: 12px;
              border-radius: 10px;
              background-image: linear-gradient(to right, #00349b, #00ecfd);
              transition: 1s all ease;
              .percent {
                position: absolute;
                display: block;
                font-size: 12px;
                color: #000034;
                line-height: 13px;
                right: 10px;
                transform: scale(0.7);
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                top: -1px;
                right: -2px;
                width: 14px;
                height: 14px;
                border-radius: 10px;
                background-color: #00ecfd;
                box-shadow: 7px 0 10px 0 #000087;
              }
            }
            .num {
              font-size: 12px;
              color: #6bffff;
              line-height: 13px;
              float: left;
              transform: scale(0.7);
            }
          }
          .top-title {
            margin-top: 10px;
            margin-left: 10%;
            margin-bottom: 2px;
            color: #00a6d4;
            font-size: 12px;
            span {
              transform: scale(0.5);
            }
            .line {
              position: relative;
              float: right;
              margin-right: 12%;
              margin-top: 7px;
              width: 66%;
              height: 2px;
              background-image: linear-gradient(to right, #0047c3, #8cefff);
              &::after {
                content: "";
                position: absolute;
                right: -1px;
                top: -1px;
                display: block;
                width: 4px;
                height: 4px;
                border-radius: 4px;
                background-color: #8cefff;
              }
            }
          }
          .top-slider {
            width: 80%;
            margin-left: 10%;
            display: flex;
            .aslider {
              flex: 1;
              .num {
                display: block;
                font-size: 12px;
                color: #00e7fe;
                text-align: center;
                transform: scale(0.7);
              }
              .slider-box {
                position: relative;
                width: 10px;
                height: 40px;
                margin: 0 auto;
                border-radius: 12px;
                border: 1px solid #041997;
                box-shadow: inset 0 0 10px 0 #000074;
                .slider-line {
                  position: absolute;
                  width: 10px;
                  height: 10px;
                  border-radius: 12px;
                  bottom: -1px;
                  left: -1px;
                  background-image: linear-gradient(to top, #fef3c8, #ff9b00);
                  transition: 1s all ease;
                }
              }
              .name {
                display: block;
                font-size: 12px;
                color: #00e7fe;
                text-align: center;
                transform: scale(0.5);
              }
            }
          }
        }
      }
    }
    .center {
      position: relative;
      flex: 7;
      padding: 10px 10px 0;
      .map-box {
        position: relative;
        height: 72%;
        box-shadow: inset 0 0 20px 0px #0070e5;
        background-image: linear-gradient(to bottom left, #0047de, 5%, #00003c);
        overflow: hidden;
        .map-title {
          color: #52e6ff;
          display: inline-block;
          line-height: 40px;
          font-size: 24px;
          padding: 0 12px;
          border: 1px solid #61b2ff;
          position: absolute;
          top: 50px;
          left: 100px;
          box-shadow: inset 0 0 10px 0 #0042c5;
        }
        .map-lenged {
          position: absolute;
          top: 51px;
          left: 350px;
          display: block;
          height: 40px;
        }
        #MapArea {
          width: 50%;
          height: 80%;
          position: absolute;
          left: 100px;
          top: 130px;
        }
        .grade-box {
          position: absolute;
          right: 150px;
          top: 140px;
          width: 250px;
          .grade-title {
            color: #77f6ff;
            font-size: 18px;
            margin-bottom: 20px;
          }
          .grade-slider {
            position: relative;
            margin-top: 5px;
            height: 15px;
            width: 250px;
            background-image: linear-gradient(to right, #003eb4, #01d4f1);
            border-radius: 10px;
            .no {
              position: absolute;
              display: inline-block;
              height: 18px;
              width: 45px;
              font-size: 12px;
              color: white;
              text-align: center;
              transform: scale(0.8);
            }
            .no1 {
              height: 18px;
              width: 60px;
              background-image: linear-gradient(to right, #ef79af, #fb356e);
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              margin-left: -5px;
              padding-left: 5px;
              &::after {
                content: "";
                width: 20px;
                height: 20px;
                background-color: #fb356e;
                position: absolute;
                right: -11px;
                top: -1px;
                -webkit-transform: rotate(45deg);
                transform: rotateX(45deg) rotate(45deg) rotateY(-9deg);
              }
            }
            .no2 {
              height: 18px;
              width: 60px;
              background-image: linear-gradient(to right, #fab10c, #f79754);
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              margin-left: -5px;
              padding-left: 5px;
              &::after {
                content: "";
                width: 20px;
                height: 20px;
                background-color: #f79754;
                position: absolute;
                right: -11px;
                top: -1px;
                -webkit-transform: rotate(45deg);
                transform: rotateX(45deg) rotate(45deg) rotateY(-9deg);
              }
            }
            .no3 {
              height: 18px;
              width: 60px;
              background-image: linear-gradient(to right, #13b788, #c1e0a8);
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              margin-left: -5px;
              padding-left: 5px;
              &::after {
                content: "";
                width: 20px;
                height: 20px;
                background-color: #c1e0a8;
                position: absolute;
                right: -11px;
                top: -1px;
                -webkit-transform: rotate(45deg);
                transform: rotateX(45deg) rotate(45deg) rotateY(-9deg);
              }
            }
            .name {
              position: absolute;
              font-size: 12px;
              left: 60px;
              color: white;
              transform: scale(0.7);
            }
            .num {
              position: absolute;
              font-size: 12px;
              right: 10px;
              color: #000041;
              transform: scale(0.9);
            }
          }
        }
        .map-box-bottom {
          position: absolute;
          left: 15%;
          bottom: 30px;
          width: 70%;
          height: 50px;
          line-height: 50px;
          color: #80fefc;
          border: 1px solid #0013c3;
          display: flex;
          overflow: hidden;
          span {
            flex: 1;
            text-align: center;
            font-size: 24px;
            border-left: dashed 2px #0085d9;
            &:first-child {
              border-left: none;
            }
          }
          .map-box-bottom-shadow {
            position: absolute;
            width: 100%;
            height: 1px;
            top: 0;
            box-shadow: 0px 3px 15px 14px #0034f8;
          }
          .angleLT {
            position: absolute;
            left: 0;
            top: 0;
            width: 10px;
            height: 10px;
            border-left: solid 2px #3ff3ff;
            border-top: solid 2px #3ff3ff;
          }
          .angleLB {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 10px;
            height: 10px;
            border-left: solid 2px #3ff3ff;
            border-bottom: solid 2px #3ff3ff;
          }
          .angleRT {
            position: absolute;
            right: 0;
            top: 0;
            width: 10px;
            height: 10px;
            border-right: solid 2px #3ff3ff;
            border-top: solid 2px #3ff3ff;
          }
          .angleRB {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 10px;
            height: 10px;
            border-right: solid 2px #3ff3ff;
            border-bottom: solid 2px #3ff3ff;
          }
        }
        .map-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            opacity: 0.1;
          }
        }
      }
      .center-box {
        position: absolute;
        width: calc(100% - 20px);
        bottom: 0;
        img {
          width: 100%;
        }
        .box-content {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          .table-data {
            padding-top: 60px;
            .row {
              line-height: 27px;
              text-align: center;
              color: turquoise;
              font-size: 14px;
              .col {
                float: left;
              }
              .col-1 {
                width: 20%;
              }
              .col-2 {
                width: 11%;
              }
              .col-3 {
                width: 20%;
              }
              .col-4 {
                width: 10%;
              }
              .col-5 {
                width: 21%;
              }
              .col-6 {
                width: 18%;
                text-align: left;
                .percent-box {
                  display: inline-block;
                  height: 10px;
                  width: 50px;
                  overflow: hidden;
                  .percent-col {
                    width: 200px;
                    height: 200px;
                    margin-top: -85px;
                    margin-left: -85px;
                    transform: rotate(45deg);
                    .percent-left {
                      float: left;
                      width: 100px;
                      height: 200px;
                      background-color: #00c1e8;
                    }
                    .percent-right {
                      float: left;
                      width: 100px;
                      height: 200px;
                      background-color: #f21754;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .right {
      flex: 2;
      .right-box {
        position: relative;
        margin-top: 10px;
        img {
          width: 100%;
        }
        .box-content {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
        }
      }
      .right-box-1 {
        .box-content {
          .circle {
            float: left;
            width: 50%;
            padding-top: 45px;
            padding-left: 34px;
          }
          .table {
            float: right;
            width: 50%;
            padding-top: 23px;
            padding-right: 20px;
            .table-title {
              font-size: 12px;
              color: #00a6d4;
              margin-bottom: 5px;
            }
            .row {
              .row-line {
                position: relative;
                float: right;
                width: 100%;
                height: 1px;
                background-image: linear-gradient(to right, #0047c3, #8cefff);
              }
              .row-content {
                font-size: 12px;
                color: #00a6d4;
                &::before {
                  content: "";
                  display: block;
                  float: left;
                  width: 6px;
                  height: 6px;
                  margin-top: 5px;
                  margin-left: 5px;
                  border-radius: 10px;
                  background-color: #00a6d4;
                }
                .no {
                  float: left;
                  display: block;
                  font-size: 12px;
                  transform: scale(0.7);
                }
                .name {
                  float: left;
                  display: block;
                  font-size: 12px;
                  transform: scale(0.7);
                }
                .number {
                  float: right;
                  display: block;
                  font-size: 12px;
                  transform: scale(0.7);
                }
              }
            }
          }
        }
      }
      .right-box-2 {
        .box-content {
          .slider {
            position: relative;
            margin-left: 10%;
            margin-top: 50px;
            width: 80%;
            height: 12px;
            border-radius: 10px;
            box-shadow: inset 0 0 9px 0 #00349b;
            border: 1px solid #0030fd;
            .slider-line {
              position: absolute;
              top: -1px;
              left: -1px;
              width: 20%;
              height: 12px;
              border-radius: 10px;
              background-image: linear-gradient(to right, #00349b, #00ecfd);
              transition: 1s all ease;
              .percent {
                position: absolute;
                display: block;
                font-size: 12px;
                color: #000034;
                line-height: 13px;
                right: 10px;
                transform: scale(0.7);
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                top: -1px;
                right: -2px;
                width: 14px;
                height: 14px;
                border-radius: 10px;
                background-color: #00ecfd;
                box-shadow: 7px 0 10px 0 #000087;
              }
            }
            .num {
              font-size: 12px;
              color: #6bffff;
              line-height: 13px;
              float: left;
              transform: scale(0.7);
            }
          }
          .top-title {
            margin-top: 10px;
            margin-left: 10%;
            margin-bottom: 2px;
            color: #00a6d4;
            font-size: 12px;
            span {
              transform: scale(0.5);
            }
            .line {
              position: relative;
              float: right;
              margin-right: 12%;
              margin-top: 7px;
              width: 66%;
              height: 2px;
              background-image: linear-gradient(to right, #0047c3, #8cefff);
              &::after {
                content: "";
                position: absolute;
                right: -1px;
                top: -1px;
                display: block;
                width: 4px;
                height: 4px;
                border-radius: 4px;
                background-color: #8cefff;
              }
            }
          }
          .top-slider {
            width: 80%;
            margin-left: 10%;
            display: flex;
            .aslider {
              flex: 1;
              .num {
                display: block;
                font-size: 12px;
                color: #00e7fe;
                text-align: center;
                transform: scale(0.7);
              }
              .slider-box {
                position: relative;
                width: 10px;
                height: 40px;
                margin: 0 auto;
                border-radius: 12px;
                border: 1px solid #041997;
                box-shadow: inset 0 0 10px 0 #000074;
                .slider-line {
                  position: absolute;
                  width: 10px;
                  height: 10px;
                  border-radius: 12px;
                  bottom: -1px;
                  left: -1px;
                  background-image: linear-gradient(to top, #fdac1b, #df32ac);
                  transition: 1s all ease;
                }
              }
              .name {
                display: block;
                font-size: 12px;
                color: #00e7fe;
                text-align: center;
                transform: scale(0.5);
              }
            }
          }
        }
      }
      .right-box-3 {
        .box-content {
        }
        .water {
          float: left;
          width: 50%;
          padding-top: 50px;
          padding-left: 35px;
        }
        .slider-list {
          width: 50%;
          float: right;
          padding-right: 30px;
          padding-top: 30px;
          .slider-title {
            text-align: right;
            font-size: 12px;
            color: #00a6d4;
          }
          .aslider {
            margin-top: 5px;
            position: relative;
            height: 12px;
            border-radius: 10px;
            box-shadow: inset 0 0 9px 0 #00349b;
            border: 1px solid #0030fd;
            .slider-line {
              position: absolute;
              top: -1px;
              left: -1px;
              width: 0%;
              height: 12px;
              border-radius: 10px;
              background-image: linear-gradient(to right, #00349b, #00ecfd);
              transition: 1s all ease;
            }
            .no {
              color: white;
              font-size: 12px;
              position: absolute;
              top: -3px;
              left: 0;
              transform: scale(0.7);
            }
            .name {
              color: white;
              font-size: 12px;
              position: absolute;
              top: -3px;
              left: 22px;
              transform: scale(0.7);
            }
            .number {
              color: white;
              font-size: 12px;
              position: absolute;
              top: -3px;
              right: 2px;
              transform: scale(0.7);
            }
          }
        }
      }
      .right-box-4 {
        .box-content {
          .slider {
            position: relative;
            margin-left: 10%;
            margin-top: 50px;
            width: 80%;
            height: 12px;
            border-radius: 10px;
            box-shadow: inset 0 0 9px 0 #00349b;
            border: 1px solid #0030fd;
            .slider-line {
              position: absolute;
              top: -1px;
              left: -1px;
              width: 20%;
              height: 12px;
              border-radius: 10px;
              background-image: linear-gradient(to right, #00349b, #00ecfd);
              transition: 1s all ease;
              .percent {
                position: absolute;
                display: block;
                font-size: 12px;
                color: #000034;
                line-height: 13px;
                right: 10px;
                transform: scale(0.7);
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                top: -1px;
                right: -2px;
                width: 14px;
                height: 14px;
                border-radius: 10px;
                background-color: #00ecfd;
                box-shadow: 7px 0 10px 0 #000087;
              }
            }
            .num {
              font-size: 12px;
              color: #6bffff;
              line-height: 13px;
              float: left;
              transform: scale(0.7);
            }
          }
          .top-title {
            margin-top: 10px;
            margin-left: 10%;
            margin-bottom: 2px;
            color: #00a6d4;
            font-size: 12px;
            span {
              transform: scale(0.5);
            }
            .line {
              position: relative;
              float: right;
              margin-right: 12%;
              margin-top: 7px;
              width: 66%;
              height: 2px;
              background-image: linear-gradient(to right, #0047c3, #8cefff);
              &::after {
                content: "";
                position: absolute;
                right: -1px;
                top: -1px;
                display: block;
                width: 4px;
                height: 4px;
                border-radius: 4px;
                background-color: #8cefff;
              }
            }
          }
          .slider-list {
            width: 80%;
            margin-left: 10%;
            display: flex;
            .aslider {
              flex: 1;
              .number {
                display: block;
                color: #00a6d4;
                font-size: 12px;
                text-align: center;
                transform: scale(0.7);
              }
              .slider-line {
                padding: 0 5px;
                .slider-line-sub {
                  height: 1px;
                  width: 100%;
                  margin-top: 2px;
                  background-color: #dd0034;
                }
                .slider-line-sub-no {
                  opacity: 0.1 !important;
                }
              }
              .name {
                display: block;
                color: #00a6d4;
                font-size: 12px;
                text-align: center;
                transform: scale(0.7);
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.acircle .el-progress--circle .el-progress__text,
.el-progress--dashboard .el-progress__text {
  transform: scale(0.6);
  top: 31%;
  color: #00e6fd;
}
.left-box-3 .el-progress--circle .el-progress__text,
.el-progress--dashboard .el-progress__text {
  transform: scale(1.8);
  top: 43%;
  color: #00e6fd;
}
.right-box-1 .el-progress--circle .el-progress__text,
.el-progress--dashboard .el-progress__text {
  transform: scale(1.8);
  top: 43%;
  color: #00e6fd;
}
</style>