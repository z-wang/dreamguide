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
                    console.log(data);
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
                    console.log(data);
                    data.hits.hits.map(function(d){
                        if(d._source.namecn.length>0 && $scope.availableFields.indexOf(d._source.namecn) <0 ){
                            $scope.availableFields.push(d._source.namecn);
                        }
                    });
                }).error(function(data){
                    console.log(data);
                });
                //$http({
                //    method: 'POST',
                //    url: clientOpts.host + searchOpts.index + '/_search',
                //    params: {
                //        size: searchOpts.size,
                //        from: searchOpts.from
                //    },
                //    data: searchOpts.body.toJSON()
                //})




                $scope.model = {
                    tutors:[
                        {image:1, name: '导师1', school: 'NYU', job: 'goldman sachs'},
                        {image:2, name: '导师2', school: 'UIUC', job:'at school'},
                        {image:3, name: '导师3', school: 'MIT', job:'Google'},
                        {image:4, name: '导师4', school: 'NYU', job:'UN'},
                        {image:5, name: '导师5', school: 'USC', job:'at school'},
                        {image:1, name: '导师6', school: 'Columbia', job: 'goldman sachs'},
                        {image:2, name: '导师7', school: 'UIUC', job:'at school'},
                        {image:3, name: '导师8', school: 'MIT', job:'Google'},
                        {image:4, name: '导师9', school: 'NYU', job:'UN'},
                        {image:5, name: '导师10', school: 'USC', job:'at school'}
                    ]
                };
            }
        ]);
});