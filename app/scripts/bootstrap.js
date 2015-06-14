require.config({
    baseUrl: '/scripts',
    paths: {
		'angular': '/bower_components/angular/angular.min',
		'angular-route': '/bower_components/angular-route/angular-route.min',
        'angular-sanitize' : '../lib/angular/angular-sanitize.min',
        'bootstrap': '../lib/bootstrap/js/bootstrap.min',
		'jquery': '/bower_components/jquery/dist/jquery.min',
        //'route-style' : '../lib/route-style/route-style',
        'highmaps': '../lib/highmaps/highmaps',
        'highcharts': '../lib/highcharts/highcharts',
        'ui-select':'../lib/angular-ui/select.min',
        //'exporting': '../lib/highmaps/exporting',
        'custom-data' : '../lib/map/custom-data',
        'custom-world' : '../lib/map/custom-world'
    },
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrap']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		},
        'angular-sanitize' : {
            deps: ['angular']
        },
        //'route-style' : {
        //    deps: ['angular']
        //},
        'ui-select':
            ['angular'],
        'highcharts':{
            deps: ['jquery']
        },
        'highmaps':{
            deps: ['jquery']
        },
        'custom-data':{
            deps: ['highmaps']
        },
        'custom-world':{
            deps: ['highmaps']
        }
	}
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);