<template>
  <div class="aside" :class="BaseLayout.styleType">
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
  props: {
    menuList: {
      default: []
    },
    currentMenu: {
      default: [-1, -1]
    }
  },
  inject: ["BaseLayout"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    choiceMenu(i, j) {
      this.$emit("choiceMenu", [i, j]);
      if (i !== -1 && j !== -1) {
        if (this.menuList[i].children[j].path) {
          this.$router.push({ path: this.menuList[i].children[j].path });
        }
      } else {
        if (this.menuList[i].path) {
          this.$router.push({ path: this.menuList[i].path });
        }
      }
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
.aside.business {
  .menu {
    .menu-li {
      .menu-title {
        span {
          border-bottom: none;
        }
      }
      .menu-title:hover {
        background-color: #252525;
      }
      .submenu {
        background-color: #4a4d51;
        .submenu-li {
          span {
            border-bottom: none;
          }
        }
        .submenu-li:hover {
          background-color: #252525;
        }
        .submenu-li-active {
          background-color: #252525;
        }
      }
    }
    .menu-li-active {
      .menu-title {
        background-color: #252525;
      }
    }
  }
}
.aside.simplicity {
  .menu {
    .menu-li {
      .menu-title {
        span {
          border-bottom: none;
        }
      }
      .menu-title:hover {
        background-color: #1a3d5d;
      }
      .submenu {
        background-color: #345676;
        .submenu-li {
          span {
            border-bottom: none;
          }
        }
        .submenu-li:hover {
          background-color: #1a3d5d;
        }
        .submenu-li-active {
          background-color: #1a3d5d;
        }
      }
    }
    .menu-li-active {
      .menu-title {
        background-color: #1a3d5d;
      }
    }
  }
}
</style>