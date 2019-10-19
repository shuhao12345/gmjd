<template>
<div>
<my-header></my-header>
<div class="fluid">
 <div class="mainbody">
    <div class="d-flex">
       <div class="menu_sort">
           <ul class="menu_ul   list-unstyled">
               <li><a href="">厨房电器</a></li>
               <li><a href="">冰箱、冷柜、酒柜</a></li>
               <li><a href="">波轮/滚筒洗衣机、干衣机</a></li>
               <li><a href="">平板电视、家庭影音</a></li>
               <li><a href="">电热水器、燃气热水器</a></li>
               <li><a href="">家用空调、商用空调</a></li>
               <li><a href="">洗化用品</a></li>
               <li><a href="">母婴用品</a></li>
               <li><a href="">3C数码</a></li>
               <li><a href="">手机、手机配件</a></li>
           </ul>
      </div>
     
      <div id="lunbo" class="carousel"  data-ride="carousel" >
              <div class="carousel-inner pt-2">
                  <div class="carousel-item active" >
                      <img src="img/1.jpg" alt=""/>
                  </div>
                  <div class="carousel-item" >
                      <img src="img/2.jpg" alt=""/>
                  </div>
              </div>
            <ul class="carousel-indicators">
                <li data-target="#lunbo" data-slide-to="0" class="active"></li>
                <li data-target="#lunbo" data-slide-to="1"></li>
            </ul>
          </div>
          <div class="news mt-2" >
              <h3>商城公告</h3>
              <hr/>
              <ul class="list-unstyled">
                  <li><a href="">【工贸家电】创新经营、贴心服务</a></li>
                  <li><a href="">【品牌售后电话】各大家电品牌官方</a></li>
                  <li><a href="">【家电顾问】冰箱选购技巧</a></li>
                  <li><a href="">【家电顾问】空调选购与夏季空调省..</a></li>
                  <li><a href="">【家电顾问】电视尺寸与观看距离</a></li>

              </ul>
              <div class="bkrm">
              <a class="bk" href="">爆款</a>
              <a class="rm" href="">热卖</a>
              </div>
              <img src="img/hot1.jpg" alt=""/>
          </div>
   </div>
    <div class="d-flex pb-4">
        <div class="competive">
            <a href="">精·品·推·荐</a>   
        </div>


        <div id="floor-lb">
                <div class="carousel-inner">
                    <div class="d-flex">
                       <md-card>
                        <md-card-actions>
                        <md-button class="md-icon-button"
                                    target="_blank"
                                    href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/11-slides-per-view.vue">
                        </md-button>
                        </md-card-actions>
                        <md-card-media>
                        <!-- swiper -->
                        <swiper :options="silunbo">
                            <swiper-slide>
                            <div class="coin  bg-white">
                                    <p>美的洗碗机WQP6-...</p>
                                    <span>￥2849</span>
                                    <img src="img/093f7b879b6e99520a05e2500475393d.jpg" alt=""/>
                            </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="coin  bg-white">
                                    <p>美的洗碗机WQP8-...</p>
                                    <span>￥3699</span>
                                    <img src="img/a931212e993a5009d195fffbe4546ea7.jpg" alt=""/>
                                </div>  
                            </swiper-slide>
                            <swiper-slide>
                                <div class="coin  bg-white">
                                    <p>舒肤佳纯白清...</p>
                                    <span>￥60</span>
                                    <img src="img/4b692e3c78487293d2208663229fcad3.jpg"/>
                                </div>   
                            </swiper-slide>
                            <swiper-slide>
                            <div class="coin  bg-white">
                                <p>潘婷乳液修护...</p>
                                <span>￥60</span>
                                <img src="img/608771bf8f8df7f235fec4a9e3120806.jpg"/>
                            </div>   
                            </swiper-slide>
                            <swiper-slide>
                                <div class="coin  bg-white">
                                <p>电饭煲...</p>
                                <span>￥60</span>
                                <img src="img/b65de29c0964582876f236db374f9879.jpg"/>
                                </div>         
                            </swiper-slide>
                           
                        </swiper>
                        </md-card-media>
                    </md-card>
                </div>
           </div>                
        </div>
    </div>
  </div>
</div>

