/**
 * @author NTG
 * created on 19.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.common.parent')
		.controller('parentController', parentController);

	
	function parentController($scope, $window, $interval, httpService, NTGIonicSeedConstants, $rootScope, deviceDetails, $ionicPlatform) {
		
        var _self = this; //_self will the current object of this controller
          
        _self.appVersion = deviceDetails.getAppVersion(); 
        

	}

	parentController.$inject = ['$scope', '$window', '$interval', 'httpService', 'NTGIonicSeedConstants', '$rootScope', 'deviceDetails', '$ionicPlatform'];

})();