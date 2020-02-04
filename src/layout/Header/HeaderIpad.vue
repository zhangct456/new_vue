<template>
  <div class="ipad-header">
    <div class="menu-button" v-show="!openMenuFlag" @click="openMenu">
      <i class="el-icon-menu"></i>
    </div>
    <div class="menu-box">
      <ul class="menu-list">
        <li
          :class="{'menu-li-active': activeId == menu.id}"
          v-for="(menu, i) of menuList"
          :key="i"
          @click="choiceMenu(menu)"
        >
          <i class="icon" :class="menu.icon"></i>
          <p>{{menu.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderIpad",
  components: {},
  props: {
    menuList: {
      default: []
    },
    activeId: {
      default: ""
    }
  },
  inject: ["screenType", "BaseLayout"],
  data() {
    return {
      openMenuFlag: false,
      currentStyle: "classic"
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    choiceMenu(menu) {
      this.$emit("change", menu);
    },

    changeStyle() {
      this.BaseLayout.styleType = this.currentStyle;
    },

    openMenu() {
      this.openMenuFlag = true;
    }
  }
};
</script>

<style lang="less" scoped>
.ipad-header {
  z-index: 10;
  background-color: #15355b;
  .menu-button {
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 50px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    color: white;
    background-color: rgba(0, 0, 0, 1);
    z-index: 10;
    font-size: 30px;
    opacity: 0.3;
    cursor: pointer;
  }
  .menu-box {
    position: fixed;
    z-index: 11;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    .menu-list {
      list-style: none;
      width: 1000px;
      margin: 0 auto;
      padding-top: 30px;
      li {
        float: left;
        height: 100px;
        width: 100px;
        margin: 30px 50px;
        i {
          display: block;
          margin: 0 auto;
          width: 60px;
          text-align: center;
          height: 60px;
          line-height: 60px;
          color: white;
          font-size: 30px;
          border-radius: 10px;
          background-color: rgb(111, 172, 230);
        }
        p {
          text-align: center;
          height: 40px;
          line-height: 40px;
          color: white;
        }
        cursor: pointer;
      }
    }
    .menu-list:after {
      content: "";
      display: block;
      clear: both;
    }
  }
}
.el-icon-weixiu::after {
  content: "\e7c6";
}
</style>