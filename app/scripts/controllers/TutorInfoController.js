define([
    'app'
], function(app)
{
    app.controller('TutorInfoController',
        ['$scope','$location', function($scope, $location) {
            $(window).scroll(function() {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });

            $('.navbar').hover(function(){
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            },function(){
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            });

            $('.people-overlay').hover(
                function(){
                    $(this).find('.people-inner').slideDown(250); //.fadeIn(250)
                },
                function(){
                    $(this).find('.people-inner').slideUp(250); //.fadeOut(205)
                }
            );

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




