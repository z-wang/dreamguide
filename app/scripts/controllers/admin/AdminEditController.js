/**
 * Created by zihanwang on 9/6/15.
 */
define([
    'app'
], function(app)
{
    app.controller('AdminEditController',
        ['$scope','$location','$http', 'ngTableParams','$sce', function($scope, $location,$http, ngTableParams, $sce) {
            console.log('admin/edit');


            $(window).scrollTop(0);
            $(window).unbind("scroll");
            $('.navbar').unbind('mouseenter mouseleave');
            $(".navbar-fixed-top").addClass("top-nav-collapse");

            $scope.toRegister = function(){
                $(window).scrollTop(0);
                $location.path("/register");
            };
            console.log($scope);

            $scope.search = {
                data:[]
            };
            $scope.availableUsers = [];
            $scope.searchUser = function(){
                //search and get
                console.log("search");
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
                        count: 10           // count per page
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

            $scope.editRecord = function(index){
                console.log("edit",index);
                console.log($scope.search.data[index]);
                $scope.tutor = angular.copy($scope.search.data[index]._source);
                $scope.resetTutor = angular.copy($scope.search.data[index]._source);
                console.log($scope.tutor);
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

            $scope.submitApply = function(){
                console.log($scope.tutor);

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
                    console.log(data);
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
                    console.log(data);
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
                    console.log(data);
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
                        console.log(data);
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