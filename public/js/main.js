/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    base_url: '.',
    paths: {
        //'angular': '../lib/angular/angular',
        'angular' : '../../node_modules/angular/angular.min',
        'angular-route' : '../../node_modules/angular-route/angular-route.min',
        //'angular-route': '../lib/angular-route/angular-route',
        'domReady': '../lib/domReady',
        'jquery': '../../node_modules/jquery/dist/jquery.min',

        'map' : '../../node_modules/highcharts/scripts/map',
        'highmaps': '//code.highcharts.com/maps/highmaps',

        'highcharts': '../../node_modules/highcharts/scripts/highcharts',
            //'//code.highcharts.com/highcharts.src',

        'map-data' : '//code.highcharts.com/maps/modules/data',
        'map-world' : '../lib/map/data-world'
            //'//code.highcharts.com/mapdata/custom/world'
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
            deps: ['jquery','map']
        },
        'map-data':{
            deps: ['highcharts', 'highmaps']
        },
        'map-world':{
            deps: ['highcharts', 'highmaps']
        }

    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
