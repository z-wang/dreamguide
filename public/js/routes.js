/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    //'use strict';
    //return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    //
    //    $urlRouterProvider
    //        .otherwise("/index");
    //
    //    $stateProvider.state('index',{
    //        url: '/index',
    //        templateUrl: 'partials/index.html',
    //        controller:'indexCtrl'
    //    })
    //    .state('login',{
    //        url: '/login',
    //        templateUrl: 'partials/login.html',
    //        controller: 'MyCtrl2'
    //    })
    //    .state('view2',{
    //        url: '/view2',
    //        templateUrl: 'partials/partial2.html',
    //        controller: 'MyCtrl2'
    //    });
    //}]);
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
            controller: 'one2oneCtrl',
            css: 'lib/angular-ui/select.css'
        });

        $routeProvider.otherwise({
            redirectTo: '/index'
        });
    }]);
});
