/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    base_url: '.',
    paths: {
        'angular' : '../../node_modules/angular/angular.min',
        'angular-route' : '../../node_modules/angular-route/angular-route.min',
        'ui-router' : '../../node_modules/angular-ui-router/release/angular-ui-router.min',
        'angular-sanitize' : '../../node_modules/angular-sanitize/angular-sanitize.min',
        'domReady': '../lib/domReady',
        'route-style' : '../lib/route-style/route-style',
        'jquery': '../../node_modules/jquery/dist/jquery.min',
        'map' : '../lib/highmaps/map',
        'highmaps': '../lib/highmaps/highmaps',
        'highcharts': '../../node_modules/highcharts/scripts/highcharts',
        'highcharts-more': '../../node_modules/highcharts/scripts/highcharts-more',
        'ui-select':'../lib/angular-ui/select.min',
        'exporting': '../lib/highmaps/exporting',
        'custom-data' : '../lib/map/custom-data',
        'custom-world' : '../lib/map/custom-world'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-sanitize' : {
            deps: ['angular']
        },
        //'ui-router' : {
        //    deps: ['angular']
        //},
        'route-style' : {
            deps: ['angular']
        },
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

    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
