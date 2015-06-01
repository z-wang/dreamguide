/**
 * Created by zihanwang on 5/31/15.
 */
define([
    './module',
    'jquery'
], function (controllers) {
    //'use strict';
    controllers.controller('registerCtrl', ['$scope', function ($scope) {
        console.log('register');
        $(window).scrollTop(0);
        $(window).unbind("scroll");
        $('.navbar').unbind('mouseenter mouseleave');
        $(".navbar-fixed-top").addClass("top-nav-collapse");

    }]);
});