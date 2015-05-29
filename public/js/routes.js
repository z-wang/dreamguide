/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: 'partials/index.html',
            controller: 'indexCtrl'
        });

        $routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl'
        });

        $routeProvider.when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutCtrl'
        });

        $routeProvider.when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'registerCtrl'
        });

        $routeProvider.when('/one2one', {
            templateUrl: 'partials/one2one.html',
            controller: 'one2oneCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/index'
        });
    }]);
});
