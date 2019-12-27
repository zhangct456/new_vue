<template>
  <div class="aside">
    <ul class="menu">
      <li
        class="menu-li"
        v-for="(menu, i) of menuList"
        :class="{'menu-li-active': currentMenu[0] == i && currentMenu[1] == -1, 'menu-li-open': currentMenu[0] == i}"
        :style="{height: menu.children && currentMenu[0]==i ? menu.children.length * 40 + 50 + 'px' : 50 + 'px'}"
        :key="i"
      >
        <div class="menu-title" @click="choiceMenu(i, -1)">
          <span>
            {{menu.title}}
            <i class="el-icon-arrow-down"></i>
          </span>
        </div>
        <ul class="submenu" v-if="menu.children">
          <li
            class="submenu-li"
            v-for="(submenu, j) of menu.children"
            :class="{'submenu-li-active': currentMenu[0] == i && currentMenu[1] == j}"
            :key="j"
            @click="choiceMenu(i, j)"
          >
            <span>{{submenu.title}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "AsideMenu",
  components: {},
  props: {},
  inject: ["BaseLayout"],
  data() {
    return {
      currentMenu: [-1, -1],
      menuList: [
        {
          title: "主机管理",
          path: "",
          children: [
            { title: "设备组", path: "" },
            { title: "设备", path: "" },
            { title: "授权", path: "" }
          ]
        },
        {
          title: "拓扑管理",
          path: "",
          children: [
            { title: "网络拓扑", path: "" },
            { title: "服务器拓扑", path: "" },
            { title: "应用拓扑", path: "" }
          ]
        }
      ]
    };
  },
  computed: {},
  methods: {
    choiceMenu(i, j) {
      this.currentMenu = [i, j];
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.aside {
  width: 100%;
  height: 100%;
  background-color: #133a63;
  .menu {
    list-style: none;
    color: white;
    .menu-li {
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      transition: height 0.5s;
      .menu-title {
        padding: 0 24px;
        cursor: pointer;
        span {
          display: block;
          font-size: 16px;
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #46719c;
          i {
            line-height: 50px;
            float: right;
          }
        }
      }
      .menu-title:hover {
        background-color: #05c6d6;
        span {
          border-bottom: none;
        }
      }
      .submenu {
        list-style: none;
        background-color: #275b8e;
        .submenu-li {
          padding: 0 24px;
          cursor: pointer;
          span {
            display: block;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #46719c;
          }
        }
        .submenu-li:hover {
          background-color: #05c6d6;
          span {
            border-bottom: none;
          }
        }
        .submenu-li:last-child {
          span {
            border-bottom: none;
          }
        }
        .submenu-li-active {
          background-color: #05c6d6;
          span {
            border-bottom: none;
          }
        }
      }
    }
    .menu-li-active {
      height: auto;
      .menu-title {
        background-color: #05c6d6;
        span {
          border-bottom: none;
        }
      }
    }
    .menu-li-open {
      height: auto;
      .menu-title {
        span {
          border-bottom: none;
        }
      }
    }
  }
}
</style>