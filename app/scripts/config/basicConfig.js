'use strict';

angular.module('config', [])
    .constant('basicConfig', (function () {
        var baseURL = 'http://localhost:8080/api/';

        return {
            'baseURL': baseURL,
            'authenticateURL': baseURL + 'authenticate',
            'accountURL': baseURL + 'account',
            'sampleURL': baseURL + 'sample',
            'adminSampleURL': baseURL + 'adminSample'
        };
    }()));