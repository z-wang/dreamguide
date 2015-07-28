/**
 * Created by zihanwang on 6/24/15.
 */
define(['app'], function(app)
{
    app.controller('StudentRegController',
        [
            '$scope', '$rootScope', '$http', '$location',

            function($scope, $rootScope, $http, $location)
            {
                //[ZW] TODO: this block controls the page style but going to move them to a service or directive
                $(window).scrollTop(0);
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

                var phoneAuthCode;
                var createID;
                $scope.passArea = false;

                //[ZW] TODO: make a util service to handle all helper functions
                var generateRandomCode = function( codeSet, size ){
                    var code = "";
                    for( var i=0; i < size; i++ )
                        code += codeSet.charAt(Math.floor(Math.random() * codeSet.length));
                    return code
                };

                //this is the function to generate auth code.
                $scope.phoneAuthFns = function(){
                    if(!$scope.phoneNum||$scope.phoneNum.length<11) {
                        alert("错误的手机号码格式，正确格式: 12345678901");
                        return;
                    }
                    //random generate number
                    createID = $scope.phoneNum;
                    phoneAuthCode = generateRandomCode("0123456789", 5);

                    //promise call, send out by text message
                    alert( "已发送验证码: " + phoneAuthCode);


                    return  phoneAuthCode;
                };

                //this to control password area
                $scope.showPSArea = function(){
                    if($scope.confirmAuthCode && $scope.confirmAuthCode.length>0 && $scope.confirmAuthCode==phoneAuthCode){
                        $scope.passArea = true;
                        console.log($scope.passArea );
                    }
                };

                $scope.register = function(){
                    var id = createID;
                    var userName = generateRandomCode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",6);
                    var userImage = "";
                    var userInfo = {
                        password : $scope.password,
                        userName : "用户"+userName,
                        id : createID,
                        phoneNum : createID,
                        status : {
                            tutor_active : 0,
                            student_active : 1
                        },
                        userImage : userImage
                    };

                    console.log(userInfo);

                    //make http call , in success, set rootscope and jump
                    var req = {
                        method: 'POST',
                        url: 'http://dreamguideedu.com:9200/dreamguide/accounts/'+id,
                        data:JSON.stringify(userInfo)
                    };

                    $http(req).success(function(data){
                        if(data.created){
                            console.log("go");
                            $rootScope.user = userInfo;
                            $location.path("/");
                        }
                        // $state.go("index");
                    }).error(function(data){
                        alert("用户名或密码不正确！");
                    });
                };
            }
        ]);
});