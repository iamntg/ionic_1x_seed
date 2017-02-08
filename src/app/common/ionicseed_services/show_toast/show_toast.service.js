/**
 * @author NTG
 * created on 24.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.common.ionicseedservice.showtoast')
		.factory('showToast', showToast);


	function showToast($log, $ionicPlatform, $cordovaToast, TlinkConstants) {
        
        $ionicPlatform.ready(function() {
            TlinkConstants.deviceInformation = ionic.Platform.device();
        });
        
		var _showLongBottomToast = function (message) {
			if (Object.keys(TlinkConstants.deviceInformation).length) {
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

	showToast.$inject = ['$log', '$ionicPlatform', '$cordovaToast', 'TlinkConstants'];

})();