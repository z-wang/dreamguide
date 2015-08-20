/**
 * Created by zihanwang on 6/22/15.
 */
define(['app'], function(app)
{
    app.controller('ProfileController',
        [
            '$scope', '$rootScope', '$http', '$location',
            function($scope, $rootScope, $http, $location)
            {
                //[ZW] TODO: this block controls the page style but going to move them to a service or directive
                $(window).scrollTop(0);
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

                $scope.profileSelectionValue = 'contact_info';

                $scope.profileSelection = function(name){
                    console.log(name);
                    $scope.profileSelectionValue = name;
                };

                $scope.isActive = function(name){
                    return $scope.profileSelectionValue == name;
                };
                //$scope.firstName = "John";
                //$scope.lastName = "Doe";
                //console.log($scope);
            }
        ]);
});