/**
 * @author NTG
 * created on 24.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.common.ionicseedservice.devicedetails')
		.factory('deviceDetails', deviceDetails);


	function deviceDetails($log, $ionicPlatform, $cordovaDevice, $cordovaAppVersion, NTGIonicSeedConstants, $window) {

        $ionicPlatform.ready(function() {
            NTGIonicSeedConstants.deviceInformation = ionic.Platform.device();
        });
        
		var _getDeviceId = function () {
			var uuid = "";
			if (Object.keys(NTGIonicSeedConstants.deviceInformation).length) {
                uuid = $cordovaDevice.getUUID();
                $window.localStorage['deviceId'] = uuid;
            } else if($window.localStorage['deviceId'] && $window.localStorage['deviceId'] != "") {
            	uuid = $window.localStorage['deviceId'];
            } else {
            	uuid = "web-serve";
            }
            return uuid;
		};

		var _getAppVersion = function () {
			var appversion = "";
			if($window.localStorage['appVersion'] && $window.localStorage['appVersion'] != "") {
            	appversion = $window.localStorage['appVersion'];
            } else {
            	appversion = "w0.0";
            }
            return appversion;
		};


		return {
			getDeviceId: _getDeviceId,
			getAppVersion: _getAppVersion
		};

	}

	deviceDetails.$inject = ['$log', '$ionicPlatform', '$cordovaDevice', '$cordovaAppVersion', 'NTGIonicSeedConstants', '$window'];

})();