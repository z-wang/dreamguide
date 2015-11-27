/**
 * Created by zihanwang on 6/24/15.
 */
define(['app'], function(app)
{
    app.controller('StudentRegController',
        [
            '$scope', '$rootScope', '$http', '$location', 'searchService',

            function($scope, $rootScope, $http, $location, searchService)
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
                    } else{
                        alert("请输入正确的验证码");
                    }
                };

                $scope.register = function(){
                    var id = createID;
                    var userName = generateRandomCode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",6);
                    var userImage = "";
                    var userInfo = {
                        passWord : md5($scope.password),
                        userName : "DG用户"+userName,
                        id : createID,
                        cellphone : createID,
                        tutor_active : -1,
                        student_active : 1,
                        self_apply: 1,
                        registerAs: "Student",
                        createdTime : new Date(),
                        userImage : userImage
                    };

                    console.log(userInfo);

                    searchService.indexRecord('users', 'accounts', id, userInfo, function(data){
                        if(data.created){
                            console.log("go");
                            alert("注册成功!");
                            $rootScope.user = userInfo;
                            $location.path("/");
                        }
                        // $state.go("index");
                    })

                };
            }
        ]);
});