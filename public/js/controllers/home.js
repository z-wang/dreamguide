/**
 * Created by zihanwang on 5/27/15.
 */
define([
    './module',
    'jquery',
    'map',
    //'highcharts',
    'highmaps',
    'map-world',
    'map-data'
], function (controllers) {
    //'use strict';
    controllers.controller('indexCtrl', [function ($scope) {
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

    $('#contactus').click(function(){
        $('html,body').animate({
                scrollTop: $("#content-footer").offset().top},
            'slow');
    });

    //$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function (data) {
    //    // Add lower case codes to the data set for inclusion in the tooltip.pointFormat
    //    $.each(data, function () {
    //        this.flag = this.code.replace('UK', 'GB').toLowerCase();
    //    });
    //
    //    // Initiate the chart
    //    $('#map1').highcharts('Map', {
    //        title: {
    //            text: '海外顾问分布'
    //        },
    //        legend: {
    //            title: {
    //                text: '顾问分布指数',
    //                style: {
    //                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
    //                }
    //            }
    //        },
    //
    //        credits: {
    //            enabled: false
    //        },
    //        mapNavigation: {
    //            enabled: true,
    //            buttonOptions: {
    //                verticalAlign: 'bottom'
    //            }
    //        },
    //
    //        tooltip: {
    //            backgroundColor: 'none',
    //            borderWidth: 0,
    //            shadow: false,
    //            useHTML: true,
    //            padding: 0,
    //            pointFormat: '<span class="f32"><span class="flag {point.flag}"></span></span>'
    //            + ' {point.name}: <b>{point.value}</b>/km²',
    //            positioner: function () {
    //                return { x: 0, y: 250 };
    //            }
    //        },
    //
    //        colorAxis: {
    //            min: 1,
    //            max: 1000,
    //            type: 'logarithmic'
    //        },
    //
    //        series : [{
    //            data : data,
    //            mapData: Highcharts.maps['map-world'],
    //            joinBy: ['iso-a2', 'code'],
    //            name: 'Population density',
    //            states: {
    //                hover: {
    //                    color: '#BADA55'
    //                }
    //            }
    //        }]
    //    });
    //});








    //// Closes the Responsive Menu on Menu Item Click
    //$('.navbar-collapse ul li a').click(function() {
    //    $('.navbar-toggle:visible').click();
    //});

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

    }]);
});