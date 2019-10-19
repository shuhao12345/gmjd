<template>
    <div>
        <main>
<div class="container">
    <ul class="fuwu list-unstyled d-flex justify-content-between">
        <li><img src="img/public_car.jpg" alt=""/> <span>物流快递</span></li>
        <li><img src="img/public_quality.jpg" alt=""/><span>品质保证</span></li>
        <li><img src="img/public-speed.jpg" alt=""/><span>发货速度快</span></li>
        <li><img src="img/joint_guarantee.jpg" alt=""/> <span>全国联保</span></li>
    </ul>

</div>
     <div class="clear"></div>
<hr/>
<div class="mainbody">
<div class="content ">
    <ul class="list-unstyled mx-7 float-left ">
        <li><a href="">购物指南</a></li>
        <li><a href="">会员注册</a></li>
        <li><a href="">购物流程</a></li>
        <li><a href="">积分说明</a></li>
    </ul>
    <ul class="list-unstyled mx-7 float-left">
        <li><a href="">配送方式</a></li>
        <li><a href="">配送范围</a></li>
        <li><a href="">配送服务说明</a></li>
        <li><a href="">收货说明</a></li>
    </ul>
    <ul class="list-unstyled mx-7 float-left ">
        <li><a href="">支付方式</a></li>
        <li><a href="">在线支付</a></li>
        <li><a href="">货到付款</a></li>
    </ul>
    <ul class="list-unstyled mx-7 float-left ">
        <li><a href="">售后服务</a></li>
        <li><a href="">售后联系方式</a></li>
        <li><a href="">退换货时效</a></li>
        <li><a href="">退换货流程</a></li>
    </ul>
    <div class="content-logo">
    <p class="mb-0 mt-3">手机工贸电器城</p>
    <img class="my-logo" src="img/code.png" alt=""/>
    </div>
</div>
</div>
<div class="my_bg">
      <ul class="breadcrumb d-flex justify-content-center pl-0">
          <li class="breadcrumb-item"><a href="">关于我们</a></li>
          <li class="breadcrumb-item"><a href="">联系我们</a></li>
          <li class="breadcrumb-item"><a href="">商家入驻</a></li>
          <li class="breadcrumb-item"><a href="">营销中心</a></li>
          <li class="breadcrumb-item"><a href="">友情链接</a></li>
          <li class="breadcrumb-item"><a href="">销售联盟</a></li>
      </ul>
    <p class="text-center">© 2016 All rights reserved by 武汉工贸家电 <a class="contact"   href="">http://www.gmjd.com.cn</a></p>
    <p class="text-center">经营性备案编号：鄂B2-20090095</p>
     <p class="text-center">
      <img src="img/beian.png" alt=""/>
      <a href="">鄂公网安备 42010402000145号</a>
      <p class="text-center">有任何问题请咨询在线客服 客服电话：027-85877778|工作时间：上午9点至下午5点30分</p>
     </p>
    <p class="text-center pb-4"><img class="" src="img/china_unipay.jpg" alt=""/></p>
</div>
</main>
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
.fuwu{width:1180px;margin-left: -35px;}

.clear{clear:both;}


.mx-7 {
    margin-left: 7rem !important;}
.content a{text-decoration: none;color:#4e4e4e;}
.content{margin-left:-75px;}
.content li:first-child{font-size: 16px;
                      font-weight: bold; }
li:not(first-child){font-size: 14px;color: #333;
                      text-decoration: none;
                      outline: none;  }

.my-logo{width: 200px;height:200px;margin-right: -310px;}
.content-logo{margin-left: 130px;text-align: center;font-size: 16px;
    font-weight: bold;
    color: #4e4e4e;}
    .content-logo p{margin-right:-310px}
.breadcrumb-item + .breadcrumb-item::before {
    content: "|"; color:#d8d8d8; }
.breadcrumb-item a{text-decoration: none; color:#d8d8d8}
.my_bg{background-color:#8b8b8b;color:#d8d8d8;font-size:12px}
.breadcrumb { background-color:#8b8b8b;}
.my_bg p a{font-family: "微锟斤拷锟脚猴拷";color:#333;font-size: 12px;}
.my_bg ul li{color:#d8d8d8;}
</style>