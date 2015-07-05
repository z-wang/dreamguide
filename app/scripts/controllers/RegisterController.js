/**
 * Created by zihanwang on 6/14/15.
 */
define([
    'app', 'ng-flow'
], function(app)
{
    app.controller('RegisterController',
        ['$scope','$location', function($scope, $location) {
                console.log('register');
                $(window).scrollTop(0);
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

            console.log($scope);
            console.log($scope.$flow);
                //console.log($flow);

            $scope.toRegister = function(){
                $(window).scrollTop(0);
                $location.path("/register");
            };

        }]);
});