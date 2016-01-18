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
    app.controller('InputController', [
        '$scope',
        '$http',
        '$modal',
        '$log',
        '$window',
        '$location',
        '$route',
        '$anchorScroll',
        'emailService',
        'searchService',
        function($scope, $http, $modal, $log, $window, $location, $route, $anchorScroll, emailService, searchService) {
            $location.hash('index');
            $anchorScroll();
            //$(window).scrollTop(0);
            //$(window).unbind("scroll");
            $('.navbar').unbind('mouseenter mouseleave');
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            //TODO: this part is to make $anchorScroll work and keep click tab work
            var lastRoute = $route.current;
            $scope.$on('$locationChangeSuccess', function(event) {
                if($route.current.$$route.templateUrl === "/partials/tools/eselection/input.html") {
                    $route.current = lastRoute;
                }
            });

            $scope.barcode = {
                web : '<img src="image/barcode/dreamguide_web.png" alt="barcode" style="width:120px;height:120px;">'
            };

            $scope.line = {
                acceptRate : {
                    labels : ["2012秋季(%)", "2013春季(%)", "2013秋季(%)", "2014春季(%)", "2014秋季(%)", "2015春季(%)"],
                    series : [' 本学校 ', ' 同档次学校 '],
                    data : [[38, 37, 39, 37, 37, 36],
                        [41, 43, 40, 42, 39, 41]]
                },
                averageGpa : {
                    labels : ["2012秋季", "2013春季", "2013秋季", "2014春季", "2014秋季", "2015春季"],
                    series : [' 本学校 ', ' 同档次学校 '],
                    data : [[3.4, 3.2, 3.4, 3.1, 3.4, 3.2],
                        [3.3, 3.4, 3.3, 3.3, 3.3, 3.3]]
                },
                averageGMAT : {
                    labels : ["2012秋季", "2013春季", "2013秋季", "2014春季", "2014秋季", "2015春季"],
                    series : [' 本学校 ', ' 同档次学校 '],
                    data : [[690, 680, 700, 690, 700, 690],
                        [680, 680, 680, 670, 680, 680]]
                },
                averageTOEFL : {
                    labels : ["2012秋季", "2013春季", "2013秋季", "2014春季", "2014秋季", "2015春季"],
                    series : [' 本学校 ',  ' 同档次学校 '],
                    data : [[92, 93, 90, 94, 93, 93],
                        [90, 84, 91, 88, 90, 91]]
                }
            };

            $scope.tutor = {
                gradSchool : "",
                gradMajor : ""
            };

            $scope.school = {
                show : false
            };

            $scope.showSchool = function(name){
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

                if ($location.hash() !== 'school') {
                    $location.hash('school');
                } else {
                    $anchorScroll();
                }
            };

            $scope.openModal = function (modalName, size) {
                //size = 'lg', 'sm' or blank
                var templateUrl = 'applicationModalContent.html';
                if (modalName === 'tutorList') {
                    templateUrl = 'tutorListModalContent.html';
                } else if (modalName === 'majorInfo') {
                    templateUrl = 'majorInfoModalContent.html';
                } else if (modalName === 'reviews') {
                    templateUrl = 'reviewsModalContent.html';
                }

                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: templateUrl,
                    controller: 'InputModalImproveController',
                    size:size,  //'sm'/'lg'
                    resolve: {
                        items: function () {
                            return undefined
                        },
                        tutor: function(){
                            return undefined
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
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
                        console.log($scope);
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

    app.controller('InputModalImproveController',[
        '$scope', '$modalInstance', 'items', 'tutor', '$http','$window','$rootScope','$location','encodeService',
        function($scope,$modalInstance, items, tutor, $http, $window, $rootScope, $location, encodeService){
            $scope.chart={
                application : {
                    labels : ["学校", "GPA", "TOEFL", "GMAT", "专业"],
                    series : [' 同期申请者 ', '优秀申请者', ' 申请者 '],
                    data : [
                        [5.5, 4, 5, 5.4, 6.1],
                        [6, 4.8, 5.9, 5.1, 6],
                        [5, 3.6, 4.2, 4.8, 6.6]
                    ]
                },
                major : {
                    labels : ["金融", "经济", "其他商科", "理科", "工程学", "其他"],
                    data : [220, 110, 95, 75, 100, 50],
                    type : 'PolarArea',
                    toggle : function(){
                        $scope.chart.major.type = $scope.chart.major.type === 'PolarArea' ? 'Pie' : 'PolarArea';
                    }
                }
            };

            $scope.Info = {
                tutorList : [
                    {
                        school : "University of Maryland, College Park",
                        email : "yuheng.ding@rhsmith.umd.edu",
                        image : "image/avatar/yuheng.ding@rhsmith.umd.edu.png",
                        degree : "Master of Business",
                        major : "Finance",
                        name : 'Gavin'
                    },
                    {
                        school : "University of Rochester",
                        email : "taohuang@163.com",
                        image : "image/avatar/taohuang@163.com.png",
                        degree : "Master of Science",
                        major : "Finance",
                        name : 'Tao'
                    },
                    {
                        school : "Johns Hopkins University",
                        email : "belyliuxuan@163.com",
                        image : "image/avatar/belyliuxuan@163.com.png",
                        degree : "Master",
                        major : "Finance",
                        name : 'Bely'
                    }
                ]
            };

            $scope.openInfoPage = function(index) {
                var tutor = $scope.Info.tutorList[index];
                var idEncoding = encodeService.simpleEncode(tutor.email);
                //console.log(idEncoding);
                $window.open("/tutor_profile/"+idEncoding);
            };

            $scope.ok = function () {
                //$modalInstance.close($scope.selected.item);
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }
    ]);

});