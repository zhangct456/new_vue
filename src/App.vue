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
    debugger
    window.console.log(document.body.clientWidth);
    window.console.log(this.screenType);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
