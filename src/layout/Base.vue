<template>
  <div>
    Base
    <Header></Header>
    <Aside></Aside>
  </div>
</template>

<script>
import { Aside } from "./Aside.vue";
import { Header } from "./Header.vue";

export default {
  name: "Base",
  components: { Aside, Header },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>