<div class="mainbody">
    <h3 class="hfont" >
        <img src="img/red_heart.png " alt=""/>
        <span >猜你喜欢</span>
        <img class="ml-4" src="img/guess_font.png" alt=""/>
    </h3>
    <div class="youlove">
        <div class="guess">
         <img src="img/f1-1.jpg" alt=""/>
         <p>西门子蒸汽炉HB25D5R2W</p>
         <span>￥5230</span>
        </div>
    </div>

    <div class="section-1">
        <h3 class=" float-left" >
            <img src="img/red_heart.png" alt=""/>
            <span>1F&nbsp;</span>
            厨房电器
        </h3>
        <ul class="elec_title  float-right">
            <li @mouseenter="enter1()" @mouseleave="leave1()"><a data-toggle="tab" href="">热门</a></li>
            <li @mouseenter="enter2()" @mouseleave="leave2()"><a data-toggle="tab" href="">烟机</a></li>
            <li><a data-toggle="tab" href="">灶具</a></li>
            <li><a data-toggle="tab" href="">消毒柜</a></li>
            <li><a data-toggle="tab" href="">厨房小家电</a></li>
            <li><a data-toggle="tab" href="">洗碗机</a></li>
        </ul>
    </div>

<div :class="spanClass1">
 <md-card>
    <md-card-media>
      <swiper :options="swiperOption">
        <swiper-slide>
            <div class="dqlunbo float-left">
                <img class="cfdq" src="img/lb1-1.jpg" alt=""/>
                <h5><a href="">西门子洗碗机SC73M810TI</a></h5>
                <p><a href="">市场价:￥5241</a></p>
                <span><a href="">销售价￥4368</a></span>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="dqlunbo float-left">
                <img class="cfdq" src="img/lb1-2.jpg" alt=""/>
                <h5><a href="">西门子洗碗机SC73M810TI</a></h5>
                <p><a href="">市场价:￥5241</a></p>
                <span><a href="">销售价￥4368</a></span>
            </div>   
        </swiper-slide>
        <swiper-slide>
             <div class="dqlunbo float-left">
                <img class="cfdq" src="img/lb1-3.jpg" alt=""/>
                <h5><a href="">西门子洗碗机SC73M810TI</a></h5>
                <p><a href="">市场价:￥5241</a></p>
                <span><a href="">销售价￥4368</a></span>
            </div>
        </swiper-slide>   
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
        <div class="row first-f mx-0 float-left">
            <div class="col-3 px-0 border border-left-0 ">
                <a href=""> <img src="img/f1-1.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                       <span>1576</span>
                    </a>
                </p>

            </div>
            <div class="col-3 px-0 border border-left-0 border-top-0">
                <a href=""> <img src="img/f1-2.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>


            </div>
            <div class="col-3 px-0 border border-left-0 border-top-0">
                <a href=""> <img src="img/f1-3.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>


            </div>
            <div class="col-3 px-0 border border-left-0 border-top-0">
                <a href=""> <img src="img/f1-4.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>


            </div>
        </div>
        <div class="row first-f mx-0 float-left first-t">
            <div class="col-3 px-0 border border-left-0 border-top-0">
                <a href=""> <img src="img/f1-5.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>


            </div>
            <div class="col-3 px-0 border border-left-0 border-top-0">
                <a href=""> <img src="img/f1-6.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>


            </div>
            <div class="col-3 px-0 border border-left-0 border-top-0">
                <a href=""> <img src="img/f1-7.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>


            </div>
            <div class="col-3 px-0 border border-left-0 border-top-0">
                <a href=""> <img src="img/f1-8.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
            </div>
        </div>
</div>
<div :class="spanClass2">   
    <div class="d-flex first-f">
        <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
         <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
          <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
          <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
          <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
          <div class="border copy ">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
         
    </div>



 <div class="d-flex first-f twoR">
        <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
         <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
          <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
          <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
          <div class="border copy border-right-0">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
          <div class="border copy ">
            <a href=""> <img src="img/change.jpg" alt=""/></a>
                <p>
                    <a href="">
                        西门子消毒柜HS2...
                        <br/>
                        市场价:￥1891
                    </a>
                </p>
                <p class="pRed">
                    <a href="">
                        销售价:￥
                        <span>1576</span>
                    </a>
                </p>
        </div>
         
    </div>
