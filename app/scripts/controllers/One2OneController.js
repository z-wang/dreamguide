define(['app','jquery'], function(app)
{
    app.controller('One2OneController',
        [
            '$scope',
            '$http',
            '$modal',
            '$log',
            '$routeParams',
            'searchService',
            '$rootScope',
            '$location',
            'encodeService',
            'constantService',

            function($scope, $http, $modal, $log, $routeParams, searchService, $rootScope,
                     $location, encodeService, constantService)
            {
                $scope.filters = {};
                $scope.country = {};
                $scope.availableSchools = [];
                $scope.availableFields = [];
                $scope.constants = {};
                $scope.constants.countries = constantService.countries;
                $scope.image = {
                    defaultImage : 'image/avatar/zz@test.com.png'
                };
                $scope.model = {
                    tutors : []
                };

                //this is a cache of $scope.model.tutors
                var tutors = [];

                $(window).scrollTop(0);
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

                $scope.viewby = 10;
                $scope.totalItems = $scope.model.tutors.length;
                $scope.currentPage = 1;
                $scope.itemsPerPage = $scope.viewby;
                $scope.maxSize = 5; //Number of pager buttons to show

                //$scope.setPage = function (pageNo) {
                //    $scope.currentPage = pageNo;
                //};
                $scope.setItemsPerPage = function(num) {
                    $scope.itemsPerPage = num;
                    $scope.currentPage = 1; //reset to first page
                    $scope.model.currentTutors = $scope.model.tutors.slice(0, num);
                    $scope.totalItems = $scope.model.tutors.length;
                };
                $scope.pageChanged = function() {
                    if($scope.model.tutors.length > 0)
                    $scope.model.currentTutors = $scope.model.tutors.slice((($scope.currentPage-1)*$scope.itemsPerPage), (($scope.currentPage)*$scope.itemsPerPage));
                    console.log('Page changed to: ' + $scope.currentPage);
                };

                $scope.updatePageFilter= function(key){
                    if(key === "country") {
                        //update schools/tutors, first take school/field filters into consideration
                        //clear filters.fields and filters.school
                        $scope.filters.field = undefined;
                        $scope.filters.school = undefined;
                        $scope.availableSchools = [];
                        searchService.makeQueryCallBack('dreamguide','schools', '{size:2000,from:0}',processSchoolCallBack);
                        //searchService.makeQueryCallBack('users','accounts', searchService.tutorFilterQuery('profileStatus','Active', 1000),processTutorCallBack);
                        $scope.model.tutors = [];
                        tutors.map(function(data){
                            if(data._source.gradCountry == $scope.filters.country) {
                                $scope.model.tutors.push(data);
                            }
                        });
                        mapTutorData($scope.model.tutors);
                        $scope.setItemsPerPage(10);
                    } else if (key === "major") {
                        $scope.model.tutors = [];
                        tutors.map(function(data){
                            if(data._source.gradMajor == $scope.filters.field) {
                                if($scope.filters.country) {
                                    if ($scope.filters.country == data._source.gradCountry) {
                                        if($scope.filters.school) {
                                            if($scope.filters.school == data._source.gradSchool) {
                                                $scope.model.tutors.push(data);
                                            }
                                        } else {
                                            $scope.model.tutors.push(data);
                                        }
                                    }
                                } else {
                                    if($scope.filters.school) {
                                        if($scope.filters.school == data._source.gradSchool) {
                                            $scope.model.tutors.push(data);
                                        }
                                    } else {
                                        $scope.model.tutors.push(data);
                                    }
                                }
                            }
                        });
                        mapTutorData($scope.model.tutors);
                        $scope.setItemsPerPage(10);
                    } else if (key === "school") {
                        $scope.model.tutors = [];
                        tutors.map(function(data){
                            if(data._source.gradSchool == $scope.filters.school) {
                                if($scope.filters.country) {
                                    if ($scope.filters.country == data._source.gradCountry) {
                                        if($scope.filters.field) {
                                            if($scope.filters.field == data._source.gradMajor) {
                                                $scope.model.tutors.push(data);
                                            }
                                        } else {
                                            $scope.model.tutors.push(data);
                                        }
                                    }
                                } else {
                                    if($scope.filters.field) {
                                        if($scope.filters.field == data._source.gradMajor) {
                                            $scope.model.tutors.push(data);
                                        }
                                    } else {
                                        $scope.model.tutors.push(data);
                                    }
                                }
                            }
                        });
                        mapTutorData($scope.model.tutors);
                        $scope.setItemsPerPage(10);
                    }
                };

                //$scope.dates = {
                //    years : [2015,2016],
                //    months : [1,2,3,4,5,6,7,8,9,10,11,12],
                //    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                //    times: ["07:00-07:30","07:30-08:00","08:00-08:30","08:30-09:00","09:00-09:30","09:30-10:00","10:00-10:30",
                //        "10:30-11:00", "19:30-20:00","20:00-20:30", "20:30-21:00", "21:00-21:30","21:30-22:00","22:00-22:30",
                //        "22:30-23:00", "23:00-23:30"]
                //};

                $scope.appointment = {
                    time_slot1 : {},
                    time_slot2 : {},
                    time_slot3 : {}
                };

                var mapTutorData = function(tutorArray) {
                    tutorArray.map(function(d){
                        $http.post('/img/downLoad', {
                            name: d._id
                        }).
                            success(function(data, status, headers, config) {
                                if(data=="1"){
                                    d.image = 'image/avatar/'+ d._id+'.png';
                                }else{
                                    d.image = $scope.image.defaultImage;
                                }
                            }).
                            error(function(data, status, headers, config) {
                                d.image = $scope.image.defaultImage;
                            });
                        d.name = d._source.userName;
                        d.school = d._source.gradSchool;
                        d.major = d._source.gradMajor;
                        d.degree = d._source.gradDegree;
                        d.country = d._source.studyCountry;
                    });
                };

                var processTutorCallBack = function(data){
                    $scope.model.tutors= data.hits.hits;
                    tutors = angular.copy($scope.model.tutors);
                    //for(var i = 0;i<$scope.model.tutors.length;i++){
                    //    if($scope.model.tutors[i]._source.realName===undefined||
                    //        ($scope.model.tutors[i]._source.profileStatus && $scope.model.tutors[i]._source.profileStatus === "Inactive" )
                    //    ){
                    //        $scope.model.tutors.splice(i, 1);
                    //        i--;
                    //    }
                    //}
                    mapTutorData($scope.model.tutors);

                    $scope.model.currentTutors = $scope.model.tutors.slice(0,10);
                    $scope.totalItems = $scope.model.tutors.length;
                };

                var processSchoolCallBack = function(data){
                    data.hits.hits.map(function(d){
                        if(d._source.nameen!=undefined && d._source.nameen.length>0 && $scope.availableSchools.indexOf(d._source.nameen) <0 ){
                            if($scope.filters.country) {
                                if($scope.filters.country == d._source.country) {
                                    $scope.availableSchools.push(d._source.nameen);
                                }
                            } else {
                                    $scope.availableSchools.push(d._source.nameen);
                                }
                        }
                    });
                };

                var processMajorCallBack = function(data){
                    data.hits.hits.map(function(d){
                        if(d._source.nameen!=undefined && d._source.nameen.length>0 && $scope.availableFields.indexOf(d._source.nameen) <0 ){
                            $scope.availableFields.push(d._source.nameen);
                        }
                    });
                };

                searchService.makeQueryCallBack('dreamguide','schools', '{size:2000,from:0}',processSchoolCallBack);
                searchService.makeQueryCallBack('dreamguide','specialtys', '{size:2000,from:0}',processMajorCallBack);
                searchService.makeQueryCallBack('users','accounts', searchService.tutorFilterQuery('profileStatus','Active', 1000),processTutorCallBack);

                $scope.countryFiltering = function( country ){
                    var query = searchService.tutorFilterQuery('gradCountry',country,1000);
                    searchService.makeQueryCallBack('users','accounts', query,processTutorCallBack);
                };


                $scope.getFilterResults = function( key, value ){
                    //FixME(ZW): in the future support not only grad school and undergrad school but phd ...
                    switch (key) {
                        case "country":
                            key = "gradCountry";
                            break;
                        case "major":
                            key = "gradMajor";
                            if(value === '') {
                                value = $scope.filters.field;
                            }
                            break;
                        case "school":
                            key = "gradSchool";
                            if(value === '') {
                                value = $scope.filters.school;
                            }
                            break;
                    }

                    var query = searchService.tutorFilterQuery( key,value,1000);
                    if(value === 'All'){
                        query = searchService.tutorFilterQuery('profileStatus','Active', 1000);
                    }
                    searchService.makeQueryCallBack('users','accounts', query,processTutorCallBack);
                };

                $scope.items = ['item1', 'item2', 'item3'];

                $scope.openInfoPage = function(index) {
                    index = ($scope.currentPage-1)*$scope.itemsPerPage + index;
                    var tutor = $scope.model.tutors[index];
                    $rootScope.selectedTutor = tutor;
                    var idEncoding = encodeService.simpleEncode(tutor._id);
                    $location.path("/tutor_profile/"+idEncoding);
                };

                $scope.openModal = function (index, size) {
                    index = ($scope.currentPage-1)*$scope.itemsPerPage + index;
                    //console.log(index, $scope.model.tutors[index]);
                    //size = 'lg', 'sm' or blank
                    var modalInstance = $modal.open({
                        animation: true,
                        templateUrl: 'myModalContent.html',
                        controller: 'One2OneModalController',
                        size: size,
                        resolve: {
                            items: function () {
                                return $scope.items;
                            },
                            tutor: function(){
                                return $scope.model.tutors[index]
                            }
                        }
                    });

                    modalInstance.result.then(function (selectedItem) {
                        $scope.selected = selectedItem;
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };

                //if($routeParams.major && $routeParams.major!=undefined && $routeParams.major.toLowerCase()=="mis"){
                //    $scope.loadTutors("MIS");
                //}else {
                //    $scope.loadTutors();
                //}
            }
        ]);

    app.controller('One2OneModalController',[
        '$scope', '$modalInstance', 'items', 'tutor', '$http','$rootScope','$location',
        function($scope,$modalInstance, items, tutor, $http, $rootScope, $location){
            $scope.items = items;
            $scope.selected = {
                item: $scope.items[0],
                tutor: tutor
            };

            $scope.dates = {
                years : [2015,2016],
                months : [1,2,3,4,5,6,7,8,9,10,11,12],
                days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                times: ["07:00-07:30","07:30-08:00","08:00-08:30","08:30-09:00","09:00-09:30","09:30-10:00","10:00-10:30",
                    "10:30-11:00", "19:30-20:00","20:00-20:30", "20:30-21:00", "21:00-21:30","21:30-22:00","22:00-22:30",
                    "22:30-23:00", "23:00-23:30"]
            };

            $scope.appointment = {
                tutor: tutor,
                time_slot1 : {},
                time_slot2 : {},
                time_slot3 : {},
                account : "",
                name : "",
                password: ""
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

            $scope.ok = function () {
                console.log($scope.appointment);
                if($scope.appointment.account == ""||$scope.appointment.name == ""){
                    alert("请输入电话号码和名字");
                    return;
                }
                if($scope.appointment.password == ""){
                    alert("请输入密码");
                    return;
                }
                //if(Object.keys($scope.appointment.time_slot1).length<4)
                //{
                //    alert("请至少完整输入第一个预约日期及时间。");
                //    return;
                //}

                var message = "确认预约" + tutor.name +"吗? ";
                if (confirm(message)) {
                    //var time1 = $scope.appointment.time_slot1.year+" "+$scope.appointment.time_slot1.month+" "+$scope.appointment.time_slot1.day+" "
                    //        + $scope.appointment.time_slot1.time;

                    $scope.register($scope.appointment.name, $scope.appointment.account, $scope.appointment.password);

                    var message2 = "新加入用户电话为 "+$scope.appointment.account+" 用户昵称: "+$scope.appointment.name+", 预约导师为: "+
                        $scope.appointment.tutor._id + " 导师名字："+ $scope.appointment.tutor.name+ ", 请及时核实。";

                    sendEmail('meng.zhang@diycac.org', message2);
                    sendEmail('timwang2k8@gmail.com', message2);
                    alert("预约信息已发送，请等候导师联系你并确认预约时间! 谢谢!");
                }

                $modalInstance.close($scope.selected.item);
            };

            $scope.register = function(name, phone, password){
                var id = phone;
                var userName = name;
                var userImage = "";
                var userInfo = {
                    passWord : md5(password),
                    userName : userName,
                    id : id,
                    phoneNum : id,
                    status : {
                        tutor_active : -1,
                        student_active : 1
                    },
                    createdTime : new Date(),
                    userImage : userImage
                };

                //console.log(userInfo);

                //make http call , in success, set rootscope and jump
                var req = {
                    method: 'POST',
                    url: 'http://dreamguideedu.com:9200/dreamguide/accounts/'+id,
                    data:JSON.stringify(userInfo)
                };

                $http(req).success(function(data){
                    if(data.created){
                        //alert("注册成功!");
                        $rootScope.user = userInfo;
                        $location.path("/");
                    }
                    // $state.go("index");
                }).error(function(data){
                    alert("注册失败，电话号码已存在，请联系客服");
                });
            };

            $scope.makeAppointment = function(index){
                var tutor = $scope.model.tutors[index];
                var message = "确认预约" + tutor.name +"吗? 预约费用为60人民币/小时.";
                if (confirm(message)) {
                    alert("预约成功!");
                }
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }
    ]);
});