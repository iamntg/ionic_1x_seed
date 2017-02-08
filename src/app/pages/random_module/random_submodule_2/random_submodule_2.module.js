/**
 * @author NTG
 * created on 21.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.pages.randommodule.random_submodule_2', [])
		.config(routeConfig);

	function routeConfig($stateProvider) {
		$stateProvider
			.state('app.random_submodule_2', {
				url: '/random_submodule_2',
				views: {
					'page-load': {
						templateUrl: 'app/pages/random_module/random_submodule_2/random_submodule_2.html',
						controller: 'randomSubModule2Controller as randomSubModule2Ctrl'
					}
				}
			});
	}

})();