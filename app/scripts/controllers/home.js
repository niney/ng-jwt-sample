'use strict';

/**
 * @ngdoc function
 * @name jwtNgApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the jwtNgApp
 */
angular.module('jwtNgApp')
    .controller('HomeCtrl', function ($rootScope, $state, Auth, Principal) {
        var vm = this;
        vm.isAuthenticated = Principal.isAuthenticated;
        vm.login = login;
        vm.logout = logout;

        function login () {

            Auth.login({
                username: vm.username,
                password: vm.password,
                rememberMe: vm.rememberMe
            }).then(function (user) {
                vm.authenticationError = false;

                $rootScope.$broadcast('authenticationSuccess');

                // previousState was set in the authExpiredInterceptor before being redirected to login modal.
                // since login is successful, go to stored previousState and clear previousState
                // if (Auth.getPreviousState()) {
                //     var previousState = Auth.getPreviousState();
                //     Auth.resetPreviousState();
                //     $state.go(previousState.name, previousState.params);
                // }
            }).catch(function () {
                vm.authenticationError = true;
            });
        }

        function logout() {
            Auth.logout();
        }
    });
