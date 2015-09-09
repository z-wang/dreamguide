/**
 * Created by zihanwang on 9/6/15.
 */
define([
    'app'
], function(app)
{
    app.controller('AdminEditController',
        ['$scope','$location','$http', 'ngTableParams','$sce', function($scope, $location,$http, ngTableParams, $sce) {
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
                    $scope.majorTableParams = new ngTableParams({
                        page: 1,            // show first page
                        count: 5           // count per page
                    }, {
                        total: $scope.search.data.length, // length of data
                        getData: function($defer, params) {
                            $defer.resolve($scope.search.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        }
                    });
                    //data.hits.hits
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

                var searchUrl = 'http://dreamguideedu.com:9200/dreamguide/accounts/_search?q=_id:'+ $scope.search.context +'*';
                if($scope.search.context==undefined ||$scope.search.context==""){
                    searchUrl= 'http://dreamguideedu.com:9200/dreamguide/accounts/_search';
                }

                var req = {
                    method: 'POST',
                    url: searchUrl,
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
                    console.log(data);
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
                    //data.hits.hits
                }).error(function(data){
                    console.log(data);
                });
            };

            $scope.editRecord = function(index){
                console.log("edit",index);
                $scope.tutor = angular.copy($scope.search.data[index]._source);
                $scope.resetTutor = angular.copy($scope.search.data[index]._source);
            };

            $scope.editSchoolRecord = function(index){
                console.log("edit",index);
                $scope.school = angular.copy($scope.search.data[index]._source);
                $scope.resetSchool = angular.copy($scope.search.data[index]._source);
            };

            $scope.editMajorRecord = function(index){
                console.log("edit",index);
                $scope.major = angular.copy($scope.search.data[index]._source);
                $scope.resetMajor = angular.copy($scope.search.data[index]._source);
            };

            $scope.availableSchools = [];
            $scope.availableFields = [];

            $scope.submitPhoto = function(){
                if(!$scope.cropper.croppedImage){
                    alert("请上传头像图片");
                    return;
                }
                $scope.uploadImage($scope.tutor.email);
            };

            $scope.submitChange = function(name){
                $scope[name].editedTime = new Date();

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
                        if(d._source.namecn.length>0 && $scope.availableFields.indexOf(d._source.namecn) <0 ){
                            $scope.availableFields.push(d._source.namecn);
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

            loadSchoolsInfo();

        }]);
});