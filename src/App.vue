<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  provide() {
    const screenWidth = document.body.clientWidth;
    return { screenType: screenWidth > 1000 ? "computer" : "mobile" };
  },
  mounted() {
    window.console.log(document.body.clientWidth);
    window.console.log(this.screenType);
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // color: white;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
// 内容行样式
.info-modular-row {
  display: block;
}
.info-modular-row-flex {
  display: flex;
}
.info-modular-box {
  padding: 5px;
  .info-modular {
    height: 100%;
    border-radius: 5px;
    border: 1px solid #2e6fa7;
    overflow: hidden;
    .title {
      color: white;
      font-size: 12px;
      line-height: 30px;
      padding: 0 24px;
      background-color: #2e6fa7;
    }
  }
}
// 覆盖element样式
.el-input .el-input__inner {
  background-color: #153c66;
  color: white;
}
.el-table__empty-block {
  background-color: #153c66;
  .el-table__empty-text {
    color: white;
  }
}
.el-table .el-table__body .el-table__row:hover {
  background-color: #007bff !important;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #007bff !important;
}
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #0490d0;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
