<template>
  <div class="params-box" :class="{'is-mobile': isMobile}">
    <el-row class="form-box">
      <el-col :xs="{span: 18}" :sm="{span: 18}" :lg="{span: 8, offset: 4}">
        <el-checkbox v-model="rdpAudio">rdp音频</el-checkbox>
      </el-col>
      <el-col :xs="{span: 18}" :sm="{span: 18}" :lg="{span: 8, offset: 1}">
        <el-checkbox v-model="rdpAudioInput">rdp音频输入</el-checkbox>
      </el-col>
      <el-col :xs="{span: 18}" :sm="{span: 18}" :lg="{span: 8, offset: 4}">
        <el-checkbox v-model="rdpPrint">rdp打印</el-checkbox>
      </el-col>
      <el-col :xs="{span: 18}" :sm="{span: 18}" :lg="{span: 8, offset: 1}">
        <el-checkbox v-model="rdpFileInput">rdp文件输入</el-checkbox>
      </el-col>
      <el-col :xs="{span: 18}" :sm="{span: 18}" :lg="{span: 9, offset: 4}">
        <el-checkbox v-model="rdpAutoCreate">rdp自动创建存储目录</el-checkbox>
      </el-col>
      <el-col :xs="{span: 18}" :sm="{span: 18}" :lg="{span: 10, offset: 1}">
        <el-checkbox v-model="rdpCtrlAudio">rdp控制台音频</el-checkbox>
      </el-col>
      <el-col class="label" :xs="24" :sm="24" :lg="10">rdp服务器共享目录：</el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-input v-model="rdpServerPath"></el-input>
      </el-col>
      <el-col class="label" :xs="24" :sm="24" :lg="10">rdp名称：</el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-input v-model="rdpName"></el-input>
      </el-col>
      <el-col class="label" :xs="24" :sm="24" :lg="10">rdp目录：</el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-input v-model="rdpCatalog"></el-input>
      </el-col>
      <el-col class="label" :xs="24" :sm="24" :lg="10">rdp远程命令：</el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-input v-model="rdpCommand"></el-input>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 6, offset: 4}">
        <el-checkbox v-model="vncOnlyRead">vnc只读</el-checkbox>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 6, offset: 0}">
        <el-checkbox v-model="vncAudio">vnc音频</el-checkbox>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span:8, offset: 0}">
        <el-checkbox v-model="vncProxy">vnc反向代理状态</el-checkbox>
      </el-col>
      <el-col class="label" :xs="24" :sm="24" :lg="10">vnc主机名称：</el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-input v-model="vncHostName"></el-input>
      </el-col>
      <el-col class="label" :xs="24" :sm="24" :lg="10">vnc主机端口：</el-col>
      <el-col :xs="24" :sm="42" :lg="12">
        <el-input v-model="vncHostPort"></el-input>
      </el-col>
      <el-col class="label" :xs="24" :sm="24" :lg="10">vnc等待时间（毫秒）：</el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-input v-model="vncWaitTime"></el-input>
      </el-col>
    </el-row>
    <el-row class="button-box">
      <el-col :span="10" :offset="2">
        <el-button type="primary" size="medium">保存</el-button>
      </el-col>
      <el-col :span="10">
        <el-button type="primary" size="medium">取消</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ParamsConfig",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return {
      rdpAudio: false,
      rdpAudioInput: false,
      rdpPrint: false,
      rdpFileInput: false,
      rdpAutoCreate: false,
      rdpCtrlAudio: false,
      rdpServerPath: "",
      rdpName: "",
      rdpCatalog: "",
      rdpCommand: "",
      vncOnlyRead: false,
      vncAudio: false,
      vncProxy: false,
      vncHostName: "",
      vncHostPort: "",
      vncWaitTime: ""
    };
  },
  computed: {
    isMobile() {
      return this.screenType === "mobile";
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style lang="less" scoped>
.params-box {
  padding: 24px;
  .form-box {
    line-height: 40px;
    color: white;
    .label {
      text-align: right;
    }
  }
}
.params-box.is-mobile {
  .form-box {
    .label {
      text-align: left;
    }
  }
}
.button-box {
  margin-top: 24px;
  .el-col {
    text-align: center;
  }
}
</style>
<style lang="less">
.params-box {
  .form-box {
    .el-checkbox {
      .el-checkbox__label {
        color: white;
      }
    }
  }
}
</style>