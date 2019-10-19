<template>
    <div>
        <my-header></my-header>
        <div class="container">
   <div class="my-bg">
       <form class="ff"  action="">
           <div class="group">
               <span>*</span>
               手机号:
               <input v-model="phone" @focus="getFocus1()" type="text"  placeholder="请输入手机号码"/>
               <span :class="spanClass1" id="pho1">首位为1+9位数字</span>
           </div>
           <div class="group">
               <span>*</span>
               密码:
               <input v-model="pwd" @focus="getFocus2()" type="text"  placeholder="请输入密码"/>
                <span :class="spanClass2" id="pho2">1到6位数字</span>
           </div>
           <div class="group ">
               <span>*</span>
               确认密码:
               <input v-model="pwd2" @focus="getFocus3()" type="text"  placeholder="请再次输入密码"/>
                <span :class="spanClass3" id="pho3">再次输入</span>
           </div>
           <div class="group">
               <span>*</span>
                手机验证码:
               <input class="last" type="text" />
               <button :disabled="timer!=10" @click="start" class="yzheng"><a href="javascript:;" >{{timer==10?"获取验证码":`${timer}s后可重新获取`}}</a></button>
               
               <button  @click="handle" class="reg ">立即注册</button>
           </div>

       </form>
   </div>
</div>
<my-footer></my-footer>
    </div>
</template>

<script>

export default {
  data(){
      return {
       phone:"",
       pwd:"",
       pwd2:"",
       timer:10,
       spanClass1:{
         vali_info:true,
         vali_success:false,
         vali_fail:false
      },
       spanClass2:{
         vali_info:true,
         vali_success:false,
         vali_fail:false
      },
       spanClass3:{
         vali_info:true,
         vali_success:false,
         vali_fail:false
      },
    }
  },
 
 methods:{
    getFocus1(){
            this.spanClass1.vali_info=this.spanClass1.vali_success=this.spanClass1.vali_fail=false;
          },
    getFocus2(){
            this.spanClass2.vali_info=this.spanClass2.vali_success=this.spanClass2.vali_fail=false;
          },     
    getFocus3(){
            this.spanClass3.vali_info=this.spanClass3.vali_success=this.spanClass3.vali_fail=false;
          },   
      handle() {
        this.$alert('注册成功', '恭喜你', {
          confirmButtonText: '确定',
        
        });
      },

    start(){
      //如果还没有启动倒计时，才能执行后续操作
      if(this.timer==10){
        //立刻将timer改为9，引发界面内容和样式的自动变化
        this.timer=9;
        //启动定时器，并保存定时器序号
        //必须用箭头函数，因为希望定时器中也能用外部的Vue中的this！
        var n=setInterval(()=>{
          //如果倒计时还没有到0
          if(this.timer>0){
            this.timer--;//才能继续-1
          }else{//否则如果已经到0了
            this.timer=10;//将timer重置回10，引发界面内容和样式回复原样！
            //在倒计时结束时，一定要停止本次定时器，否则再点第二次，第三次，会导致多个定时器叠加！同时操作this.timer!倒计时就不准了！
            clearInterval(n);
          }
        },1000)
      }
    }
    
   

      },
      
    watch:{
         phone(){
              //当文本框的内容发生改变时，v-model会自动修改data中的phone变量的值。只要phone变量值被改变，phone（）函数立刻触发
          if(/^1[3-9]\d{9}$/.test(this.phone)){
              this.spanClass1.vali_info=this.spanClass1.vali_fail=false;
              this.spanClass1.vali_success=true;
          }else{
              this.spanClass1.vali_info=this.spanClass1.vali_success=false;
              this.spanClass1.vali_fail=true;
          }
          
          },  

        pwd(){
         if(/^\d{6}$/.test(this.pwd)){
             
              this.spanClass2.vali_info=this.spanClass2.vali_fail=false;
              this.spanClass2.vali_success=true;
          }else{
              this.spanClass2.vali_info=this.spanClass2.vali_success=false;
              this.spanClass2.vali_fail=true;
          } 
      },
       pwd2(){
            if(this.pwd2==this.pwd){
              this.spanClass3.vali_info=this.spanClass3.vali_fail=false;
              this.spanClass3.vali_success=true;
          }else{
              this.spanClass3.vali_info=this.spanClass3.vali_success=false;
              this.spanClass3.vali_fail=true;
          } 
           
       }





    }
    
      
      






}
</script>

<style scoped>
      .my-bg{width:1200px;height:492px;position: relative;
            background-image:url(../../public/img/regist_bg.png) }
        .ff{ float:left;
            padding:50px 0;
            width: 1177px;
        }
        .group{width:476px;height:78px;
               padding-bottom: 28px;
               text-align: right;}
        .group input{width:354px;height:54px;}
        .group span{color:#ff8e42; }
        .last{width:257px!important;}
        .yzheng{width:93px;height:54px;border:0;outline: none;}
        .yzheng a{color:#666;text-decoration: none;font-size: 12px;}
        .reg{margin-top: 30px;
            width:350px; height:50px;
             background-color: #f00;
             color:#fff;
             outline:0;
             border:0;}
.group input{ text-indent: 1em;outline: none;}

 .vali_info{
	    display:none;
    }

    .vali_success,.vali_fail{
	    background-repeat:no-repeat;
        background-position:left center;
	    display:inline-block;
    }
    /* 验证消息：验证通过时的样式 */
    .vali_success{
        background-image:url("../../public/img/ok.png");
	    padding-left:20px;
	    width:0px;height:20px;
	    overflow:hidden;
    }
    /* 验证消息：验证失败时的样式 */
    .vali_fail{
      background-image:url("../../public/img/err.png");
      background-color:#fff;
      color:Red;
      padding-left:30px;
    }
    #pho1{position:absolute;
         left:520px;
         top:67px}
    #pho2{position:absolute;
         left:520px;
         top:142px}
    #pho3{position:absolute;
         left:520px;
         top:217px}


      
</style>