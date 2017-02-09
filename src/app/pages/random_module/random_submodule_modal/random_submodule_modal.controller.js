/**
 * @author NTG
 * created on 21.10.2016
 */

(function () {
	'use strict';

	angular.module('NTGIonicSeed.pages.randommodule.random_submodule_modal')
		.controller('randomSubModuleModalController', randomSubModuleModalController);

	/** @ngInject */
	function randomSubModuleModalController($rootScope, $scope, $state, $window, httpService, showToast, NTGIonicSeedConstants, pageLoading, ionicDatePicker, $filter, $ionicScrollDelegate) {

		var _self = this; //_self will the current object of this controller

		$rootScope.stateValue = $state.current.name; // custom header 
		
        _self.closeModal = function() {
            $scope.modal.hide(); 
        };
        
	}

	randomSubModuleModalController.$inject = ['$rootScope', '$scope', '$state', '$window', 'httpService', 'showToast', 'NTGIonicSeedConstants', 'pageLoading', 'ionicDatePicker', '$filter', '$ionicScrollDelegate'];

})();