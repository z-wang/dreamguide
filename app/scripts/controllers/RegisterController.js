/**
 * Created by zihanwang on 6/14/15.
 */
define([
    'app'
], function(app)
{
    app.controller('RegisterController',
        ['$scope','$location','$http', function($scope, $location,$http) {
                console.log('register');
                $(window).scrollTop(0);
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

            console.log($scope);

            $scope.toRegister = function(){
                $(window).scrollTop(0);
                $location.path("/register");
            };

            //console.log(fileReader);

            //$scope.getFile = function () {
            //    $scope.progress = 0;
            //    fileReader.readAsDataUrl($scope.file, $scope)
            //        .then(function(result) {
            //            $scope.imageSrc = result;
            //            console.log(result);
            //            console.log($scope.file);
            //            $http.post('/img/upLoad', {
            //                msg: result,
            //                name: '1333324'
            //            }).
            //                success(function(data, status, headers, config) {
            //                    console.log(data);
            //                    // this callback will be called asynchronously
            //                    // when the response is available
            //                }).
            //                error(function(data, status, headers, config) {
            //                    // called asynchronously if an error occurs
            //                    // or server returns response with an error status.
            //                });
            //        });
            //};

            //$scope.$on("fileProgress", function(e, progress) {
            //    $scope.progress = progress.loaded / progress.total;
            //});

            //$scope.doUpload = function() {
            //
            //    console.log('title', $scope.title);
            //    console.log('uploadFile', $scope.uploadFile);
            //    $scope.progress = 0;
            //    fileReader.readAsDataUrl($scope.uploadFile, $scope)
            //        .then(function(result) {
            //            $scope.imageSrc = result;
            //            console.log(result);
            //        });
            //    alert('Do upload. See console for data');
            //};

            $scope.submitApply = function(){
                $location.path("/thankyou");
            };


            $scope.cropper = {};
            $scope.cropper.sourceImage = null;
            $scope.cropper.croppedImage = null;

            //function dataURItoBlob(dataURI) {
            //    // convert base64/URLEncoded data component to raw binary data held in a string
            //    var byteString;
            //    if (dataURI.split(',')[0].indexOf('base64') >= 0)
            //        byteString = atob(dataURI.split(',')[1]);
            //    else
            //        byteString = unescape(dataURI.split(',')[1]);
            //
            //    // separate out the mime component
            //    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            //
            //    // write the bytes of the string to a typed array
            //    var ia = new Uint8Array(byteString.length);
            //    for (var i = 0; i < byteString.length; i++) {
            //        ia[i] = byteString.charCodeAt(i);
            //    }
            //
            //    return new Blob([ia], {type:mimeString});
            //}

            $scope.upload = function(){
                var result = $scope.cropper.croppedImage;
                $http.post('/img/upLoad', {
                    msg: result,
                    name: '1.png'
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

            }]);
});