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

            $scope.tutor={
                gradSchool : "University of Southampton",
                gradMajor : "戏剧舞台美术设计"
            };
            $scope.toRegister = function(){
                $(window).scrollTop(0);
                $location.path("/register");
            };

            $scope.availableSchools = [];
            $scope.availableFields = [];

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
                console.log($scope.tutor);
                if(!$scope.cropper.croppedImage){
                    alert("请上传头像图片");
                    return;
                }

                var temp = $scope.tutor.passWord;
                console.log(temp);
                $scope.tutor.keep = temp;
                $scope.tutor.passWord = md5(temp);
                //var temp = $scope.tutor.password;
                //console.log(temp);
                //$scope.tutor.passWord = md5(temp);
                $scope.tutor.status = {
                    tutor_active:0,
                    student_active:1
                };

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
                }).error(function(data){
                    console.log(data);
                });

                $scope.uploadImage($scope.tutor.email);
                var message = "新加入用户ID为 "+$scope.tutor.email + ", 请及时核实。";
                //sendEmail('meng.zhang@diycac.org', message);

                sendEmail('timwang2k8@gmail.com', message);

                $location.path("/thankyou");
            };

            $scope.reset = function(){
                //console.log($scope.tutor);
                $scope.tutor = {};
            };

            var sendEmail = function(to, content){
                $http.post('/util/sendEmail', {
                    to:to,
                    content: content
                }).
                    success(function(data, status, headers, config) {
                        console.log(data);
                    }).
                    error(function(data, status, headers, config) {
                        console.log(data);
                    });
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