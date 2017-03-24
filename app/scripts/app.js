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
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        /*$routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });*/

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('master', {
                abstract: true,
                templateUrl: 'views/t/master.html',
                controller: 'MainCtrl as vm'
            })
            .state('master.home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'HomeCtrl as vm'
            })
            .state('master.about', {
                url: '/',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl as vm'
            })
    });