</div>


    <div class="clearf"></div>
    <ul class="brand_show list-unstyled ">
        <li><a href=""><img src="img/1-1.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/1-2.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/1-3.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/1-4.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/1-5.jpg" alt=""/></a></li>
        <li><a href=""><img class="pic-6" src="img/1-6.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/1-7.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/1-8.jpg" alt=""/></a></li>
    </ul>

    <div class="section-1">
        <h3 class=" float-left" >
            <img src="img/red_heart.png" alt=""/>
            <span>2F&nbsp;</span>
             冰箱、冷柜、酒柜
        </h3>
        <ul class="elec_title  float-right">
            <li class="active"><a data-toggle="tab" href="">热门</a></li>
            <li class="" ><a data-toggle="tab" href="">冰箱</a></li>
            <li class=""><a data-toggle="tab" href="">冷柜</a></li>
        </ul>
    </div>
    <div class="dqlunbo float-left">
        <img class="cfdq" src="img/lb2-1.jpg" alt=""/>
        <h5><a class="" href="">美的冰箱BCD-261WTGPM冰川银</a></h5>
        <p><a href="">市场价:￥5158</a></p>
        <span><a href="">销售价￥4999</a></span>
    </div>
    <div class="row first-f mx-0 float-left">
        <div class="col-3 px-0 border border-left-0 ">
            <a href=""> <img src="img/f2-1.jpg" alt=""/></a>
            <p>
                <a href="">
                    美的冰箱BCD-536WK...
                    <br/>
                    市场价:￥4798
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>3999</span>
                </a>
            </p>

        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f2-2.jpg" alt=""/></a>
            <p>
                <a href="">
                    美的冰箱BCD-540WK...
                    <br/>
                    市场价:￥8398
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>6999</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f2-3.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f2-4.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
    </div>
    <div class="row first-f mx-0 float-left first-t">
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f2-5.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f2-6.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f2-7.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f2-8.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>
        </div>
    </div>

    <div class="clearf"></div>
    <ul class="brand_show list-unstyled  brand_pic">
        <li><a href=""><img src="img/2-1.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-2.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-3.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-4.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-5.jpg" alt=""/></a></li>
        <li><a href=""><img class="pic-6" src="img/2-6.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-7.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-8.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-9.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-10.jpg" alt=""/></a></li>
    </ul>

    <div class="section-1">
        <h3 class=" float-left" >
            <img src="img/red_heart.png" alt=""/>
            <span>3F&nbsp;</span>
             波轮/滚筒洗衣机、干衣机
        </h3>
        <ul class="elec_title  float-right">
            <li class="active"><a data-toggle="tab" href="">热门</a></li>
            <li class="" ><a data-toggle="tab" href="">滚筒</a></li>
            <li class=""><a data-toggle="tab" href="">波轮</a></li>
        </ul>
    </div>

    <div class="dqlunbo float-left">
        <img class="cfdq" src="img/lb3-1.jpg" alt=""/>
        <h5><a class="" href="">美的冰箱BCD-261WTGPM冰川银</a></h5>
        <p><a href="">市场价:￥5158</a></p>
        <span><a href="">销售价￥4999</a></span>
    </div>
    <div class="row first-f mx-0 float-left">
        <div class="col-3 px-0 border border-left-0 ">
            <a href=""> <img src="img/f3-1.jpg" alt=""/></a>
            <p>
                <a href="">
                    美的冰箱BCD-536WK...
                    <br/>
                    市场价:￥4798
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>3999</span>
                </a>
            </p>

        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f3-2.jpg" alt=""/></a>
            <p>
                <a href="">
                    美的冰箱BCD-540WK...
                    <br/>
                    市场价:￥8398
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>6999</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f3-3.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f3-4.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
    </div>
    <div class="row first-f mx-0 float-left first-t">
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f3-5.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f3-6.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f3-7.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f3-8.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>
        </div>
    </div>

    <div class="clearf"></div>
    <ul class="brand_show list-unstyled  brand_pic">
        <li><a href=""><img src="img/2-1.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-2.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-3.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-4.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-5.jpg" alt=""/></a></li>
        <li><a href=""><img class="pic-6" src="img/2-6.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-7.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-8.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-9.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/2-10.jpg" alt=""/></a></li>
    </ul>


    <div class="section-1">
        <h3 class=" float-left" >
            <img src="img/red_heart.png" alt=""/>
            <span>4F&nbsp;</span>
             手机、手机配件
        </h3>
        <ul class="elec_title  float-right">
            <li class="active"><a data-toggle="tab" href="">热门</a></li>
            <li class="" ><a data-toggle="tab" href="">5.0-4.6英寸</a></li>
            <li class=""><a data-toggle="tab" href="">5.5-5.1英寸 </a></li>
            <li class=""><a data-toggle="tab" href="">5.6英寸及以上 </a></li>
        </ul>
    </div>

    <div class="dqlunbo float-left">
        <img class="cfdq" src="img/lb4-1.jpg" alt=""/>
        <h5><a class="" href="">美的冰箱BCD-261WTGPM冰川银</a></h5>
        <p><a href="">市场价:￥5158</a></p>
        <span><a href="">销售价￥4999</a></span>
    </div>
    <div class="row first-f mx-0 float-left">
        <div class="col-3 px-0 border border-left-0 ">
            <a href=""> <img src="img/f4-1.jpg" alt=""/></a>
            <p>
                <a href="">
                    美的冰箱BCD-536WK...
                    <br/>
                    市场价:￥4798
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>3999</span>
                </a>
            </p>

        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f4-2.jpg" alt=""/></a>
            <p>
                <a href="">
                    美的冰箱BCD-540WK...
                    <br/>
                    市场价:￥8398
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>6999</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f4-3.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f4-4.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
    </div>
    <div class="row first-f mx-0 float-left first-t">
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f4-5.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f4-6.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f4-7.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>


        </div>
        <div class="col-3 px-0 border border-left-0 border-top-0">
            <a href=""> <img src="img/f4-8.jpg" alt=""/></a>
            <p>
                <a href="">
                    西门子消毒柜HS2...
                    <br/>
                    市场价:￥1891
                </a>
            </p>
            <p class="pRed">
                <a href="">
                    销售价:￥
                    <span>1576</span>
                </a>
            </p>
        </div>
    </div>

    <div class="clearf"></div>
    <ul class="brand_show list-unstyled  brand_pic">
        <li><a href=""><img src="img/4-1.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/4-2.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/4-3.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/4-4.jpg" alt=""/></a></li>
        <li><a href=""><img src="img/4-5.jpg" alt=""/></a></li>
        <li><a href=""><img class="pic-6" src="img/4-6.jpg" alt=""/></a></li>
    </ul>
    <img src="img/foot.jpg" alt=""/>
    <p class="sale">限时特惠</p>
