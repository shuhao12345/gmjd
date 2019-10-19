<template>
  <div>
    <my-header></my-header>  
    <div class="full">
      <div class="container">
            <ul class="breadcrumb">
                <li class="breadcrumb-item">
                    <a class="" href="">首页</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="">学习用品</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="">笔记本电脑</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="">戴尔灵越15PR-5745B</a>
                </li>
            </ul>
                <div class="row">
                    <div class="col-xs-6 ">
                        <img class="bigpic" src="img/capmd.jpg" alt=""/>
                       

                            <ul @mouseover="changei" class="list-unstyled d-flex mt-2 justify-content-lg-start">
                                <li class="my_img">
                                    <img src="img/cap1.jpg" alt=""/>
                                    <img src="img/cap2.jpg" alt=""/>
                                    <img src="img/cap3.jpg" alt=""/>
                                    <img src="img/cap4.jpg" alt=""/>
                                    <img src="img/cap5.jpg" alt=""/>
                                </li>
                            </ul>
                           
                       
                    </div>
                    <div class="col-xs-6 txt">
                        <h4>戴尔DELL灵越游匣15PR-5745B 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 128GSSD+1T GTX1050 4G独显 FHD)黑</h4>
                        <span>5月焕新季，领券买新机！神券满6000减600！一体成型金属机身，纤薄轻巧，长达12小时续航</span>
                        <h6>
                            <a class="font-weight-bold text-dark my_small" href="">【白条6期免息 游匣“10”力出击】七代四核CPU ,GTX1050 4G独显,FHD全高清屏,热血出击！</a>
                        </h6>
                        <div class="alert alert-secondary ">

                            <span class="" >学员售价：</span>
                                <h3 class="text-primary d-inline">￥6999.00</h3>

                            <div>服务承诺： *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货</div>
                        </div>
                    <div>
                        <p>
                            <span>客服：联系客服 </span>
                            <img src="img/product_detail/kefuf.gif" alt=""/>
                        </p> 
                    </div>
                    <div class="">
                        <div>规格：</div>
                        <div class="btns">
                            <a class="" href="">双核i5-7300HQ 8G GTX1050 4G</a>
                            <a class="" href="">双核i5/8GB内存/256GB闪存</a>
                            <a class="" href="">定制款：双核i7/8G内存/128G闪存</a>
                            <a class="" href="">定制款：双核i7/8G内存/256G闪存</a>
                        </div>
                    </div>
                    <p class="account">
                      <span>数量:</span> <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                    </p>
                    <p class="shop">
                     <el-button type="info">立即购买</el-button>
                     <el-button type="primary">加入购物车</el-button>
                     <el-button type="primary" icon="el-icon-share"></el-button>
                     </p>
                </div>
            </div>

         </div>
        </div>
     <my-footer></my-footer>
   </div>
</template>

<script>
export default {
     data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
}
</script>

<style scoped>
    .full{background-color:#f5f5f5;}
    .container{padding-left:0;padding-right:0}
    .breadcrumb{background-color:#f5f5f5;
                 margin-left:-35px;
                 margin-bottom:0
                 }
    
    .breadcrumb-item a{color:#000;font-size: 12px;text-decoration:none;}
    .bigpic{margin-left:-98px;}
    .my_img img{width:85px;height:84px;margin:0 3px}
    .txt{text-align: left}
    .title{margin: 0px;
           padding: 0px;
           font-weight: 500;
           list-style: none;
           display: block;
           }
    .txt span{color: #333333;
              font-size: 14px;margin: 0px;
              padding: 0px;
              border: none;
              list-style: none;}
   .btns a{display: inline-block;
           border:1px solid rgb(102, 102, 102);
           font-size: 5px;
           margin-right: 3px;
           margin-bottom: 2px;
           padding: 8px 10px;
           text-align: center;
           text-decoration: none;
           color:#333333;
           vertical-align: middle;
           cursor: pointer}
    .account{margin-top:15px;margin-bottom:35px}
    .account span{margin-right:15px}
    .el-button{font-size: 16px;}

</style>