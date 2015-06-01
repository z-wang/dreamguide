/**
 * Created by zihanwang on 5/22/15.
 */
define([
    './module',
    'jquery'
], function (controllers) {
    controllers.controller('one2oneCtrl', ['$scope', function ($scope, $http) {
        console.log("one2");
        $scope.filters = {};
        $scope.country = {};

        $scope.countries = [
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Aland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'Andorra', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'}
        ];

        $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];
        $scope.availableSchools = ['Columbia University', 'Cornell University', 'UIUC', '其他'];
        $scope.availableFields = ['Electrical Engineering', 'Computer Science', 'Computer Engineering'];

        $(window).scrollTop(0);
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        $(window).unbind("scroll");
        $('.navbar').unbind('mouseenter mouseleave');
        $(".navbar-fixed-top").addClass("top-nav-collapse");

    }]);
});
