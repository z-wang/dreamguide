define(['app'], function(app)
{
    app.controller('QuestionUtilController',
        [ '$scope', 'emailService', 'searchService','$location', function($scope, emailService, searchSearch, $location)
            {
                $scope.page =
                {
                    heading: 'About Us'
                };

                $('body').css('background', '#D8D8D8');
                $('.navbar').hide();
                $('#content-footer').hide();

                $scope.question={
                    contact : "",
                    content : ""
                };

                $scope.submitQuestion = function() {
                    if($scope.question.contact === "" || $scope.question.content === "")
                        return;

                    var current = new Date();
                    $scope.question.askedDate = current;
                    $scope.question.hasAnswered = 0;
                    $scope.question.id = $scope.question.contact+ "_" + current.getTime();
                    console.log($scope.question);
                    var school = $scope.question.school||"未知";
                    var material = $scope.question.content || "未知";
                    var sendContent = "提问者微信: " + $scope.question.contact + "\n" +
                        "提问明确指向学校: " + school + "\n" +
                        "提问内容: " + material + "\n";

                    searchSearch.indexRecord('util','questions', $scope.question.id, $scope.question);
                    emailService.sendEmailTo("timlovescoding@gmail.com", sendContent);
                    emailService.sendEmailTo('57945468@qq.com', sendContent);
                    emailService.sendEmailTo('meng.zhang@diycac.org', sendContent);
                    $location.path("/util/thankyou");
                };
            }
        ]);
});
