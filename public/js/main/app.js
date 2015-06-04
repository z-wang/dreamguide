/**
 * Created by zihanwang on 5/26/15.
 */
define([
    'angular',
    './../controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    //'use strict';
    console.log("app");

    return ng.module('app', [
        'app.services',
        'app.controllers',
        'app.filters',
        'app.directives'
    ]);
});






//        config(function($stateProvider, $urlRouterProvider){
//            // For any unmatched url, send to /index
//            $urlRouterProvider.otherwise("/index");
//
//            $stateProvider
//                .state('index', {
//                    url:"/index",
//                    templateUrl: "partial/index.html",
//                    controller:"indexCtrl"
////                    template: '<div ui-view></div>',
////                    data: {
////                        css: 'styles/custom-state1-override.css'
////                    }
//                })
//
//                .state('login',{
//                    url:"/login",
//                    templateUrl: "partial/login.html",
//                    controller: "loginCtrl"
//                })
//
//                //.state('about', {
//                //    url: "/about",
//                //    templateUrl: "partial/footer/about.html",
//                //    controller: "aboutCtrl"
//                //})
//                //
//                //.state('register', {
//                //    url: "/register",
//                //    templateUrl: "partial/register.html",
//                //    controller: "registerCtrl"
//                //})
//                //
//                .state('one2one', {
//                    url: "/one2one",
//                    templateUrl: "partial/one2one.html",
//                    controller: "one2oneCtrl"
//                })
//        });
