/**
 * Created by zihanwang on 12/31/15.
 */
/**
 * Created by zihanwang on 6/14/15.
 */
define([
    '../../../app'
], function(app)
{
    app.controller('InputController',
        ['$scope','$location','$http', 'emailService','searchService',
            function($scope, $location,$http, emailService, searchService) {
                console.log('input');
                $(window).scrollTop(0);
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

                $scope.tutor={
                    gradSchool : "",
                    gradMajor : ""
                };
                $scope.toRegister = function(){
                    $(window).scrollTop(0);
                    $location.path("/register");
                };

                //set selections
                $scope.undergradSchools = ["北大清华", "C9",  "985", "211", "本专业强校(top 30)", "其他"];
                $scope.applyDegrees = ["高中", "本科", "硕士", "博士"];
                $scope.applyMajors = ["金融", "会计", "电子工程", "计算机"];
                $scope.input = {};


                $scope.submitApply = function(){
                    $http.post('/tools/eselection/inputquery', {
                        input: $scope.input
                    }).
                        success(function(data, status, headers, config) {
                            console.log(data);
                        }).
                        error(function(data, status, headers, config) {
                            console.log(data);
                        });

                    //$location.path("/thankyou");
                };

                $scope.reset = function(){
                    console.log($scope.input);
                    $scope.input = {};
                };
            }]);
});