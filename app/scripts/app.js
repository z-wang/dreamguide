define(['routes','services/dependencyResolverFor', 'ui-select', 'angular-sanitize', 'ng-flow'], function(config, dependencyResolverFor)
{
    var app = angular.module('app', ['ngRoute', 'ui.select', 'ngSanitize', 'flow']);

    app.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
        {
	        app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        app.factory    = $provide.factory;
	        app.service    = $provide.service;

            $locationProvider.html5Mode(true);

            if(config.routes !== undefined)
            {
                angular.forEach(config.routes, function(route, path)
                {
                    console.log(path,route.templateUrl,dependencyResolverFor(route.dependencies));
                    $routeProvider.when(path, {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
                });
            }

            if(config.defaultRoutePaths !== undefined)
            {
                console.log(config.defaultRoutePaths);
                $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
            }
        }
    ]);

   return app;
});