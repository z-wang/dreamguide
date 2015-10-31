/**
 * Created by zihanwang on 10/31/15.
 */
/**
 * Created by zihanwang on 10/25/15.
 */
define(['app'], function(app)
{
    app.factory("emailService",
        ["$http","$q", "$log",
            function($http, $q, $log){
                var path = '/util/sendEmail';
                return {
                    sendEmailTo : function(to, content){
                        $http.post(path, {
                            to:to,
                            content: content
                        }).
                            success(function(data, status, headers, config) {
                                console.log(data);
                            }).
                            error(function(data, status, headers, config) {
                                console.log(data);
                            });
                    }
                }
            }]);
});