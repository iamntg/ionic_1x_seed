/**
 * @author NTG
 * created on 19.10.2016
 */

(function() {
    'use strict';

    angular.module('NTGIonicSeed.pages.login')
        .controller('loginController', loginController);

    /** @ngInject */
    function loginController($state, $window, $timeout, $ionicPlatform, $ionicLoading, httpService, showToast, NTGIonicSeedConstants, pageLoading) {

        var _self = this; //_self will the current object of this controller


        // user auth object
        _self.auth = {
            "userName": "",
            "password": "",
            "deviceId": ""
        };

        
        //check whether the user is logged in, if he logged in then go to home page.
        if ($window.localStorage['isLoggedIn'] && ($window.localStorage['isLoggedIn'] === 'true')) {
            $state.go("app.home");
        }
        
        
        // this is to override the hardware back button
        var backbutton = 0;
        $ionicPlatform.registerBackButtonAction(function (event) {
            if ($state.current.name == "login") {
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
        

        // user login
        _self.login = function(auth) {
            if (_self.auth.userName == "" || _self.auth.userName == undefined) {
                showToast.showLongBottom(NTGIonicSeedConstants.errorMessage.noUserId);
            } else if (_self.auth.password == "" || _self.auth.password == undefined) {
                showToast.showLongBottom(NTGIonicSeedConstants.errorMessage.noPassword);
            } else {
                //show page loading screen
                pageLoading.show();
                
                /*Send you login credentials via service and on the callback write your logic*/

                //set the local storage flag true to persist login
                $window.localStorage['isLoggedIn'] = true;

                //redirect to the page after login
                $state.go("app.home");

                //hide the page loading screen
                pageLoading.hide();
            }
        };

    }

    loginController.$inject = ['$state', '$window', '$timeout', '$ionicPlatform', '$ionicLoading', 'httpService', 'showToast', 'NTGIonicSeedConstants', 'pageLoading'];

})();
