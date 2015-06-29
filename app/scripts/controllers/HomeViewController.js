define(['app', 'jquery','highmaps',
    'custom-world',
    'custom-data'], function(app)
{
	app.controller('HomeViewController',
    [
        '$scope',

        function($scope)
        {
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

            var data = [
                {
                    code: 'CA',
                    name: 'Canada',
                    value : 109
                },
                {
                    code: 'CN',
                    name : 'China',
                    value : 95
                },
                {
                    code: 'NZ',
                    name: 'New Zealand',
                    value: 44
                },
                {
                    code: 'ES',
                    name: 'Spain',
                    value: 21
                },
                {
                    code: 'SE',
                    name: 'Sweden',
                    value: 11
                },
                {
                    code: 'UK',
                    name: 'United Kingdom',
                    value : 192
                },
                {
                    code: 'US',
                    name: 'United States',
                    value: '234'
                }
            ];
            console.log(123);
            // Initiate the chart
            $('#map1').highcharts('Map', {
                chart : {
                    borderWidth : 0,
                    height: 350

                },

                colors: ['rgba(192,192,192,0.05)', 'rgba(192,192,192,0.2)', 'rgba(192,192,192,0.4)',
                    'rgba(192,192,192,0.5)', 'rgba(192,192,192,0.6)', 'rgba(192,192,192,0.8)', 'rgba(192,192,192,1)'],

                title : {
                    text : '海外顾问分布',
                    margin: 1
                },

                mapNavigation: {
                    enabled: false
                },

                legend: {
                    title: {
                        text: '人数',
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
                        to: 20
                    }, {
                        from: 20,
                        to: 50
                    }, {
                        from: 50,
                        to: 100
                    }, {
                        from: 100
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
        }
    ]);
});