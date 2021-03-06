<template>
  <div class="device-group" :class="{'is-mobile': isMobile}">
    <div
      class="device-menu"
      :class="{
        'open-menu': menuOnMobile,
        'classic': BaseLayout.styleType === 'classic',
        'business': BaseLayout.styleType === 'business',
        'simplicity': BaseLayout.styleType === 'simplicity'
      }"
      ref="menuBox"
    >
      <el-tree :data="menuList" :props="defaultProps" @node-click="handleMenuClick"></el-tree>
    </div>
    <div class="device-content">
      <div class="ctrl-button">
        <div class="current-menu-seleced" ref="menuOpenButton">
          <span @click="showMenuList">
            <i class="el-icon-back"></i>
            {{selectedMenu}}
          </span>
        </div>
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
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="主页" name="home">
          <Home></Home>
        </el-tab-pane>
        <el-tab-pane label="配置" name="config">
          <Config></Config>
        </el-tab-pane>
        <el-tab-pane label="服务列表" name="server">
          <ServerList></ServerList>
        </el-tab-pane>
        <el-tab-pane label="日志信息" name="loginfo">
          <LogsInfo></LogsInfo>
        </el-tab-pane>
        <el-tab-pane label="事件" name="event">
          <EventList></EventList>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Home from "./DeviceGroup/Home";
import Config from "./DeviceGroup/Config";
import ServerList from "./DeviceGroup/ServerList";
import LogsInfo from "./DeviceGroup/LogsInfo";
import EventList from "./DeviceGroup/EventList";

import { domIsChild } from "@/utils";

export default {
  name: "DeviceGroup",
  components: { Home, Config, ServerList, LogsInfo, EventList },
  props: {},
  inject: ["screenType", "BaseLayout"],
  data() {
    return {
      activeName: "home",
      selectedMenu: "运维主机",
      menuList: [
        {
          label: "设备组",
          level: 1,
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
              level: 1,
              children: [
                { label: "汇聚交换机" },
                { label: "XZ-7F-1" },
                { label: "XZ-7F-2" }
              ]
            },
            {
              label: "男生公寓",
              level: 1,
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
              level: 1,
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
              level: 1,
              children: [
                { label: "3#接入交换机1" },
                { label: "3#接入交换机2" },
                { label: "3#汇聚" }
              ]
            },
            {
              label: "旧校区",
              level: 1,
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
              level: 1,
              children: [
                { label: "4#汇聚交换机" },
                { label: "4#接入交换机1" },
                { label: "4#接入交换机1" }
              ]
            },
            {
              label: "2#教学楼",
              level: 1,
              children: [{ label: "汇聚交换机" }]
            },
            {
              label: "1#教学楼",
              level: 1,
              children: [{ label: "1#汇聚交换机" }]
            },
            {
              label: "实验楼",
              level: 1,
              children: [{ label: "实验楼汇聚" }]
            },
            {
              label: "交付客户",
              level: 1,
              children: [{ label: "山西省实验中学" }]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      menuOnMobile: false
    };
  },
  computed: {
    isMobile() {
      return this.screenType === "mobile";
    }
  },
  created() {},
  mounted() {
    document.documentElement.addEventListener("click", this.closeMenuList);
  },
  destroyed() {
    document.documentElement.removeEventListener("click", this.closeMenuList);
  },
  methods: {
    handleMenuClick(data) {
      if (data.level == 1) {
        return;
      }
      this.selectedMenu = data.label;
      this.menuOnMobile = false;
    },

    handleTabClick(data) {
      console.log(this.activeName);
    },

    showMenuList() {
      this.menuOnMobile = true;
    },

    closeMenuList() {
      const e = event || window.event;
      const ele = e.srcElement;
      const menuOpenButton = this.$refs.menuOpenButton;
      const menuBox = this.$refs.menuBox;
      if (!domIsChild(ele, menuOpenButton) && !domIsChild(ele, menuBox)) {
        this.menuOnMobile = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.device-group {
  display: flex;
  min-height: 100%;
  .device-menu {
    min-width: 200px;
    width: 200px;
    border: 1px solid #0490d0;
  }
  .device-menu.classic {
    border: 1px solid #0490d0;
  }
  .device-menu.business {
    border: 1px solid #0490d0;
  }
  .device-menu.simplicity {
    border: 1px solid #bdd9f1;
  }
  .device-content {
    position: relative;
    flex: 10;
    padding: 0 20px;
    overflow: hidden;
    .ctrl-button {
      position: absolute;
      right: 30px;
      top: 0;
      line-height: 40px;
      z-index: 5;
      .current-menu-seleced {
        display: none;
      }
      .el-dropdown {
        margin-left: 15px;
        cursor: pointer;
        // color: white;
      }
    }
  }
}
.device-group.is-mobile {
  .device-menu {
    position: fixed;
    z-index: 100;
    top: 40px;
    bottom: 0;
    left: 0;
    width: 0px;
    min-width: 0px;
    background-color: #153c66;
    overflow-y: auto;
    transition: 0.5s all ease;
  }
  .device-menu.classic {
    background-color: #153c66;
  }
  .device-menu.business {
    background-color: #153c66;
  }
  .device-menu.simplicity {
    background-color: #3c769e;
  }
  .device-menu.open-menu {
    min-width: 200px;
    width: 200px;
  }
  .device-content {
    width: 100%;
    .ctrl-button {
      position: static;
      display: flex;
      border-bottom: 1px solid #ffffff;
      .current-menu-seleced {
        display: block;
        flex: 10;
        span {
          line-height: 40px;
          font-size: 14px;
          color: #05c6d6;
          i {
            font-size: 14px;
            color: #05c6d6;
          }
        }
      }
      .el-dropdown {
        flex: 1;
        min-width: 70px;
      }
    }
  }
}
</style>
<style>
</style>