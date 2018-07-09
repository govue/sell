import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';

/* eslint-disable no-new */
Vue.use(VueRouter);

let app = Vue.extend(App);
let router = new VueRouter({
    linkActiveClass: 'active'
});

router.start(app, '#app');
