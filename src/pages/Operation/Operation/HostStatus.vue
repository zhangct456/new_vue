<template>
  <div class="status-area">
    <div class="status">
      <div class="status-num">
        <img class="img1" :style="{top: (100 - cpu) + 'px'}" src="@/assets/curve-line.png" />
        <div class="text">{{cpu}}%</div>
      </div>
    </div>
    <div class="status">
      <div class="status-num">
        <img class="img2" :style="{top: (100 - storge) + 'px'}" src="@/assets/curve-line.png" />
        <div class="text">{{storge}}%</div>
      </div>
    </div>
    <div class="status">
      <div class="status-num">
        <img class="img3" :style="{top: (100 - disk) + 'px'}" src="@/assets/curve-line.png" />
        <div class="text">{{disk}}%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HostStatus",
  components: {},
  props: {},
  data() {
    return {
      cpu: 45,
      storge: 12,
      disk: 48
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.status-area {
  display: flex;
  height: 372px;
  .status {
    flex: 1;
  }
  .status-num {
    position: relative;
    margin: 0 auto;
    margin-top: 70px;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: #2e6fa7;
    overflow: hidden;
    .text {
      position: absolute;
      width: 100%;
      line-height: 150px;
      text-align: center;
      font-size: 24px;
      color: white;
    }
    img {
      position: absolute;
      top: 0;
      width: 300%;
      height: 120%;
    }
    .img1 {
      animation: myfirst 5s linear 2s infinite alternate;
      -moz-animation: myfirst 5s linear 2s infinite alternate; /* Firefox */
      -webkit-animation: myfirst 5s linear 2s infinite alternate; /* Safari 和 Chrome */
      -o-animation: myfirst 5s linear 2s infinite alternate; /* Opera */
    }
    .img2 {
      animation: myfirst 5s linear 3s infinite alternate;
      -moz-animation: myfirst 5s linear 3s infinite alternate; /* Firefox */
      -webkit-animation: myfirst 5s linear 3s infinite alternate; /* Safari 和 Chrome */
      -o-animation: myfirst 5s linear 3s infinite alternate; /* Opera */
    }
    .img3 {
      animation: myfirst 5s linear 1s infinite alternate;
      -moz-animation: myfirst 5s linear 1s infinite alternate; /* Firefox */
      -webkit-animation: myfirst 5s linear 1s infinite alternate; /* Safari 和 Chrome */
      -o-animation: myfirst 5s linear 1s infinite alternate; /* Opera */
    }
  }
}
@keyframes myfirst {
  from {
    left: -150px;
  }
  to {
    left: 0px;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  from {
    left: -150px;
  }
  to {
    left: 0px;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  from {
    left: -150px;
  }
  to {
    left: 0px;
  }
}

@-o-keyframes myfirst /* Opera */ {
  from {
    left: -150px;
  }
  to {
    left: 0px;
  }
}
</style>