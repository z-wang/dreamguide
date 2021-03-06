require.config({
    baseUrl: '/scripts',
    paths: {
        'angular': '../lib/angular/angular.min',
        'angular-route': '/bower_components/angular-route/angular-route.min',
        'angular-sanitize' : '../lib/angular/angular-sanitize.min',
        'bootstrapjs': '../lib/bootstrap/js/bootstrap.min',
        'jquery': '/bower_components/jquery/dist/jquery.min',
        'ui-bootstrap':'../lib/angular-ui/ui-bootstrap-tpls.min',
        "chart" : "../lib/charts/Chart.min",
        "angular-chart" : "../lib/charts/angular-chart.min",
        //'domReady' : "../lib/domReady",
        //'angularAMD': '../lib/angularAMD/angularAMD.min',
        //'ngload' : '../lib/angularAMD/ngload.min',
        // 'svgjs': '../lib/image/svg.min',
        //'md5js':'../lib/md5/md5',
        //'angular-bootstrap-file' : '../lib/angular/angular-bootstrap-file',
        //'ng-flow': '../lib/angular/ng-flow',
        //'route-style' : '../lib/route-style/route-style',
        'highmaps': '../lib/highmaps/highmaps',
        'highcharts': '../lib/highcharts/highcharts',
        'ui-select':'../lib/angular-ui/select.min',
        //'exporting': '../lib/highmaps/exporting',
        'custom-data' : '../lib/map/custom-data',
        'custom-world' : '../lib/map/custom-world',
        'ng-table':'../lib/ng-table/ng-table.min'
    },
    shim: {
        'app': {
            deps: ['jquery']
        },
        'jquery':{
            exports: 'jquery'
        },
        'angular':{
            dep: ['jquery'],
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'bootstrapjs': {
            deps: ['jquery']
        },
        'angular-sanitize' : {
            deps: ['angular']
        },
        'ui-bootstrap' :{
            deps: ['angular']
        },
        'ng-table': {
            deps: ['angular', 'jquery']
        },
        //'Chart':{
        //    deps : ['jquery']
        //},
        "angular-chart":   {
            deps : ['angular', 'chart']
        },
        //'angular-bootstrap-file':{
        //    deps: ['angular']
        //},
        //'ng-flow':{
        //    deps: ['angular']
        //},
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


//require(['domReady'], function (domReady) {
//    domReady(function () {
require
(
    [
        'jquery', 'app', 'angular','angular-route', 'bootstrapjs', 'ng-table', 'ui-bootstrap', "chart", "angular-chart"
    ],
    function()
    {
        angular.bootstrap(document, ['app']);
    }
);
//    });
//});

