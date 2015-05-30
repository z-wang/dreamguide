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
        'domReady': '../lib/domReady',
        'jquery': '../../node_modules/jquery/dist/jquery.min',
        'map' : '../lib/highmaps/map',
        'highmaps': '../lib/highmaps/highmaps',
        'highcharts': '../../node_modules/highcharts/scripts/highcharts',
        'highcharts-more': '../../node_modules/highcharts/scripts/highcharts-more',
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
