'use strict';

/**
 * @ngdoc function
 * @name jwtNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jwtNgApp
 */
angular.module('jwtNgApp')
    .controller('AboutCtrl', function ($http, basicConfig) {

        var vm = this;
        vm.sample = { title: "권한없음" };
        vm.adminSample = { title: "권한없음"};

        $http.get(basicConfig.sampleURL).success(function (d) {
            vm.sample = d;
        });

        $http.get(basicConfig.adminSampleURL).success(function (d) {
            vm.adminSample = d;
        });
    });
