
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MIntUI from "mint-ui"
import "mint-ui/lib/style.css"
import imgZoom from 'vue2.0-zoom'
import vueMagnify from 'vue-magnify';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

Vue.config.productionTip = false;
Vue.use(MIntUI);
Vue.use(ElementUI);
Vue.use(imgZoom);
Vue.use(vueMagnify);
Vue.use(VueAwesomeSwiper);

Vue.component("my-header",MyHeader);
Vue.component("my-footer",MyFooter);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
