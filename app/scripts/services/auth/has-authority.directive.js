(function() {
    'use strict';

    angular
        .module('jwtNgApp')
        .directive('hasAuthority', hasAuthority);

    hasAuthority.$inject = ['Principal'];

    function hasAuthority(Principal) {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attrs) {
            var authority = attrs.hasAuthority.replace(/\s+/g, '');

            var setVisible = function () {
                    element.removeClass('hide');
                },
                setHidden = function () {
                    element.addClass('hide');
                },
                defineVisibility = function (reset) {

                    if (reset) {
                        setVisible();
                    }

                    Principal.hasAuthority(authority)
                        .then(function (result) {
                            if (result) {
                                setVisible();
                            } else {
                                setHidden();
                            }
                        });
                };

            if (authority.length > 0) {
                defineVisibility(true);

                scope.$watch(function() {
                    return Principal.isAuthenticated();
                }, function() {
                    defineVisibility(true);
                });
            }
        }
    }
})();
