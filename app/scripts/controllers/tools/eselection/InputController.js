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

                $scope.tutor = {
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
                //$scope.input = {};
                $scope.input = {
                    applyMajor : "金融",
                    applyDegree : "硕士",
                    internship : 0,
                    fulltime : 0,
                    patent : 0,
                    publication : 0
                };
                var schoolValues = {
                    "北大清华" : 1,
                    "C9" : 2,
                    "985" : 3,
                    "211" : 4,
                    "本专业强校(top 30)" : 5,
                    "其他" : 6
                };


                $scope.submitApply = function(){
                    var rawData = {
                        undergradSchool : Number(schoolValues[$scope.input.undergradSchool]),
                        toefl: Number($scope.input.toefl),
                        gre: Number($scope.input.gre),
                        gpa: Number($scope.input.gpa)
                    };
                    console.log(rawData);

                    $http.post('/tools/eselection/getPredictions', {
                        input: rawData
                    }).
                        success(function(data, status, headers, config) {
                            $scope.results = data;
                            console.log("prediction success");
                        }).
                        error(function(data, status, headers, config) {
                            console.log(data);
                        });
                    //$http.post('/tools/eselection/inputquery', {
                    //    input: $scope.input
                    //}).
                    //    success(function(data, status, headers, config) {
                    //        console.log(data);
                    //    }).
                    //    error(function(data, status, headers, config) {
                    //        console.log(data);
                    //    });

                    //$location.path("/thankyou");
                };

                $scope.reset = function(){
                    console.log($scope.input);

                    $scope.input = {
                        applyMajor : "金融",
                        applyDegree : "硕士",
                        internship : 0,
                        fulltime : 0,
                        patent : 0,
                        publication : 0
                    };
                };
            }]);
});