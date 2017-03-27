(function() {
    'use strict';

    angular
        .module('jwtNgApp')
        .factory('Account', Account);

    Account.$inject = ['$resource', 'basicConfig'];

    function Account ($resource, basicConfig) {
        var service = $resource(basicConfig.accountURL, {}, {
            'get': { method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });

        return service;
    }
})();
