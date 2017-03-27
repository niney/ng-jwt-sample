(function() {
    'use strict';

    angular
        .module('jwtNgApp')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$state'];

    function LoginService ($state) {
        var service = {
            open: open
        };

        var modalInstance = null;
        var resetModal = function () {
            modalInstance = null;
        };

        return service;

        function open () {
            alert('로그인 필요!!');
            $state.go('master.home');
        }
    }
})();
