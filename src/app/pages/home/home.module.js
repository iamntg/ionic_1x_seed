/**
 * @author NTG
 * created on 19.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.pages.home', [])
		.config(routeConfig);

	function routeConfig($stateProvider) {
		$stateProvider
			.state('app.home', {
				url: '/home',
				views: {
					'page-load': {
						templateUrl: 'app/pages/home/home.html',
						controller: 'homeController as homeCtrl'
					}
				}
			});
	}

})();