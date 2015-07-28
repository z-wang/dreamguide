/**
 * Created by zihanwang on 7/15/15.
 */

define([
    'app'
], function(app)
{
    app.controller('ThankYouController',
        ['$scope','$location', function($scope, $location) {
            console.log("thanks");
            $(window).scrollTop(0);
            $(window).unbind("scroll");
            $('.navbar').unbind('mouseenter mouseleave');
            $(".navbar-fixed-top").addClass("top-nav-collapse");

            $scope.jumpToProfile = function(){

            }
        }])
});