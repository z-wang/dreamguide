/**
 * Created by zihanwang on 12/31/15.
 */
/**
 * Created by zihanwang on 6/14/15.
 */
define([
    '../../../app',
    'jquery'
], function(app)
{
    app.controller('InputController',
        ['$scope', '$http', '$window','$location','$route', '$anchorScroll', 'emailService','searchService',
            function($scope, $http, $window, $location, $route, $anchorScroll, emailService, searchService) {
                console.log('input');
                $location.hash('index');
                $anchorScroll();
                //$(window).scrollTop(0);
                //$(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

                var lastRoute = $route.current;
                $scope.$on('$locationChangeSuccess', function(event) {
                    $route.current = lastRoute;
                });

                $scope.tutor = {
                    gradSchool : "",
                    gradMajor : ""
                };

                $scope.school = {
                    show : false
                };

                $scope.showSchool = function(name){
                    console.log(name);
                    $scope.school.show = true;
                    $scope.school.name = name;
                    for (var i = 0; i < $scope.results.length; i++) {
                        if($scope.results[i].name == name) {
                            $scope.school.percentage = Number($scope.results[i].prediction);
                        }
                    }
                    $scope.school.toeflPercentage = Number($scope.school.percentage) + 5 < 100 ? Number($scope.school.percentage) + 5 : 100;
                    $scope.school.grePercentage = Number($scope.school.percentage) + 2 < 100 ? Number($scope.school.percentage) + 2 : 100;
                    $scope.school.gpaPercentage = Number($scope.school.percentage) + 8 < 100 ? Number($scope.school.percentage) + 8 : 100;
                    console.log($scope.school);

                    if ($location.hash() !== 'school') {
                        $location.hash('school');
                    } else {
                        $anchorScroll();
                    }

                };

                $scope.flags = {
                    schoolList : false,
                    applicationList: false,
                    singleSchool : false,
                    showPercentage : false
                };

                $scope.applicationList = {
                    top : [],
                    reality: [],
                    backup : []
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

                $scope.showPercentage = function(){
                    $scope.flags.showPercentage = !$scope.flags.showPercentage;
                };

                $scope.submitApply = function(){
                    var rawData = {
                        undergradSchool : Number(schoolValues[$scope.input.undergradSchool]),
                        toefl: Number($scope.input.toefl),
                        gre: Number($scope.input.gre),
                        gpa: Number($scope.input.gpa)
                    };
                    //$location.hash();
                    //$anchorScroll();
                    if ($location.hash() !== 'applicationList') {
                        $location.hash('applicationList');
                    } else {
                        $anchorScroll();
                    }

                    $http.post('/tools/eselection/getPredictions', {
                        input: rawData
                    }).
                        success(function(data, status, headers, config) {
                            $scope.results = data.results;
                            $scope.flags.applicationList = true;
                            $scope.applicationList = data.schoolList;
                            console.log(data);
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