define(['app'], function(app)
{
    app.controller('QuestionUtilController',
        [ '$scope', 'emailService', 'searchService', function($scope, emailService, searchSearch)
            {
                $scope.page =
                {
                    heading: 'About Us'
                };

                //$(window).scrollTop(0);
                //$('html, body').animate({ scrollTop: 0 }, 'slow');
                //$(window).unbind("scroll");
                //$('.navbar').unbind('mouseenter mouseleave');
                //$(".navbar-fixed-top").addClass("top-nav-collapse");
                $('body').css('background', '#D8D8D8');
                $('.navbar').hide();
                $('#content-footer').hide();

                $scope.question={
                    contact : ""
                };

                $scope.submitQuestion = function() {
                    var current = new Date();
                    $scope.question.id = $scope.question.contact+ "_" + current.getTime();
                    console.log($scope.question);
                    var school = $scope.question.school||"未知";
                    var material = $scope.question.content || "未知";
                    var sendContent = "提问者微信: " + $scope.question.contact + "\n" +
                        "提问明确指向学校: " + school + "\n" +
                        "提问内容: " + material + "\n";
                    searchSearch.indexRecord('util','questions', $scope.question.id, $scope.question);
                    emailService.sendEmailTo("timlovescoding@gmail.com", sendContent);
                    emailService.sendEmailTo('meng.zhang@diycac.org', sendContent);
                };
            }
        ]);
});
