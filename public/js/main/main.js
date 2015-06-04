/**
 * Created by zihanwang on 5/26/15.
 */
require.config({
    paths : {
        'angular' : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.3/angular.min',
            //'../../node_modules/angular/angular.min',
        //'angular-ui-router' : '../../node_modules/angular-ui-router/release/angular-ui-router.min',
        'angular-route' : '../../../node_modules/angular-route/angular-route',
        //'angular-resource' : '../../node_modules/angular-resource/angular-resource',
        'jquery' : '../../../node_modules/jquery/dist/jquery.min.js',
        'bootstrap' : '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
        //'highmaps' : '//code.highcharts.com/maps/highmaps',
        //'map-data' : '//code.highcharts.com/maps/modules/data',
        //'map-world' : '//code.highcharts.com/mapdata/custom/world'
    },
    shim : {
        'angular' : {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route' :{
            deps: ['angular']
        },
        //'angular-resource' :{
        //    deps: ['angular']
        //},
        //'highmaps' : {
        //    deps: ['jquery']
        //},
    },
    deps:[
        './newBoot'
    ]

});

//<script src="../node_modules/angular/angular.min.js"></script>
//<script src="../node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>
//<script src="../node_modules/jquery/dist/jquery.min.js"></script>
//<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

//<script src="js/main/boot.js"></script>
//<script src="js/controller/about.js"></script>
//<script src="js/controller/register.js"></script>
//<script src="js/controller/login.js"></script>
//<script src="js/controller/one2one.js"></script>

//<script src="http://code.highcharts.com/maps/highmaps.js"></script>
//<script src="http://code.highcharts.com/maps/modules/data.js"></script>
//<script src="http://code.highcharts.com/mapdata/custom/world.js"></script>
//
//require([
//        'angular',
//        './app'
//    ], function(angular) {
//       // console.log(app);
//
//        //var $html = angular.element(document.getElementsByTagName('html')[0]);
//        //angular.element().ready(function() {
//            // bootstrap the app manually
//            angular.bootstrap(document, ['myapp']);
//        //});
//
//    }
//);