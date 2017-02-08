/**
 * @author NTG
 * created on 8.11.2016
 */

(function (){

    'use strict';
    
    angular.module('NTGIonicSeed.common.directives.limitCharacter')
    
    .directive("limitTo", [function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                var limit = parseInt(attrs.limitTo);
                angular.element(elem).on("keypress", function(e) {
                    if (this.value.length >= limit) e.preventDefault();
                });
            }
        }
    }])
    
})();