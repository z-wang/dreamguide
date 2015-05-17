/**
 * Created by zihanwang on 5/16/15.
 */
angular.module('dgApp.controllers', [])
    .controller("loginCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
        console.log($scope);
});