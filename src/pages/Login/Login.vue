<template>
  <div class="login">
    <img :src="$baseConfig.login.logo" />
    <div class="login_info">
      <div class="login_title">智慧运维态势分析平台</div>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        class="login-form"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verCode" class="ver-code-item">
          <el-input class="ver-code" v-model="loginForm.verCode" autocomplete="off"></el-input>
          <img :src="verImgPath" />
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="onLogin">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  props: {},
  inject: ["appModule"],
  data() {
    return {
      verImgPath: "./static/images/logo.jpg",
      loginForm: {
        username: "",
        password: "",
        verCode: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, message: "长度大于 2 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      tokenTimeout: null
    };
  },
  computed: {},
  created() {},
  mounted() {
    // 判断登录信息存在时不用重新登录
    // const userInfo = sessionStorage.getItem("userInfo");
    // let user;
    // if (userInfo) {
    //   try {
    //     user = JSON.parse(userInfo);
    //     if (user) {
    //       this.$router.push("/operation");
    //     }
    //   } catch (error) {}
    // }
  },
  methods: {
    onLogin() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.$remote
            .post("user/login", {
              username: this.loginForm.username,
              password: this.loginForm.password
            })
            .then(
              res => {
                if (res.code == 20000) {
                  console.log(res);
                  const token = res.data.token;
                  this.appModule.recordToken(token);
                  setTimeout(() => {
                    this.$router.push("/operation");
                  }, 0);
                }
              },
              rej => {
                this.$alert(rej);
              }
            );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  height: 100%;
  background: url("../../assets/login_bg.jpg");
  background-size: cover;
  .login_info {
    position: absolute;
    width: 100%;
    max-width: 400px;
    top: 200px;
    right: 100px;
    background-color: #056294;
    padding: 12px 24px;
    font-size: 20px;
    .login_title {
      line-height: 40px;
      color: white;
      margin-bottom: 24px;
    }
    .ver-code-item {
      img {
        height: 32px;
        float: right;
      }
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
<style lang="less">
.login .login_info .el-form-item__label {
  color: white;
}
.login .login_info .ver-code-item .el-input {
  width: 50%;
}
</style>