/**
 * Created by zihanwang on 5/26/15.
 */
define([
    'require',
    'angular',
    '../../../test/angularjs-requirejs-2/js/app',
    'routes'
], function (require, ng) {
   // 'use strict';
    console.log("new boot");
    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});