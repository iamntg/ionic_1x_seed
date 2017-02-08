/**
 * @author NTG
 * created on 25.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.common.ionicseedservice.pageLoading')
        
    .factory('pageLoading', pageLoading);
    
     function pageLoading($ionicLoading) {
        return {
            show: function(template) {
                $ionicLoading.show({
                    template: "<ion-spinner icon='lines' class='spinner-positive'></ion-spinner>"
                });
            },
            hide: function() {
                $ionicLoading.hide();
            }
        }
    }

	pageLoading.$inject = ['$ionicLoading'];

})();