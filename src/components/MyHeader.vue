<template>
<div class="my_header">

<div class="header">
    <ul class="list-unstyled ">
        <li><router-link class="a1" to="/login">[会员登录]</router-link></li>
        <li><router-link class="a2" to="/regist">[会员注册]</router-link></li>
        <li><a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客服电话027-85821942/85824022</a></li>
    </ul>
</div>
<div class="clear-h"></div>
   <div class="mainbody">
       <div class="header_logo d-flex bg-white">

          <a href="http://localhost:8080/#/"><img src="img/public-logo.jpg" alt=""/></a> 


           <div class="lottory ">
               <img class="float-left" src="img/lottory-pic.jpg" alt=""/>
               <div class="float-left ">
                   <p>10积分抽现金红包</p>
                   <a href="javascript:;">立即抽奖</a>
               </div>
           </div>
           <div class="sou">
               <input class="float-left" type="text" placeholder="请输入您想要输入的商品">
               <button class="float-left"><a href="javascript:;">搜索</a></button>
           </div>
           <div class="cart">
               <img src="img/public-cart.jpg" alt=""/>
               <a href="javascript:;">我的购物车</a>
               <img class="float-right" src="img/public-prompt.jpg" alt=""/>
           </div>
       </div>
       <div class="clear"></div>
       <div>
           <button class="product border-0"><a  href="javascript:;">全部商品分类</a></button>
       </div>
</div>
<hr class="my-0 my_hr"/>
</div>
</template>

<script>
export default {
    
}
</script>
 <style scoped>
       .mainbody{
            width: 1180px;
            margin-right: auto;
            margin-left: auto;
        }
       .clear{clear: both}
       .header{height: 30px; background: #ececec;}
ul{margin-left:1150px;
    width:500px;height:20px;
    line-height: 15px;
    padding-top: 7.5px;
    font-size:12px;
   }
a{color: #000;}
.a1{ float: left;
     border-left: 1px solid #000;
     border-right: 1px solid #000;
     width:80px;height:15px;
     text-align: center;

}
.a2{float: left;
    width:80px;height:15px;
    border-right: 1px solid #000;
    text-align: center;
}
a:hover { text-decoration: none;}
.header_logo{padding-top: 26px;padding-bottom: 26px;}
.lottory{padding: 0 80px 0 28px;}
.lottory img{height: 50px;}
.lottory p{margin-bottom: 0px;color:#5e5e5e;font-size: 12px;
    padding:0 5px;}
.lottory a{display: inline-block;width:70px;
    line-height: 23px;padding:0 10px;text-align: center;
    margin-left:19px;border:1px solid #cdcdcd;
    font-size: 11px; color: #696969;text-decoration:none;}
.sou input{height: 39px;
                width: 285px;
                text-indent: 1em;
                border:0.5px solid red;
                outline:none;
                }
.sou button{height: 39px;width:69px;background-color: red;border:0}
.sou button a{color:white;}
.cart{float: left;margin-left: 100px;
    height:47px;padding:0 20px 0 20px;
    border: 1px solid #cdcdcd;}
.cart img{width:25px; height: 22px;line-height: 47px;}
.cart a{text-decoration: none;color: #333;
    outline: none;font-size: 12px;line-height: 47px;}
.product{width:205px;height:39px;text-decoration: none;background:#900200; margin-left: -975px;}
.product a{color:#fff;}
.my_hr{border-bottom:2px solid #900200;}
.mt-0, .my-0 { margin-top: -1px !important;}

 </style>