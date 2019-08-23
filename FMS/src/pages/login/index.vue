<template>
  <div ref="homePage" class="container">
    <div class="formContainer">
      <div class="formHeader">
        <div>
          <el-image :src="imgUrl"></el-image>
        </div>
        <!-- <i>|</i> -->
        <div class="header-title">
          <span>后台管理系统</span>
        </div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user" style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入登录密码" prefix-icon="el-icon-lock" show-password style="width: 100%;"></el-input>
        </el-form-item>
      </el-form>
      <div class="btnGrounp">
        <el-button type="primary" @click="loginIn" style="width: 100%;">登录</el-button>
      </div>
    </div>
    <!-- <img src="../../static/img/logo-default.png"> -->
    <!--    <div>version:1.0.0</div> -->
  </div>
</template>
<script>
export default {
  name: 'Login.vue',
  data() {
    return {
      urlList: {
        userLogin: this.serverIp + '/login'
      },
      routerList: {
        indexPage: '/index/'
      },
      clientHeight: '',
      imgUrl: '../../static/img/logo.png',
      ruleForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '登录密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    console.log('登录页面-输出ip地址....');
    let isLogin = window.sessionStorage.getItem('isLogin')
    console.log(isLogin)
    // let timer = window.sessionStorage.getItem('timer')
    // clearInterval(timer)
    // // window.sessionStorage.removeItem('timer')
    // console.log(this.serverIp);
    // console.log(document.documentElement.clientWidth)
  },
  methods: {
    // 0.1[辅助] 输出格式
    log(msg) {
      console.log("——————— 登录页面 ———————")
      console.log("输出信息：");
      console.log(msg);
      console.log("----结束")
    },
    // 0.2[辅助] 成功弹窗
    sucToast(msg) {
      this.$message({
        type: 'success',
        message: msg
      });
    },
    // 0.3[辅助] 消息弹窗
    infoToast(msg) {
      this.$message({
        type: 'info',
        message: msg
      });
    },
    // 0.3[辅助] 消息弹窗
    errToast(msg) {
      this.$message({
        type: 'error',
        message: msg
      });
    },
    loginIn() {
      // this.$router.push('/index/')
      window.sessionStorage.setItem('loginName', this.ruleForm.username)
      // let url = "http://192.168.5.225:48080/login"
      let url = this.urlList.userLogin;
      console.log("this is test .....  " + url)
      this.axios.post(url, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }, {
          data: { userName: this.ruleForm.username, password: this.ruleForm.password }
        })
        .then(res => {
          console.log(res)
          if (res.data.code == '0000') {
            window.sessionStorage.setItem('isLogin', true)
            this.sucToast("恭喜您，登录成功！");
            this.$router.push(this.routerList.indexPage);
          } else {
            window.sessionStorage.removeItem('isLogin')
            this.errToast("用户名或密码错误！！！！");
            setTimeout(() => {
              this.$router.push('/');
            }, 2000);
          }
        });;

      /*   this.instance.userlogin({
           userName: this.ruleForm.username,
           password: this.ruleForm.password,
         }).then(res => {
           console.log(res)
             this.$message({
               message: '恭喜你，登录成功！',
               type: 'success'
             });
             // this.$router.push('/home/')
         }).catch(function(error) {
           console.log(error);
         });*/


    },
    closePage() {}
  },
  created() {
    // 对象及其事件初始化完成，数据已经和data属性进行绑定
  },
  beforeMount() {
    // 判断对象是否有el选项，有则继续向下编译，否则停止编译
  },
  mounted() {
    // 给vue实例对象添加成员，并且替换掉挂在的DOM元素

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.formContainer {
  width: 350px;
  margin: -150px auto 0;
  padding: 20px 40px 40px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  box-sizing: border-box;
}

.formHeader {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}

.formHeader>div:first-of-type {
  width: 120px;
  height: auto;
}

.formHeader>div:first-of-type>div {}

.formHeader i {
  display: inline-block;
  width: 20px;
  font-size: 22px;
  font-weight: lighter;
  color: #888;
  text-align: center;
}

.el-form {
  margin-top: 30px;
}

.el-form-item__content {
  margin-left: 0 !important;
}

.btnGrounp {
/*  display: flex;
  justify-content: space-between;*/
  width: 100%;
  text-align: center;
}

.el-button {
  width: 120px;
}
  .header-title{
    margin-left: 8px;
    padding-bottom: 8px;
    font-size: 20px;
    font-weight: bold;
    color: #1675b7;
    letter-spacing: 2px;
    text-shadow: 1px 1px 1px #2A86F2;
  }
</style>
