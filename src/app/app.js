/**
 * @author NTG
 * created on 19.10.2016
 */

'use strict';

angular.module('NTGIonicSeed', [
	'ionic',
    'ionic.contrib.drawer',
	'ion-floating-menu',
	'ionic-datepicker',
    'ui.rCalendar',
    'ngCordova',

    'NTGIonicSeed.template',
	'NTGIonicSeed.common',
	'NTGIonicSeed.pages'
])

.run(function ($ionicPlatform, $rootScope, NTGIonicSeedConstants, showToast, $window, $cordovaAppVersion) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(false);

		}
        // ionic.Platform.fullScreen();
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
           //  StatusBar.hide();
		}

		NTGIonicSeedConstants.deviceInformation = ionic.Platform.device();
		$cordovaAppVersion.getVersionNumber().then(function(version) {
            $window.localStorage['appVersion'] = version;
        });
        
        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
            var onlineState = networkState;
            NTGIonicSeedConstants.isNetworkOn = true;
        })

        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
            var offlineState = networkState;
            NTGIonicSeedConstants.isNetworkOn = false;
            showToast.showLongBottom(NTGIonicSeedConstants.errorMessage.offlineMessage);
        })
	});
});