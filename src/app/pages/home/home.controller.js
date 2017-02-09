/**
 * @author NTG
 * created on 19.10.2016
 */

(function () {
    'use strict';

    angular.module('NTGIonicSeed.pages.home')
        .controller('homeController', homeController);

    /** @ngInject */
    function homeController($scope, $rootScope, $state, $window, $timeout, $ionicPlatform, $ionicHistory, httpService, showToast, NTGIonicSeedConstants, pageLoading, $interval, deviceDetails) {

        var _self = this; //_self will the current object of this controller
        $rootScope.stateValue = $state.current.name; // custom design for home screen header bar
        
        // initialize your page
        _self.initialize = function () {
            /*code for initalize*/
        };
        
        
        // this is to override the hardware back button
        var backbutton = 0;
        $ionicPlatform.registerBackButtonAction(function (event) {
            if ($state.current.name == "app.home") {
                if (backbutton == 0) {
                    backbutton++;
                    showToast.showLongBottom(NTGIonicSeedConstants.errorMessage.exitApp);
                    $timeout(function () {
                        backbutton = 0;
                    }, 5000);
                } else {
                    console.log("app exit");
                    window.plugins.appMinimize.minimize();
                }
            } else {
                console.log("done");
                navigator.app.backHistory();
            }
        }, 100);


        // page redirection from home
        _self.nextPage = function () {
            $state.go('app.random_submodule_1');
        };

    }

    homeController.$inject = ['$scope', '$rootScope', '$state', '$window', '$timeout', '$ionicPlatform', '$ionicHistory', 'httpService', 'showToast', 'NTGIonicSeedConstants', 'pageLoading', '$interval', 'deviceDetails'];

})();