/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'angular-route',
    'route-style',
    //'ui-router',
    'ui-select',
    'angular-sanitize',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {
    //'use strict';

    return angular.module('app', [
        'ui.select',
        'ngSanitize',
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute',
        'routeStyles'
        //'ui.router'
    ]);
});
