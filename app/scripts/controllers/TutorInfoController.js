define([
    'app'
], function(app)
{
    app.controller('TutorInfoController',
        ['$scope','$location', function($scope, $location) {
            $(window).scrollTop(0);
            $(window).unbind("scroll");
            $('.navbar').unbind('mouseenter mouseleave');
            $(".navbar-fixed-top").addClass("top-nav-collapse");

            $('#contactus').click(function(){
                $('html,body').animate({
                        scrollTop: $("#content-footer").offset().top},
                    'slow');
            });

            $scope.toRegister = function(){
                $(window).scrollTop(0);
                $location.path("/register");
            };

        }])
});




