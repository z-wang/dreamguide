define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/partials/index.html',
                dependencies: [
                    'controllers/HomeViewController'
                ]
            },
            //'/about/:person': {
            //    templateUrl: '/views/about.html',
            //    dependencies: [
            //        'controllers/AboutViewController',
            //        'directives/app-color'
            //    ]
            //},
            //'/contact': {
            //    templateUrl: '/views/contact.html',
            //    dependencies: [
            //        'controllers/ContactViewController'
            //    ]
            //},
            '/register': {
                templateUrl: '/partials/register.html',
                dependencies: [
                    'controllers/RegisterController'
                ]
            },
            '/login': {
                templateUrl: '/partials/login.html',
                dependencies: [
                    'controllers/LoginController'
                ]
            },
            '/one2one': {
                templateUrl: '/partials/one2one.html',
                dependencies: [
                    'controllers/One2OneController'
                ]
            }
        }
    };
});