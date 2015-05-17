/**
 * Created by zihanwang on 5/16/15.
 */
angular.module('uiRouterSample.contacts.service', [])
    .controller("loginCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
        console.log($scope);
});