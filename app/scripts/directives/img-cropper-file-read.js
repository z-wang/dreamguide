define(['app'], function(app)
{
    app.directive('imgCropperFileread',
        ['$timeout', function($timeout)
            {
                return {
                    scope: {
                        image: "="
                    },
                    link: function (scope, element, attributes) {
                        element.bind("change", function (changeEvent) {
                            var reader = new FileReader();
                            reader.onload = function (loadEvent) {
                                $timeout(function () {
                                    scope.image = loadEvent.target.result;
                                },0);
                            };
                            reader.readAsDataURL(changeEvent.target.files[0]);
                        });
                    }
                }
            }
        ])
});