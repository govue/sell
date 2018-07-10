import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

/* import './common/stylus/index.styl'; 移动端1像素时引入，但考虑到代码维护，还是要各个组件中单独引入*/

/* eslint-disable no-new */
Vue.use(VueRouter);

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
