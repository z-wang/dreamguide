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
                        $http.post('/img/upLoad', {
                            msg: result,
                            name: '1333324'
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
                    });
            };

            $scope.$on("fileProgress", function(e, progress) {
                $scope.progress = progress.loaded / progress.total;
            });

            $scope.doUpload = function() {

                console.log('title', $scope.title);
                console.log('uploadFile', $scope.uploadFile);
                $scope.progress = 0;
                fileReader.readAsDataUrl($scope.uploadFile, $scope)
                    .then(function(result) {
                        $scope.imageSrc = result;
                        console.log(result);
                    });
                alert('Do upload. See console for data');
            };

            $scope.submitApply = function(){
                $location.path("/thankyou");
            };


            $scope.cropper = {};
            $scope.cropper.sourceImage = null;
            $scope.cropper.croppedImage   = null;

            //var draw = SVG('drawing');
            //console.log(draw);
            //var image = draw.image('../image/logo.png',200, 100);
            //console.log(image);

            }]);
});