</div>
<my-footer></my-footer>
</div>
</template>

<script>
  
export default {
    data() {
      return {
         spanClass1:{
           hiddener:false
         },
         spanClass2:{
          hiddener:true
         },
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          loop:true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
          silunbo: {
          slidesPerView: 4,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
         
        }
      },
    methods:{
       enter1(){this.spanClass1.hiddener=false;this.spanClass2.hiddener=true;},
       enter2(){this.spanClass2.hiddener=false;this.spanClass1.hiddener=true;} 
       
    }



    }
   

</script>
 <style scoped>
 .mainbody{
            width: 1180px;
            margin-right: auto;
            margin-left: auto;
        }
        .competive{width: 205px;
                    height: 146px;
                     background-image:url(../../public/img/recommend_03.png) 
                    }
        .competive a{display: inline-block;
                       width: 140px;
                       height:42px;
                       line-height:42px;
                      font-size: 18px;
                      border-bottom: 1px solid #fff;
                      color: #fff;
                      text-decoration: none;
                      text-align: center;
                      margin:52px 32.5px;
        }
        .coin{width:243px;height:145px;border-right: 3px solid #f0f0f0}
        .coin img{width:160px;height:140px;
                  float:right;
                 margin-top:-60px;padding-right: 20px;
                }
        .coin>p{font-size: 12px;
               color: #333333;
               padding-top: 25px;
               padding-left:10px;
               padding-bottom: 14px;
               margin:0;
               width: 118px;}
        .coin>span{font-size: 14px;color:#d01010;padding:10px;}
        .youlove{width:1180px;height:200px;
                  border: 1px solid #ececec;}
        .guess{width:196px;height:100%;}
        .guess>img{width:110px;height:110px;
                margin: 20px 44px;}
        .guess p{line-height: 18px;
                  margin-bottom: 0;
                  text-align: center;
                  color: #333;
                  font-size: 12px;}
        .guess span{
            font-size: 18px;
            color: #d01010;
            height: 24px;
            display: block;
            text-align: center;}
           #lunbo img{width:723px;height:446px;padding:0 10px;}
        .fluid{background-color:#f0f0f0;}



.menu_sort ul li{width:205px;height:45.2px;background-color: #f00;}
.menu_sort ul li:hover{background-color:#fff}
.menu_sort ul li:hover a{color:#f00}
.menu_sort ul li a{color:#fff;line-height:45.2px;text-decoration: none;padding-left:18px; float:left}
#lunbo{margin:0 2px;}
.carousel-indicators li{
    width:10px;height:10px;
    border-radius: 50%;
}

.news{width:238px;height:198px;border:1px solid rgb(205, 205, 205);background-color: #fff;}
.news h3{font-size: 16px; font-weight: normal;
          color: #333333;margin-bottom:0px;
          height:46px;line-height: 46px;margin-left:-145px}
          
.news hr{margin:0 auto;border:0.5px dashed #cdcdcd}
.news ul{width:238px;height:152px;padding:7px 0 14px 7px;margin-bottom:0;}
.news li{width:236px; height: 26px;}
.news li:hover a{color:#d01010}
.news li  a{color: #626262;text-decoration: none;font-size: 12px;float:left}
.bk,.rm{display: block; width:117px;height:30px;float:left;font-size:20px;
     text-align: center;color: #333;
     text-decoration: none!important;
     }
  .bk:hover {color:#d01010}   
  .rm:hover {color:#d01010}   
.news img{width:238px;height:216px;}
.hfont{margin-left: -840px}
.hfont span{color: #666; font-size: 18px;}
.section-1 h3{margin-bottom: 0px;border-bottom-color: #f00;}

.section-1{padding-top:50px;height:83px;border-bottom: 1px solid red;}
.elec_title{list-style: none; height:33px;}
.elec_title li+li{border-left: 0}

.elec_title li{float:left; border:1px solid #ddd;height:33px;line-height: 33px;  text-align:center;border-bottom: 0; }


.elec_title li a{text-decoration: none;text-align: center;
                   padding:0 15px;color:#333;font-size:14px;}
.elec_title li:hover{z-index:20;
                     border:1px solid red;
                     border-bottom:1px solid white;
                     }
                   

.dqlunbo{width:396px;height:465px;border:1px solid #ddd;text-align: center}
.cfdq{width:300px;height:300px;text-align: center;margin-top: 30px;}
.dqlunbo h5 a{font-size:18px;color:#333;text-decoration: none}
.dqlunbo p a{font-size:12px;color:#333;text-decoration: none}
.dqlunbo span a{font-size:18px;color:#d01010;text-decoration: none}
.first-f{float:left;width:784px;height:232.5px;margin-top: -16px;}
.first-f img{width:194px;height:158px;padding: 9px 27px;}
.first-f p {padding: 0px 24px; font-size:12px;text-align: center;margin-bottom:0}
.first-f p a{color: #4c4c4c; text-decoration: none;}
.first-f .pRed a{color:#d01010;font-size: 14px;}
.first-f p span{font-size:20px;color:#d01010}
.first-t {margin-top: 0;border-top: 0;}
.clearf{clear:both}
.pic-6{width:117px;height:40px;}
.brand_show{   height:70px;
                border:1px solid #fff;
                margin: 15px 0px 15px 0px;
                background-color:#f7f7f7;
                padding: 10px 0px;
                }
.brand_show li{float:left;}
.brand_pic a img{width:117px!important;}
.sale{line-height: 30px;
      font-size: 18px;
      color: #666;
      border-bottom:1px solid #eaeaea}

 .swiper-container {
     float: left;
    margin-left:0;
    margin-right: auto;
    width:396px;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}  
#floor-lb .swiper-container{width:967px;height:146px}
.copy{height:233px;padding-right:0.75px;padding-left:0.75px;}
.twoR{margin-top:0px}
.hiddener{display:none}

 </style>