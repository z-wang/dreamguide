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
            '/tutor_profile/:tutor': {
                templateUrl: '/partials/profiles/tutor_info.html',
                dependencies: [
                    'controllers/profiles/ViewTutorProfileController',
                    'services/searchService',
                    'services/encodeService'
                ]
            },
            //'/contact': {
            //    templateUrl: '/views/contact.html',
            //    dependencies: [
            //        'controllers/ContactViewController'
            //    ]
            //},
            '/register_info':{
                templateUrl: '/partials/tutor_info.html',
                dependencies: [
                    'controllers/TutorInfoController'
                ]
            },
            '/register': {
                templateUrl: '/partials/register.html',
                dependencies: [
                    'controllers/RegisterController',
                    'directives/image-cropper',
                    'directives/img-cropper-file-read',
                    'services/emailService',
                    'services/searchService'
                    //'../lib/angular/angular-bootstrap-file'
                ]
            },
            '/thankyou':{
                templateUrl: '/partials/thankyou.html',
                dependencies: [
                    'controllers/ThankYouController'
                ]
            },
            '/profile':{
                templateUrl: '/partials/profile.html',
                dependencies: [
                    'controllers/ProfileController'
                ]
            },
            '/student': {
                templateUrl: '/partials/student_register.html',
                dependencies: [
                    'controllers/StudentRegController',
                    'services/searchService'
                ]
            },
            '/login': {
                templateUrl: '/partials/login.html',
                dependencies: [
                    'controllers/LoginController',
                    'services/searchService'
                ]
            },
            '/one2one': {
                templateUrl: '/partials/one2one.html',
                dependencies: [
                    'controllers/One2OneController',
                    'services/searchService',
                    'services/encodeService'
                ]
            },
            '/util/question': {
                templateUrl: '/partials/util/question.html',
                dependencies: [
                    'controllers/util/QuestionUtilController',
                    'services/emailService',
                    'services/searchService'
                ]
            },
            '/util/thankyou': {
                templateUrl: '/partials/util/thankyou.html',
                dependencies: [
                    'controllers/util/QuestionUtilController',
                    'services/emailService',
                    'services/searchService'
                ]
            },
            '/admin/edit': {
                templateUrl: '/partials/admin/edit.html',
                dependencies: [
                    'controllers/admin/AdminEditController',
                    'directives/image-cropper',
                    'directives/img-cropper-file-read',
                    'services/searchService'
                ]
            }
            //,
            //'/admin/edit/temp/updater': {
            //    templateUrl: '/partials/admin/updater.html',
            //    dependencies: [
            //        'controllers/admin/AdminUpdaterController'
            //    ]
            //}
        }
    };
});