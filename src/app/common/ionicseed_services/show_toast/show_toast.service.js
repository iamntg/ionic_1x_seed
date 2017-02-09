/**
 * @author NTG
 * created on 24.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.common.ionicseedservice.showtoast')
		.factory('showToast', showToast);


	function showToast($log, $ionicPlatform, $cordovaToast, NTGIonicSeedConstants) {
        
        $ionicPlatform.ready(function() {
            NTGIonicSeedConstants.deviceInformation = ionic.Platform.device();
        });
        
		var _showLongBottomToast = function (message) {
			if (Object.keys(NTGIonicSeedConstants.deviceInformation).length) {
                $cordovaToast.showLongBottom(message);
            } else {
                $log.log(message);
                alert(message);
            }
		};


		return {
			showLongBottom: _showLongBottomToast
		};

	}

	showToast.$inject = ['$log', '$ionicPlatform', '$cordovaToast', 'NTGIonicSeedConstants'];

})();