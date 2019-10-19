<template>
    <div>
        <div class="container">
  <div class="wolcome_login">
         <img  src="img/login_logo_03.jpg" alt=""/>
         <span>欢迎登录</span>
  </div>
</div>
<div class="login">
    <table></table>
    <div class="login_tb pt-4" >
        <table>
            <tr>
                <td >
                    <h4>工贸会员</h4>
                </td>
                <td align="right">
                    <img src="img/regist_arrow_03.jpg" alt=""/>
                    <router-link class="content1 " to="/regist">立即注册</router-link>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <hr>
                </td>
            </tr>
            <tr>
                <td  colspan="2">
                    <div class="input-group mt-3">
                        <img src="img/login_name_03.jpg" alt=""/>
                        <input class="phone" type="text" placeholder="手机号"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="input-group mt-4 mb-3">
                        <img src="img/login_password_03.jpg" alt=""/>
                        <input class="upwd" type="text" placeholder="密码"/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" id="auto"/><label for="auto">自动登录</label>
                </td>
                <td align="right">
                    <a class="text-muted" href="">忘记密码</a>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button class="btn text-white w-100 bg-danger ">登录</button>
                </td>

            </tr>

        </table>

    </div>

</div>
 <my-footer></my-footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
      .login{width:100%;height:543px;
             background-image:url(../../public/img/login_banner_02.jpg);
            }
        .login_tb{width:349px;height:320px;background-color: #fff;
          margin-top:80px;margin-left:1100px;
        padding-right: 15px; padding-left:15px;padding-bottom: 15px;}
        table{width:100%;}
        .login_tb hr{border:1px solid #666;}
        hr{margin-top: 0;}
        .content1{color: #d80d10;
                     font-size: 16px;}
        .phone,.upwd{width:275px;outline:0;padding-left:16px;}
        .login_tb a{text-decoration: none;}


   .wolcome_login {width:100%;
    margin:20px 0px 20px -500px;
    height:58px;
    line-height: 58px;
  }
.wolcome_login img{
margin-right: 20px;
}
.wolcome_login span{
    padding-left: 20px;
    font-size: 30px;
    border-left: 2px solid #dddddd;
    color: #333333;
    vertical-align:top;
}
 
</style>