(function () {

    'use strict';

    angular.module('myDirectives', [])
        .directive('validation', function () {

            return {
                restrict: 'E',
                templateUrl: '/sections/validation.html',
            };
        });
})();