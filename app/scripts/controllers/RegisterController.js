/**
 * Created by zihanwang on 6/14/15.
 */
define([
    'app'
], function(app)
{
    app.controller('RegisterController',
        ['$scope','$location','$http', 'emailService','searchService',
            function($scope, $location,$http, emailService, searchService) {
                console.log('register');
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

            $scope.availableSchools = [];
            $scope.availableMajors = [];
            $scope.availableFields = ["Architecture",  "Design", "Landscape Architecture", "Urban & Regional Planning", "Teaching",
                "Counseling", "Social Work", "Library/Info Services", "Internships & Short-Term Work", "Volunteering", "Translation & Interpretation", "Tourism", "Business",
                "Research", "Arts", "Broadcasting", "Fashion", "Films", "Museums", "Performing Arts","Advertising", "Journalism",
                "Aerospace", "Civil/Environ", "EE", "CS/IT", "IEOR", "Mech", "MatSci", "Nuclear", "Statistics", "Law", "Public Advocacy",
                "Accounting", "Consulting", "HR", "Insurance", "Real Estate", "Environmental Engineering",  "PR", "Finance", "Investment",
                "Dentistry", "Optometry", "Pharmacy", "Veterinary Medicine", "Health Management", "Agriculture", "Bioinformatics & Biostatistics",
                "Biotechnology", "Botany", "Forensic Science", "Genetics", "Marine Science", "Science Education", "Zoology"];
            $scope.availableCountries = ["Australia", "Canada", "China", "France", "Germany", "Greece", "Hong Kong", "Japan", "South Korea",
                "Russia", "Singapore", "Taiwan", "United States", "United Kingdom", "Other" ];
            $scope.availableDegrees = ["Associate", "Associate of Arts", "Associate of Business", "Associate of Science", "Bachelor", "Bachelor of Business",
                "Bachelor of Engineering", "Bachelor of Arts", "Bachelor of Science", "Master", "Master of Business", "MBA", "Master of Engineering",
                "Master of Science", "Master of Arts", "PhD", "JD", "MD"];

            $scope.submitApply = function(){
                if(!$scope.cropper.croppedImage){
                    alert("请上传头像图片");
                    return;
                }

                var temp = $scope.tutor.passWord;
                console.log(temp);
                $scope.tutor.keep = temp;
                $scope.tutor.passWord = md5(temp);
                $scope.tutor.student_active = 0;
                $scope.tutor.tutor_active = 0;
                $scope.tutor.registerAs = "Tutor";
                $scope.tutor.self_apply = 1;
                $scope.tutor.createdTime = new Date();

                searchService.indexRecord('users', 'accounts', $scope.tutor.email, $scope.tutor, function(data){
                    console.log(data);
                });

                $scope.uploadImage($scope.tutor.email);
                var message = "新加入用户ID为 "+$scope.tutor.email + ", 请及时核实。";
                emailService.sendEmailTo('57945468@qq.com', message);
                emailService.sendEmailTo('meng.zhang@diycac.org', message);
                emailService.sendEmailTo('timwang2k8@gmail.com', message);

                $location.path("/thankyou");
            };

            $scope.reset = function(){
                emailService.sendEmailTo('231018434@qq.com', "reset");
                //console.log($scope.tutor);
                $scope.tutor = {};
            };

            var loadSchoolsInfo = function(){
                var req = {
                    method: 'POST',
                    url: 'http://dreamguideedu.com:9200/dreamguide/schools/_search',
                    params: {
                        size: 1000,
                        from: 0
                    },
                    data: {}
                };

                $http(req).success(function(data){
                    data.hits.hits.map(function(d){
                        if(d._source.nameen!=undefined && d._source.nameen.length>0 && $scope.availableSchools.indexOf(d._source.nameen) <0 ){
                            $scope.availableSchools.push(d._source.nameen);
                        }
                    });
                }).error(function(data){
                    console.log(data);
                });

                var req1 = {
                    method: 'POST',
                    url: 'http://dreamguideedu.com:9200/dreamguide/specialtys/_search',
                    params: {
                        size: 1000,
                        from: 0
                    },
                    //headers: {
                    //    'Content-Type': undefined
                    //},
                    data: {}
                };

                $http(req1).success(function(data){
                    console.log(data);
                    data.hits.hits.map(function(d){
                        if(d._source.nameen!=undefined && d._source.nameen.length>0 && $scope.availableMajors.indexOf(d._source.nameen) <0 ){
                            $scope.availableMajors.push(d._source.nameen);
                        }
                    });
                }).error(function(data){
                    console.log(data);
                });
            };
            $scope.cropper = {};
            $scope.cropper.sourceImage = null;
            $scope.cropper.croppedImage = null;

            $scope.uploadImage = function(name){
                if(!$scope.cropper.croppedImage)
                    return;
                var result = $scope.cropper.croppedImage;
                $http.post('/img/upLoad', {
                    msg: result,
                    name: name+'.png'
                }).
                    success(function(data, status, headers, config) {
                        console.log(data);
                        // this callback will be called asynchronously
                        // when the response is available
                    }).
                    error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            };

            loadSchoolsInfo();
        }]);
});