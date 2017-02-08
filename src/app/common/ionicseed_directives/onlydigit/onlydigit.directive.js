/**
 * @author NTG
 * created on 24.10.2016
 */

(function (){

    'use strict';
    
    angular.module('NTGIonicSeed.common.directives.onlydigit')
    
    .directive('onlyDigit', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attr, ctrl) {
                function inputValue(val) {
                    if (val) {
                        var digits = val.replace(/[^0-9]/g, '');
                        if (digits !== val) {
                            ctrl.$setViewValue(digits);
                            ctrl.$render();
                        }
                        return parseInt(digits,10);
                    }
                    return undefined;
                }            
                ctrl.$parsers.push(inputValue);
            }
        };
    })
    
})();