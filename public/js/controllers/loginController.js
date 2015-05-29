/**
 * Created by zihanwang on 5/27/15.
 */
define([
    './module',
    'jquery'
], function (controllers) {
    //'use strict';
    controllers.controller('loginCtrl', [function ($scope) {
        console.log('login');
        $(window).scrollTop(0);
        $(window).unbind("scroll");
        $('.navbar').unbind('mouseenter mouseleave');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        //$scope.firstName = "John";
        //$scope.lastName = "Doe";
        //console.log($scope);
    }]);
});
