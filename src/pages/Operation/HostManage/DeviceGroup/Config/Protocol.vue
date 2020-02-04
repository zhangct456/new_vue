<template>
  <div class="protocol-box">
    <div class="collapse-box">
      <el-collapse class="collapse" accordion>
        <el-collapse-item>
          <template slot="title">
            <div class="header">登录</div>
          </template>
          <ul>
            <li v-for="item of dataList" :key="item">
              {{item}}
              <i class="el-icon-close"></i>
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
      <div class="header-icon">
        <i class="el-icon-circle-plus-outline" @click="openModal('login')"></i>
      </div>
    </div>
    <div class="collapse-box">
      <el-collapse class="collapse" accordion>
        <el-collapse-item>
          <template slot="title">
            <div class="header">监测</div>
          </template>
          <ul>
            <li v-for="item of dataList" :key="item">
              {{item}}
              <i class="el-icon-close"></i>
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
      <div class="header-icon">
        <i class="el-icon-circle-plus-outline" @click="openModal('monitor')"></i>
      </div>
    </div>
    <el-dialog
      class="model"
      title="添加内容"
      :visible.sync="dialogVisible"
      :width="isMobile ? '300px': '600px'"
    >
      <div class="model-form" :class="{'is-mobile': isMobile}">
        <el-row>
          <el-col class="label" :xs="8" :sm="8" :lg="{span: 4, offset: 1}">登录别名：</el-col>
          <el-col :span="16">
            <el-input v-model="alias"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="label" :xs="8" :sm="8" :lg="{span: 4, offset: 1}">协议名称：</el-col>
          <el-col :span="16">
            <el-select v-model="proName"></el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="label" :xs="8" :sm="8" :lg="{span: 4, offset: 1}">用户名：</el-col>
          <el-col :span="16">
            <el-input v-model="username"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="label" :xs="8" :sm="8" :lg="{span: 4, offset: 1}">密码：</el-col>
          <el-col :span="16">
            <el-input v-model="password"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="label" :xs="8" :sm="8" :lg="{span: 4, offset: 1}">端口：</el-col>
          <el-col :span="16">
            <el-select v-model="port"></el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="label" :xs="8" :sm="8" :lg="{span: 4, offset: 1}">标识：</el-col>
          <el-col :span="16">
            <el-input v-model="flag"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="label" :xs="8" :sm="8" :lg="{span: 4, offset: 1}">路径：</el-col>
          <el-col :span="16">
            <el-input v-model="path"></el-input>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="close-btn" @click="dialogVisible = false">取 消</el-button>
        <el-button class="enter-btn" type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Protocol",
  components: {},
  props: {},
  inject: ["screenType"],
  data() {
    return {
      dataList: ["snmp"],
      dialogVisible: false,
      alias: "",
      proName: "",
      username: "",
      password: "",
      port: "",
      flag: "",
      path: ""
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
  methods: {
    openModal(flag) {
      console.log(flag);
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang="less" scoped>
.protocol-box {
  .collapse-box {
    position: relative;
    border-bottom: 1px solid #2e6fa7;
    overflow: hidden;
    .el-collapse {
      border: none;
      width: calc(100% - 40px);
      .header {
        width: 100%;
        line-height: 40px;
        font-size: 16px;
        padding: 0 24px;
      }
      ul {
        padding-left: 40px;
        list-style: none;
        font-size: 14px;
        li {
          color: white;
          i {
            margin-left: 20px;
            cursor: pointer;
          }
        }
      }
    }
    .header-icon {
      position: absolute;
      right: 0;
      top: 0;
      display: block;
      font-size: 24px;
      color: white;
      line-height: 48px;
      width: 48px;
      text-align: center;
      cursor: pointer;
    }
  }
  .collapse-box:last-child {
    margin-bottom: 24px;
  }
}
.model {
  .el-dialog {
    background-color: #153c66;
  }
  .model-form {
    color: white;
    padding: 0 24px;
    .el-row {
      line-height: 40px;
    }
  }
}
</style>
<style lang="less">
.protocol-box .el-collapse-item__header,
.protocol-box .el-collapse-item__wrap {
  background-color: #153c66;
  color: white;
  border-bottom: none;
}
.model .el-dialog {
  background-color: #153c66;
  .el-dialog__title {
    color: white;
  }
}
</style>