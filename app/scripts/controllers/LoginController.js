/**
 * Created by zihanwang on 6/14/15.
 */
define(['app'], function(app)
{
    app.controller('LoginController',
        [
            '$scope',

            function($scope)
            {
                console.log('login');
                $(window).scrollTop(0);
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");
                //$scope.firstName = "John";
                //$scope.lastName = "Doe";
                //console.log($scope);
            }
        ]);
});