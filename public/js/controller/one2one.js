/**
 * Created by zihanwang on 5/22/15.
 */
angular.module('dgApp.controllers', [])
    .controller("one2oneCtrl", function($scope) {
        $(window).scrollTop(0);
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        $(window).unbind("scroll");
        $('.navbar').unbind('mouseenter mouseleave');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        alert($scope.very);
    });