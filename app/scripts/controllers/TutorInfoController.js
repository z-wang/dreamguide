define([
    'app'
], function(app)
{
    app.controller('TutorInfoController',
        ['$scope','$location', function($scope, $location) {
            $('.navbar').hover(function(){
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            },function(){
                //$(".navbar-fixed-top").removeClass("top-nav-collapse");
            });
            $(window).scroll(function() {
                console.log($(".navbar"));

                if ($(".navbar").offset().top > 50) {
                    console.log($(".navbar").offset().top);
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });

            $scope.toRegister = function(){
                $(window).scrollTop(0);
                $location.path("/register");
            };

        }])
});




