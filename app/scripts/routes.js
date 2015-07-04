define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/partials/index.html',
                dependencies: [
                    'controllers/HomeViewController',
                    'directives/login-toggle'
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
            '/register_info':{
                templateUrl: '/partials/tutor_info.html',
                dependencies: [
                    'controllers/RegisterController'
                ]
            },
            '/register': {
                templateUrl: '/partials/register.html',
                dependencies: [
                    'controllers/RegisterController'
                ]
            },
            '/student': {
                templateUrl: '/partials/student_register.html',
                dependencies: [
                    'controllers/StudentRegController'
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