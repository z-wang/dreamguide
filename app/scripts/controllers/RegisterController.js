/**
 * Created by zihanwang on 6/14/15.
 */
define([
    'app'
], function(app)
{
    app.controller('RegisterController',
        ['$scope','$location','fileReader','$http', function($scope, $location,fileReader,$http) {
                console.log('register');
                $(window).scrollTop(0);
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

            console.log($scope);
                //console.log($flow);

            $scope.toRegister = function(){
                $(window).scrollTop(0);
                $location.path("/register");
            };

            console.log(fileReader);
            $scope.getFile = function () {
                $scope.progress = 0;
                fileReader.readAsDataUrl($scope.file, $scope)
                    .then(function(result) {
                        $scope.imageSrc = result;
                        console.log(result);
                        console.log($scope.file);
                        $http.post()
                    });
            };

            $scope.$on("fileProgress", function(e, progress) {
                $scope.progress = progress.loaded / progress.total;
            });

            $scope.doUpload = function() {

                console.log('title', $scope.title);
                console.log('uploadFile', $scope.uploadFile);
                alert('Do upload. See console for data');
            }

            }]);
});