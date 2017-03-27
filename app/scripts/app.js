'use strict';

/**
 * @ngdoc overview
 * @name jwtNgApp
 * @description
 * # jwtNgApp
 *
 * Main module of the application.
 */
angular
    .module('jwtNgApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ngCacheBuster',
        'ngStorage',
        'config',
        'pascalprecht.translate',
        'tmh.dynamicLocale'
    ])
    .run(function (stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    })
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('master', {
                abstract: true,
                templateUrl: 'views/t/master.html',
                controller: 'MainCtrl as vm',
                resolve: {
                    authorize: ['Auth',
                        function (Auth) {
                            return Auth.authorize();
                        }
                    ],
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('common');
                        return $translate.refresh();
                    }]
                },
                data: {
                    authorities: [],
                    pageTitle: 'global.title'
                }
            })
            .state('master.home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'HomeCtrl as vm'
            })
            .state('master.about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl as vm',
                data: {
                    authorities: ['ROLE_USER']
                }
            })
            .state('master.admin', {
                url: '/admin',
                templateUrl: 'views/admin.html',
                data: {
                    authorities: ['ROLE_ADMIN']
                }
            })
            .state('accessdenied', {
                url: '/accessdenied',
                parent: 'master',
                templateUrl: 'views/accessdenied.html'
            })
        ;
    });
