/**
 * Created by zihanwang on 9/6/15.
 */
define([
    'app'
], function(app)
{
    app.controller('AdminEditController',
        ['$scope','$location','$http', 'ngTableParams','NgTableParams','$sce', 'searchService', function($scope, $location,$http, ngTableParams, NgTableParams, $sce, searchService) {
            $(window).scrollTop(0);
            $(window).unbind("scroll");
            $('.navbar').unbind('mouseenter mouseleave');
            $(".navbar-fixed-top").addClass("top-nav-collapse");

            $scope.toRegister = function(){
                $(window).scrollTop(0);
                $location.path("/register");
            };

            $scope.flags = {
                userTable : false,
                tutorTable: false,
                schoolTable: false,
                majorTable: false
            };

            $scope.image = {
                defaultImage : 'image/avatar/zz@test.com.png'
            };

            $scope.search = {
                data:[]
            };
            $scope.availableUsers = [];
            $scope.searchUser = function(){
                console.log("search user");
                $scope.flags.tutorTable = false;
                $scope.flags.userTable = true;
                $scope.flags.schoolTable = false;
                $scope.flags.majorTable = false;
            };
            $scope.searchSchool = function(){
                console.log("search school");
                $scope.flags.tutorTable = false;
                $scope.flags.userTable = false;
                $scope.flags.schoolTable = true;
                $scope.flags.majorTable = false;

                var searchUrl = 'http://dreamguideedu.com:9200/dreamguide/schools/_search?q=nameen:'+ $scope.search.context +'*';
                if($scope.search.context==undefined ||$scope.search.context==""){
                    searchUrl= 'http://dreamguideedu.com:9200/dreamguide/schools/_search';
                }

                var req = {
                    method: 'POST',
                    url: searchUrl,
                    params: {
                        size: 10000,
                        from: 0
                    },
                    data:{}
                    //headers :{
                    //    "Content-type" : "application/x-www-form-urlencoded; charset=utf-8"
                    //},
                    //data: {
                    //    "query":   { "match_all": {}},
                    //    "_source": [ "namecn" ]
                    //}
                };

                $http(req).success(function(data){
                    $scope.search.data = data.hits.hits;
                    $scope.schoolTableParams = new ngTableParams({
                        page: 1,            // show first page
                        count: 5          // count per page
                    }, {
                        total: $scope.search.data.length, // length of data
                        getData: function($defer, params) {
                            console.log($scope.search.data);
                            $defer.resolve($scope.search.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        }
                    });
                    //data.hits.hits
                }).error(function(data){
                    console.log(data);
                });
            };
            $scope.searchMajor = function(){
                console.log("search major");
                $scope.flags.tutorTable = false;
                $scope.flags.userTable = false;
                $scope.flags.schoolTable = false;
                $scope.flags.majorTable = true;

                //specialtys
                var searchUrl = 'http://dreamguideedu.com:9200/dreamguide/specialtys/_search?q=nameen:'+ $scope.search.context +'*';
                if($scope.search.context==undefined ||$scope.search.context==""){
                    searchUrl= 'http://dreamguideedu.com:9200/dreamguide/specialtys/_search';
                }

                var req = {
                    method: 'POST',
                    url: searchUrl,
                    params: {
                        size: 10000,
                        from: 0
                    },
                    data:{}
                    //headers :{
                    //    "Content-type" : "application/x-www-form-urlencoded; charset=utf-8"
                    //},
                    //data: {
                    //    "query":   { "match_all": {}},
                    //    "_source": [ "namecn" ]
                    //}
                };

                $http(req).success(function(data){
                    console.log(data);
                    $scope.search.data = data.hits.hits;
                    //var datasets = [];
                    //
                    //$scope.search.data.map(function(d){
                    //    datasets.push(d._source);
                    //});

                    $scope.majorTableParams = new NgTableParams({
                        // initial sort order, not working
                       // sorting: { namecn: "asc" }
                        }, {
                            dataset: $scope.search.data
                        });

                }).error(function(data){
                    console.log(data);
                });
            };

            $scope.searchTutor = function(){
                //search and get
                $scope.flags.tutorTable = true;
                $scope.flags.userTable = false;
                $scope.flags.schoolTable = false;
                $scope.flags.majorTable = false;

                var queryObj = searchService.getByEmailQuery("email",$scope.search.context,"Tutor",1000);
                if($scope.search.context==undefined ||$scope.search.context==""){
                    queryObj = searchService.getByEmailQuery("email","","Tutor",1000);
                }
                searchService.makeQueryCallBack('users','accounts',queryObj,function(data){
                    $scope.search.data = data.hits.hits;
                    $scope.tableParams = new ngTableParams({
                        page: 1,            // show first page
                        count: 5           // count per page
                    }, {
                        total: $scope.search.data.length, // length of data
                        getData: function($defer, params) {
                            $defer.resolve($scope.search.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        }
                    });
                });
            };

            $scope.editRecord = function(index, data){
                console.log("edit",data[index]);
                $scope.tutor = angular.copy(data[index]._source);
                $http.post('/img/downLoad', {
                    name: data[index]._id
                }).
                    success(function(d, status, headers, config) {
                        if(d=="1"){
                            $scope.tutor.image = 'image/avatar/'+ data[index]._id+'.png';
                            console.log($scope.tutor.image);
                        }else{
                            $scope.tutor.image = $scope.image.defaultImage;
                        }
                    }).
                    error(function(d, status, headers, config) {
                        $scope.tutor.image = $scope.image.defaultImage;
                    });
                $scope.resetTutor = angular.copy(data[index]._source);
            };

            $scope.editSchoolRecord = function(index, data){
                console.log("edit",index);
                $scope.school = angular.copy(data[index]._source);
                $scope.resetSchool = angular.copy(data[index]._source);
            };

            //$scope.deleteSchoolRecord = function(index, data){
            //    console.log("delete",data[index]);
            //    //$scope.school = angular.copy(data[index]._source);
            //    //$scope.resetSchool = angular.copy(data[index]._source);
            //};

            $scope.editMajorRecord = function(index, data){
                console.log("edit",index);
                $scope.major = angular.copy(data[index]._source);
                $scope.resetMajor = angular.copy(data[index]._source);
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

            $scope.submitPhoto = function(){
                if(!$scope.cropper.croppedImage){
                    alert("请上传头像图片");
                    return;
                }
                $scope.uploadImage($scope.tutor.email);
            };

            $scope.submitChange = function(name){
                $scope[name].editedTime = new Date();

                if($scope[name].id==undefined || $scope[name].id.length==0){
                    var d = new Date();
                    var r = Math.floor(Math.random() * 6) + 1;
                    $scope[name].id = r + ""+ d.getTime();
                }
                var type = "specialtys";
                if(name==='school'){
                    type = 'schools';
                }

                var req = {
                    method: 'POST',
                    url: 'http://dreamguideedu.com:9200/dreamguide/'+ type +'/'+$scope[name].id,
                    //headers: {
                    //    'Content-Type': undefined
                    //},
                    data: JSON.stringify($scope[name])
                };

                $http(req).success(function(data){
                    alert("成功变更！");
                }).error(function(data){
                    console.log(data);
                    alert("服务器错误");
                });
            };

            $scope.submitApply = function(){
                $scope.tutor.editedTime = new Date();

                if($scope.tutor.passWord==undefined || $scope.tutor.passWord.length==0){
                    $scope.tutor.keep = $scope.tutor.email;
                    $scope.tutor.passWord = md5($scope.tutor.email);
                }
                var req = {
                    method: 'POST',
                    url: 'http://dreamguideedu.com:9200/dreamguide/accounts/'+$scope.tutor.email,
                    //headers: {
                    //    'Content-Type': undefined
                    //},
                    data: JSON.stringify($scope.tutor)
                };

                $http(req).success(function(data){
                    alert("成功变更！");
                }).error(function(data){
                    console.log(data);
                    alert("服务器错误");
                });
            };

            $scope.reset = function(){
                //console.log($scope.tutor);
                alert("恢复为原数据库数据");
                $scope.tutor = angular.copy($scope.resetTutor);
            };

            $scope.resetSchool = function(){
                //console.log($scope.tutor);
                alert("恢复为原数据库数据");
                $scope.school = angular.copy($scope.resetSchool);
            };

            $scope.resetMajor = function(){
                //console.log($scope.tutor);
                alert("恢复为原数据库数据");
                $scope.major = angular.copy($scope.resetMajor);
            };

            var loadSchoolsInfo = function(){
                var req = {
                    method: 'POST',
                    url: 'http://dreamguideedu.com:9200/dreamguide/schools/_search',
                    params: {
                        size: 1000,
                        from: 0
                    },
                    //headers: {
                    //    'Content-Type': undefined
                    //},
                    data: {}
                };

                $http(req).success(function(data){
                    data.hits.hits.map(function(d){
                        if(d._source.nameen.length>0 && $scope.availableSchools.indexOf(d._source.nameen) <0 ){
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
                    data.hits.hits.map(function(d){
                        if(d._source.nameen != undefined && d._source.nameen.length>0 && $scope.availableMajors.indexOf(d._source.nameen) <0 ){
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
                        alert("上传新头像成功");
                        // this callback will be called asynchronously
                        // when the response is available
                    }).
                    error(function(data, status, headers, config) {
                        alert("上传出错");
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            };

            $scope.addNew = function(name){
                Object.keys($scope.flags).map(function(d){
                    $scope.flags[d] = false;
                });

                $scope.flags[name+"Table"] = true;
                $scope[name] = {};
                $scope[name].editedTime = new Date();


            };

            loadSchoolsInfo();

        }]);
});