<template>
  <div class="device-group">
    <div class="device-menu" :class="{'is-mobile': isMobile}">
      <el-tree :data="menuList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="device-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="主页" name="home">
          <Home></Home>
        </el-tab-pane>
        <el-tab-pane label="配置" name="config">配置</el-tab-pane>
        <el-tab-pane label="服务列表" name="server">服务列表</el-tab-pane>
        <el-tab-pane label="日志信息" name="loginfo">日志信息</el-tab-pane>
        <el-tab-pane label="事件" name="event">事件</el-tab-pane>
      </el-tabs>
      <div class="ctrl-button">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>开机</el-dropdown-item>
            <el-dropdown-item>关机</el-dropdown-item>
            <el-dropdown-item>重启</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            登录
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown"></el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import Home from "./DeviceGroup/Home";

export default {
  name: "DeviceGroup",
  components: { Home },
  props: {},
  inject: ["screenType"],
  data() {
    return {
      activeName: "home",
      menuList: [
        {
          label: "设备组",
          children: [
            { label: "运维主机" },
            { label: "DHCP服务器" },
            { label: "财务服务器" },
            { label: "公寓1" },
            { label: "核心交换机" },
            { label: "赵志斌电脑" },
            { label: "阅卷系统" },
            { label: "访客通数据库" },
            {
              label: "教师办公楼",
              children: [
                { label: "教师办汇聚交换机" },
                { label: "接入交换机1" },
                { label: "接入交换机2" },
                { label: "接入交换机3" },
                { label: "接入交换机4" }
              ]
            },
            {
              label: "行政楼",
              children: [
                { label: "汇聚交换机" },
                { label: "XZ-7F-1" },
                { label: "XZ-7F-2" }
              ]
            },
            {
              label: "男生公寓",
              children: [
                { label: "NSGY-7F-1" },
                { label: "NSGY-7F-2" },
                { label: "NSGY-7F-3" },
                { label: "NSGY-7F-4" },
                { label: "男生公寓汇聚" }
              ]
            },
            {
              label: "无线设备",
              children: [
                { label: "AC控制器" },
                { label: "教办2F西交换机" },
                { label: "教办4F东交换机" },
                { label: "教办4F西交换机" },
                { label: "行政7F无线交换机" },
                { label: "1#无线交换机" },
                { label: "2#无线交换机" },
                { label: "3#无线交换机" },
                { label: "4#无线交换机" }
              ]
            },
            {
              label: "3#教学楼",
              children: [
                { label: "3#接入交换机1" },
                { label: "3#接入交换机2" },
                { label: "3#汇聚" }
              ]
            },
            {
              label: "旧校区",
              children: [
                { label: "旧校区核心交换机" },
                { label: "图书馆交换机" },
                { label: "教学楼7FA" },
                { label: "教学楼5FA" },
                { label: "教学楼2FA" }
              ]
            },
            {
              label: "4#教学楼",
              children: [
                { label: "4#汇聚交换机" },
                { label: "4#接入交换机1" },
                { label: "4#接入交换机1" }
              ]
            },
            {
              label: "2#教学楼",
              children: [{ label: "汇聚交换机" }]
            },
            {
              label: "1#教学楼",
              children: [{ label: "1#汇聚交换机" }]
            },
            {
              label: "实验楼",
              children: [{ label: "实验楼汇聚" }]
            },
            {
              label: "交付客户",
              children: [{ label: "山西省实验中学" }]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  computed: {
    isMobile() {
      return this.screenType === "mobile";
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },

    handleClick(data) {
      console.log(this.activeName);
    }
  }
};
</script>
<style lang="less" scoped>
.device-group {
  display: flex;
  min-height: 100%;
  .device-menu {
    width: 200px;
    border: 1px solid #0490d0;
  }
  .device-content {
    position: relative;
    flex: 10;
    padding: 0 20px;
    .ctrl-button {
      position: absolute;
      right: 30px;
      top: 0;
      line-height: 40px;
      .el-dropdown {
        margin-left: 15px;
        cursor: pointer;
        color: white;
      }
    }
  }
}
</style>
<style>
.device-menu .el-tree-node {
  background-color: #153c66;
  color: white;
  line-height: 30px;
}
.device-menu .is-current > .el-tree-node__content {
  background-color: rgb(132, 169, 248);
}
.device-menu .el-tree-node__content:hover {
  background-color: rgb(73, 73, 73);
}
.device-menu .el-tree-node__content:focus {
  background-color: rgb(13, 14, 15);
}
.device-content .el-tabs__item {
  color: white;
}
.device-content .el-tabs__item.is-active {
  color: rgb(132, 169, 248);
}
</style>