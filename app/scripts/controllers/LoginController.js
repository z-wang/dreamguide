/**
 * Created by zihanwang on 6/14/15.
 */
define(['app'], function(app)
{
    app.controller('LoginController',
        [
            '$scope', '$rootScope', '$http', '$location',
            function($scope, $rootScope, $http, $location)
            {
                //[ZW] TODO: this block controls the page style but going to move them to a service or directive
                $(window).scrollTop(0);
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

                $scope.auth = function(){
                    var pwd = $scope.password;
                    var dataSet = {
                        query:{
                            filtered:{
                                filter:{
                                    bool: {
                                        must: [
                                            {
                                                term: {_id: $scope.account}
                                            },
                                            {
                                                term: {passWord: md5(pwd)}
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    };
                    console.log(JSON.stringify(dataSet));
                    var req = {
                        method: 'POST',
                        url: 'http://dreamguideedu.com:9200/dreamguide/accounts/_search',
                        data:JSON.stringify(dataSet)
                    };

                    $http(req).success(function(data){
                        console.log(data);
                        if(data.hits.total>0){
                            $rootScope.user = data.hits.hits[0]._source;
                            console.log("go");
                            $location.path("/");
                        }else{
                            alert("用户名或密码不正确！");
                        }
                    }).error(function(data){
                        alert("用户名或密码不正确！");
                    });
                };

                $scope.register = function(){
                    var dataSet = JSON.stringify({
                        id : $scope.phoneNum,
                        password : md5($scope.password, "dream")
                    });
                    var req = {
                        method: 'POST',
                        url: 'http://dreamguideedu.com:9200/dreamguide/accounts/'+$scope.phoneNum,
                        data: dataSet
                    };
                    console.log(dataSet);

                    $http(req).success(function(data){
                        console.log("go");
                       // $location.path("/");
                        $rootScope.user = {
                            id:data._id
                        };
                        console.log($rootScope);
                        // $state.go("index");
                    }).error(function(data){
                        alert("验证码不正确！");
                        console.log(data);
                    });
                };

                //$scope.firstName = "John";
                //$scope.lastName = "Doe";
                //console.log($scope);
            }
        ]);
});