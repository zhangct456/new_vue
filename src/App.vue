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
    let screenType = "computer";
    if (screenWidth > 1280) {
      screenType = "computer";
    } else if (screenWidth > 1000) {
      screenType = "ipad";
    } else {
      screenType = "mobile";
    }
    return {
      screenType: screenType
    };
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
// 覆盖element样式
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
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #999999;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
