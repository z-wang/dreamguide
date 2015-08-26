define(['app','jquery'], function(app)
{
    app.controller('One2OneController',
        [
            '$scope', '$http',

            function($scope, $http)
            {
                console.log("one2");
                $scope.filters = {};
                $scope.country = {};
                $scope.image = {
                    defaultImage : 'image/avatar/zz@test.com.png'
                };
                $scope.model = {
                    tutors : []
                };

                $scope.countries = [
                    {name: 'Afghanistan', code: 'AF'},
                    {name: 'Aland Islands', code: 'AX'},
                    {name: 'Albania', code: 'AL'},
                    {name: 'Algeria', code: 'DZ'},
                    {name: 'American Samoa', code: 'AS'},
                    {name: 'Andorra', code: 'AD'},
                    {name: 'Angola', code: 'AO'},
                    {name: 'Anguilla', code: 'AI'},
                    {name: 'Antarctica', code: 'AQ'},
                    {name: 'Antigua and Barbuda', code: 'AG'},
                    {name: 'Argentina', code: 'AR'},
                    {name: 'Armenia', code: 'AM'},
                    {name: 'Aruba', code: 'AW'},
                    {name: 'Australia', code: 'AU'},
                    {name: 'Austria', code: 'AT'},
                    {name: 'Azerbaijan', code: 'AZ'},
                    {name: 'Bahamas', code: 'BS'},
                    {name: 'Bahrain', code: 'BH'},
                    {name: 'Bangladesh', code: 'BD'}
                ];

                $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];
                $scope.availableSchools = [];
                $scope.availableFields = [];

                $(window).scrollTop(0);
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                $(window).unbind("scroll");
                $('.navbar').unbind('mouseenter mouseleave');
                $(".navbar-fixed-top").addClass("top-nav-collapse");


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
                    data.hits.hits.map(function(d){
                        if(d._source.namecn.length>0 && $scope.availableFields.indexOf(d._source.namecn) <0 ){
                            $scope.availableFields.push(d._source.namecn);
                        }
                    });
                }).error(function(data){
                    console.log(data);
                });

                var loadTutors = function(){
                    var req = {
                        method: 'POST',
                        url: 'http://dreamguideedu.com:9200/dreamguide/accounts/_search?q=tutor_active:0',
                        params: {
                            size: 8,
                            from: 0
                        },
                        data: {}
                    };

                    $http(req).success(function(data){
                        console.log(data);
                        $scope.model.tutors= data.hits.hits;
                        $scope.model.tutors.map(function(d){
                            $http.post('/img/downLoad', {
                                name: "1"
                            }).
                                success(function(data, status, headers, config) {
                                    console.log("1");
                                    if(data=="0"){
                                        d.image = $scope.image.defaultImage;
                                    }else{
                                        d.image = 'image/avatar/'+ d._id+'.png';
                                        console.log(d);
                                    }
                                }).
                                error(function(data, status, headers, config) {
                                    console.log(data);
                                });
                            d.name = d._source.userName;
                            d.school = d._source.gradSchool;
                            d.major = d._source.gradMajor;
                            d.country = d._source.studyCountry;
                        });
                        console.log(data);

                    }).error(function(data){

                        console.log(data);
                    });
                };

                loadTutors();

                //$scope.model = {
                //    tutors:[
                //        {image:1, name: '导师1', school: 'NYU', job: 'goldman sachs'},
                //        {image:2, name: '导师2', school: 'UIUC', job:'at school'},
                //        {image:3, name: '导师3', school: 'MIT', job:'Google'},
                //        {image:4, name: '导师4', school: 'NYU', job:'UN'},
                //        {image:5, name: '导师5', school: 'USC', job:'at school'},
                //        {image:1, name: '导师6', school: 'Columbia', job: 'goldman sachs'},
                //        {image:2, name: '导师7', school: 'UIUC', job:'at school'},
                //        {image:3, name: '导师8', school: 'MIT', job:'Google'}
                //    ]
                //};
            }
        ]);
});