<template>
  <div
    class="base-box"
    :class="{
      'base-box-computer': isComputer,
      'base-box-mobile': isMobile,
      'base-box-ipad': isIpad,
      'computer-show-aside': showAside,
      'classic': styleType === 'classic',
      'business': styleType === 'business',
      'simplicity': styleType === 'simplicity'
    }"
  >
    <Header :menu-list="menuList"></Header>
    <Aside :menu-list="subMenuList"></Aside>
    <div class="content">
      <router-view />
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Aside from "./Aside.vue";
import Bottom from "./Bottom";

export default {
  name: "Base",
  components: { Header, Aside, Bottom },
  provide() {
    return { BaseLayout: this };
  },
  inject: ["screenType"],
  props: {},
  data() {
    return {
      showAside: true,
      styleType: "simplicity", // classic: 经典; business: 商务; simplicity: 简约;
      menuList: [
        { id: "1", title: "个人", icon: "el-icon-user" },
        { id: "2", title: "资产", icon: "el-icon-coin" },
        {
          id: "3",
          title: "运维",
          name: "operation", // 路由名，判断header状态
          path: "/operation",
          icon: "el-icon-monitor",
          children: [
            {
              title: "主机管理",
              icon: "el-icon-monitor",
              path: "/operation/host-manage",
              children: [
                {
                  title: "设备组",
                  icon: "el-icon-coin",
                  path: "/operation/host-manage/device-group"
                },
                { title: "设备", icon: "el-icon-monitor", path: "" },
                { title: "授权", icon: "el-icon-document-checked", path: "" }
              ]
            },
            {
              title: "拓扑管理",
              icon: "el-icon-document-copy",
              path: "",
              children: [
                {
                  title: "网络拓扑",
                  icon: "el-icon-coin",
                  path: ""
                },
                {
                  title: "服务器拓扑",
                  icon: "el-icon-coin",
                  path: ""
                },
                {
                  title: "应用拓扑",
                  icon: "el-icon-coin",
                  path: ""
                }
              ]
            }
          ]
        },
        { id: "4", title: "日志", icon: "el-icon-notebook-1" },
        { id: "5", title: "审计", icon: "el-icon-notebook-2" },
        { id: "6", title: "报修", icon: "el-icon-weixiu" },
        { id: "7", title: "配置", icon: "el-icon-s-operation" },
        { id: "8", title: "报警", icon: "el-icon-warning-outline" },
        { id: "9", title: "产量", icon: "el-icon-s-data" },
        { id: "10", title: "可视化", icon: "el-icon-picture-outline-round" },
        { id: "11", title: "可视化", icon: "el-icon-picture-outline-round" }
      ],
      subMenuList: []
    };
  },
  computed: {
    isComputer() {
      return this.screenType === "computer";
    },
    isMobile() {
      return this.screenType === "mobile";
    },
    isIpad() {
      return this.screenType === "ipad";
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {
    if (this.screenType === "mobile") {
      this.showAside = false;
    } else {
      this.showAside = true;
    }
    const path = this.$router.history.current.path;
    this.menuList.forEach((item, i) => {
      if (item.name && path.indexOf(item.path) != -1) {
        this.subMenuList = item.children;
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    const path = to.path;
    this.menuList.forEach((item, i) => {
      if (item.name && path.indexOf(item.name) != -1) {
        this.subMenuList = item.children;
      }
    });
    next();
  }
};
</script>
<style lang="less" scoped>
.base-box {
  width: 100%;
  height: 100%;
  // padding: 80px 0 25px 0px;
  background-color: #153c66;
  transition: 0.5s all ease;
  .content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #153c66;
    border: 1px solid #2e6fa7;
  }
}
// .computer-show-aside {
  // padding-left: 200px;
// }
// 风格1
.base-box.classic {
  background-color: #153c66;
  .content {
    background-color: #153c66;
  }
}
.base-box-computer.classic {
  padding: 80px 0 25px 0px;
}
.base-box-computer.classic.computer-show-aside {
  padding-left: 200px;
}
// 风格2
.base-box.business {
  background-color: #edeff3;
  .content {
    background-color: #edeff3;
  }
}
.base-box-computer.business {
  padding: 0 0 25px 60px;
}
.base-box-computer.business.computer-show-aside {
  padding-left: 260px;
}
// 风格3
.base-box.simplicity {
  background-color: #375d77;
  .content {
    background-color: #375d77;
    background: linear-gradient(to right, #366c9b 0%, #5ba7ad 100%);
  }
}
.base-box-computer.simplicity {
  padding: 40px 0 25px 0px;
}
.base-box-computer.simplicity.computer-show-aside {
  padding-left: 200px;
}

// 手机
.base-box-mobile {
  width: 100%;
  height: 100%;
  padding: 0;
  padding-top: 40px;
  padding-bottom: 25px;
  background-color: #153c66;
}
// ipad
.base-box-ipad {
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #153c66;
}
</style>
<style lang="less">
// 内容行样式
.info-modular-row {
  display: block;
}
.info-modular-row-flex {
  display: flex;
}
// 风格1
.base-box.classic {
  color: white;
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
  // el-tree
  .el-tree {
    .el-tree-node {
      background-color: #153c66;
      color: white;
      line-height: 30px;
    }
    .is-current > .el-tree-node__content {
      background-color: rgb(132, 169, 248);
    }
    .el-tree-node__content:hover {
      background-color: rgb(73, 73, 73);
    }
    .el-tree-node__content:focus {
      background-color: rgb(13, 14, 15);
    }
  }
  // tabs
  .el-tabs {
    .el-tabs__item {
      color: white;
    }
    .el-tabs__item.is-active {
      color: rgb(132, 169, 248);
    }
  }
  // el-progress
  .el-progress {
    .el-progress__text {
      color: white;
    }
  }
  // el-input
  .el-input {
    .el-input__inner {
      background-color: #153c66;
      color: white;
    }
  }
}
// 风格2
.base-box.business {
  color: #333333;
  .info-modular-box {
    padding: 5px;
    .info-modular {
      height: 100%;
      border: 1px solid #333333;
      overflow: hidden;
      .title {
        color: #333333;
        font-size: 16px;
        line-height: 30px;
        padding: 0 12px;
      }
    }
  }
  // tabs
  .el-tabs {
    .el-tabs__item.is-active {
      border-bottom-color: #409eff;
    }
  }
}
// 风格3
.base-box.simplicity {
  color: white;
  .info-modular-box {
    padding: 5px;
    border: 1px solid #bdd9f1;
    .info-modular {
      height: 100%;
      overflow: hidden;
      .title {
        color: white;
        font-size: 16px;
        line-height: 30px;
        padding: 0 12px;
      }
    }
  }
  // el-tree
  .el-tree {
    .el-tree-node {
      background-color: #3c769e;
      color: white;
      line-height: 30px;
    }
    .is-current > .el-tree-node__content {
      background-color: rgb(132, 169, 248);
    }
    .el-tree-node__content:hover {
      background-color: rgb(73, 73, 73);
    }
    .el-tree-node__content:focus {
      background-color: rgb(13, 14, 15);
    }
  }
  // tabs
  .el-tabs {
    .el-tabs__item {
      color: white;
    }
    .el-tabs__item.is-active {
      color: rgb(132, 169, 248);
    }
  }
  // el-progress
  .el-progress {
    .el-progress__text {
      color: white;
    }
  }
  // el-input
  .el-input {
    .el-input__inner {
      background: none;
      color: white;
    }
  }
}
</style>