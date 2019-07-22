/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
//window.VueRouter = require('vue-router').default;
//window.VueAxios = require('vue-axios').default;
//window.Axios = require('axios').default;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
/*
let AppLayout = require('./components/index.vue');
let List = Vue.component('List', require('./components/list.vue'));
let Add = Vue.component('Add', require('./components/add.vue'));
let Edit = Vue.component('Edit', require('./components/edit.vue'));
let Delete = Vue.component('Delete', require('./components/delete.vue'));
let Detail = Vue.component('Detail', require('./components/detail.vue'));
*/
import AppLayout from './components/index.vue';
import List from './components/list.vue';
import Add from './components/add.vue';
import Edit from './components/edit.vue';
import Delete from './components/delete.vue';
import Detail from './components/detail.vue';

//Vue.use(VueRouter,VueAxios,axios);

const routes =[
    {name:'List',path:'/',component:List},
    {name:'Add',path:'/add',component:Add},
    {name:'Edit',path:'/edit/:id',component:Edit},
    {name:'Delete',path:'/delete/:id',component:Delete},
    {name:'Detail',path:'/detail/:id',component:Detail}
];
const router = new VueRouter({mode:'history',routes});
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//const app = new Vue({
//    el: '#app',
//});
//console.log('works..');
new Vue(
   Vue.util.extend(     
    { router },
    AppLayout
    )        
).$mount('#app');

//const router = new VueRouter({ mode: 'history'});
//const app = new Vue(Vue.util.extend({ router })).$mount('#app');