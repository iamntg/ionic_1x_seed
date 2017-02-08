/**
 * @author NTG
 * created on 21.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.pages.randommodule.random_submodule_1', [])
		.config(routeConfig);

	function routeConfig($stateProvider) {
		$stateProvider
			.state('app.random_submodule_1', {
				url: '/random_submodule_1',
				views: {
					'page-load': {
						templateUrl: 'app/pages/random_module/random_submodule_1/random_submodule_1.html',
						controller: 'randomSubModule1Controller as randomSubModule1Ctrl'
					}
				}
			});
	}

})();