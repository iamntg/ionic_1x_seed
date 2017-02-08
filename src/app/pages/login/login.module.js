/**
 * @author NTG
 * created on 19.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.pages.login', [])
		.config(routeConfig);

	
	function routeConfig($stateProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'app/pages/login/login.html',
				controller: 'loginController as loginCtrl',
			});
	}

})();