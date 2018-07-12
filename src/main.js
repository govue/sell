import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl'; /* 移动端1像素时引入，但考虑到代码维护，还是要各个组件中单独引入(各个代码中引入会有路径引用问题)*/

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);
let router = new VueRouter({
    linkActiveClass: 'active'
});

router.map({
    '/goods': {
        component: goods
    },
    '/ratings': {
        component: ratings
    },
    '/seller': {
        component: seller
    }
});

router.start(app, '#app');
router.go('/goods');
