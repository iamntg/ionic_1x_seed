/**
 * @author NTG
 * created on 19.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.common.sidemenu', [])
		.config(routeConfig);


	function routeConfig($stateProvider) {
		
		$stateProvider
			.state('app', {
				url: '/app',
				abstract: true,
				templateUrl: 'app/common/sidemenu/sidemenu.html',
				controller: 'sideMenuController as sideMenuCtrl'
			});
	}

})();