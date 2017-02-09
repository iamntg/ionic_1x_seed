/**
 * @author NTG
 * created on 21.10.2016
 */

(function() {
    'use strict';

    angular.module('NTGIonicSeed.pages.randommodule.random_submodule_2')
        .controller('randomSubModule2Controller', randomSubModule2Controller);

    /** @ngInject */
    function randomSubModule2Controller($rootScope, $state, $window, httpService, showToast, NTGIonicSeedConstants, pageLoading, $ionicPopover, $scope, $filter, ionicDatePicker, $ionicPopup, $ionicScrollDelegate, $ionicListDelegate, backButtonNavigation, $timeout, $ionicHistory, $ionicModal) {

        var _self = this; //_self will the current object of this controller
        $rootScope.stateValue = $state.current.name; // custom header 

        backButtonNavigation.goBackToPage($scope, 'app.random_submodule_1', 'app.home');

        // initialize your page
        _self.initialize = function () {
            /*code for initalizing*/
        };

        //Modal popup for add expense
        $ionicModal.fromTemplateUrl('app/pages/random_module/random_submodule_modal/random_submodule_modal.html', {
            scope: $scope,
            animation: 'slide-in-up',
        }).then(function(modal) {
            $scope.modal = modal;
        });


        // cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });


        // modal hide
        $scope.$on('modal.hidden', function(data) {
            console.log('modal.hidden');
        });

        _self.fabButtonClick = function() {
            $scope.modal.show();
        }
    }


    randomSubModule2Controller.$inject = ['$rootScope', '$state', '$window', 'httpService', 'showToast', 'NTGIonicSeedConstants', 'pageLoading', '$ionicPopover', '$scope', '$filter', 'ionicDatePicker', '$ionicPopup', '$ionicScrollDelegate', '$ionicListDelegate', 'backButtonNavigation', '$timeout', '$ionicHistory', '$ionicModal'];

})();