/**
 * Created by dreamguide on 11/10/15.
 */
define(['app'], function(app)
{
    app.controller('ViewTutorProfileController',
        [
            '$scope', '$rootScope', '$http', '$location', 'searchService', '$routeParams', 'encodeService',
            function($scope, $rootScope, $http, $location, searchService, $routeParams, encodeService)
            {
                $(window).scrollTop(0);
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

                var tutorId = encodeService.simpleDecode($routeParams.tutor);

                //var tutorId = $rootScope.selectedTutor._id;
                var getTutorCallBack = function(data) {
                    //console.log(data);
                    //console.log(tutorId);
                    $scope.thisTutor = data._source;
                    $scope.thisTutor.image = 'image/avatar/'+ tutorId+'.png';
                };

                $scope.image = {
                    defaultImage : 'image/avatar/zz@test.com.png'
                };

                $scope.rating = {
                    total : 5,
                    current : 4,
                    isReadOnly : true
                };

                $scope.changeStar = function(){
                    console.log($scope.rating);
                };

                searchService.getByIdCallBack('users','accounts', tutorId, getTutorCallBack);
                //console.log($rootScope);
            }
        ])
});