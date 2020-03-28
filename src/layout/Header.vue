<template>
  <div class="header">
    <HeaderComputer
      v-if="screenType === 'computer' && BaseLayout.styleType === 'classic'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderComputer>
    <HeaderComputerBusiness
      v-if="screenType === 'computer' && BaseLayout.styleType === 'business'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderComputerBusiness>
    <HeaderComputerSimplicity
      v-if="screenType === 'computer' && BaseLayout.styleType === 'simplicity'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderComputerSimplicity>
    <HeaderMobile
      v-if="screenType === 'mobile' && BaseLayout.styleType === 'classic'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderMobile>
    <HeaderMobileBusiness
      v-if="screenType === 'mobile' && BaseLayout.styleType === 'business'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderMobileBusiness>
    <HeaderMobileSimplicity
      v-if="screenType === 'mobile' && BaseLayout.styleType === 'simplicity'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderMobileSimplicity>
    <HeaderIpad
      v-if="screenType === 'ipad'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderIpad>
  </div>
</template>

<script>
import HeaderComputer from "./Header/HeaderComputer";
import HeaderComputerBusiness from "./Header/HeaderComputerBusiness";
import HeaderComputerSimplicity from "./Header/HeaderComputerSimplicity";
import HeaderMobile from "./Header/HeaderMobile";
import HeaderMobileBusiness from "./Header/HeaderMobileBusiness";
import HeaderMobileSimplicity from "./Header/HeaderMobileSimplicity";
import HeaderIpad from "./Header/HeaderIpad";

export default {
  name: "Header",
  components: {
    HeaderComputer,
    HeaderComputerBusiness,
    HeaderComputerSimplicity,
    HeaderMobile,
    HeaderMobileBusiness,
    HeaderMobileSimplicity,
    HeaderIpad
  },
  props: {
    menuList: {
      default: []
    },
    currentMenu: {
      default: ""
    }
  },
  inject: ["screenType", "BaseLayout"],
  data() {
    return {
      openMenuFlag: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    const path = this.$router.history.current.path;
  },
  watch: {},
  methods: {
    choiceMenu(menu) {
      this.$emit("change", menu);
    }
  }
};
</script>

<style lang="less" scoped>
</style>