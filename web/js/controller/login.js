/**
 * Created by zihanwang on 5/16/15.
 */
angular.module('dgApp.controllers', [])
    .controller("loginCtrl", function($scope) {
        $(window).scrollTop(0);
        $(window).unbind("scroll");
        $('.navbar').unbind('mouseenter mouseleave');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        console.log($scope);
});