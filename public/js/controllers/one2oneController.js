/**
 * Created by zihanwang on 5/22/15.
 */
define([
    './module',
    'jquery'
], function (controllers) {
    'use strict';
    controllers.controller('one2oneCtrl', [function ($scope) {
        console.log("one2");
        $(window).scrollTop(0);
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $(window).unbind("scroll");
        $('.navbar').unbind('mouseenter mouseleave');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }]);
});
