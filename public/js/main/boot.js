/**
 * Created by zihanwang on 5/17/15.
 */
var myapp = angular.module('dgApp', ["dgApp.controllers", "ui.router"]);

myapp.config(function($stateProvider, $urlRouterProvider){
    // For any unmatched url, send to /index
    $urlRouterProvider.otherwise("/index");

    $stateProvider
        .state('index', {
            url:"/index",
            templateUrl: "partial/index.html",
            controller:"indexCtrl"
//                    template: '<div ui-view></div>',
//                    data: {
//                        css: 'styles/custom-state1-override.css'
//                    }
        })

        .state('login',{
            url:"/login",
            templateUrl: "partial/login.html",
            controller: "loginCtrl"
        })

        .state('route1', {
            url: "/route1",
            templateUrl: "route1.html"
        })
        .state('route1.list', {
            url: "/list",
            templateUrl: "route1.list.html",
            controller: function($scope){
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })

        .state('route2', {
            url: "/route2",
            templateUrl: "route2.html"
        })
        .state('route2.list', {
            url: "/list",
            templateUrl: "route2.list.html",
            controller: function($scope){
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        })
});

myapp.controller("indexCtrl", function($scope) {
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    $('.navbar').hover(function(){
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    },function(){
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    });
    $('.people-overlay').hover(
        function(){
            $(this).find('.people-inner').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.people-inner').slideUp(250); //.fadeOut(205)
        }
    );

    console.log("!!");
    Highcharts.data({
        googleSpreadsheetKey: '0AoIaUO7wH1HwdFJHaFI4eUJDYlVna3k5TlpuXzZubHc',
        // custom handler when the spreadsheet is parsed
        parsed: function (columns) {

            // Read the columns into the data array
            var data = [];
            $.each(columns[0], function (i, code) {
                data.push({
                    code: code.toUpperCase(),
                    value: parseFloat(columns[2][i]),
                    name: columns[1][i]
                });
            });
            // Initiate the chart
            $('#map1').highcharts('Map', {
                chart : {
                    borderWidth : 1
                },

                colors: ['rgba(192,192,192,0.05)', 'rgba(192,192,192,0.2)', 'rgba(192,192,192,0.4)',
                    'rgba(192,192,192,0.5)', 'rgba(192,192,192,0.6)', 'rgba(192,192,192,0.8)', 'rgba(192,192,192,1)'],

                title : {
                    text : '海外顾问分布'
                },

                mapNavigation: {
                    enabled: true
                },

                legend: {
                    title: {
                        text: 'km²',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    },
                    align: 'left',
                    verticalAlign: 'bottom',
                    floating: true,
                    layout: 'vertical',
                    valueDecimals: 0,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
                    symbolRadius: 0,
                    symbolHeight: 14
                },

                colorAxis: {
                    dataClasses: [{
                        to: 5
                    }, {
                        from: 5,
                        to: 10
                    }, {
                        from: 10,
                        to: 25
                    }, {
                        from: 25,
                        to: 50
                    }, {
                        from: 50,
                        to: 100
                    }, {
                        from: 100,
                        to: 200
                    }, {
                        from: 200
                    }]
                },
                credits: {
                    enabled: false
                },
                series : [{
                    data : data,
                    mapData: Highcharts.maps['custom/world'],
                    joinBy: ['iso-a2', 'code'],
                    animation: true,
                    name: '导师人数',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    tooltip: {
                        valueSuffix: '人'
                    }
                }]
            });
        },
        error: function () {
            console.log("error");
            $('#container').html('<div class="loading">' +
            '<i class="icon-frown icon-large"></i> ' +
            'Error loading data from Google Spreadsheets' +
            '</div>');
        }
    });
});