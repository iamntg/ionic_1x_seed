/**
 * @author NTG
 * created on 19.10.2016
 */

(function() {
    'use strict';

    angular.module('NTGIonicSeed.common.sidemenu')
        .controller('sideMenuController', sideMenuController);

    /** @ngInject */
    function sideMenuController($scope, $window, $state, NTGIonicSeedConstants, showToast, deviceDetails, httpService, $ionicPopup) {

        var _self = this; //_self will the current object of this controller   
        _self.appVersion = deviceDetails.getAppVersion(); // app version


        // side menu items
        _self.sideMenu = [{
            "ItemId": 1,
            "ItemName": "Home",
            "State": "app.home",
            "Icon": "ion-home",
            "Code": "home"
        }, {
            "ItemId": 2,
            "ItemName": "Random Module",
            "State": "app.random_submodule_1",
            "Icon": "ion-pizza",
            "Code": "random"
        }, {
            "ItemId": 3,
            "ItemName": "Some Other Module",
            "State": "app.random_submodule_2",
            "Icon": "ion-coffee",
            "Code": "random"
        }, {
            "ItemId": 4,
            "ItemName": "Logout",
            "State": "login",
            "Icon": "ion-log-out",
            "Code": "logout"
        }];


        _self.userDetails = {
            "Name": "Nitheesh T Ganesh",
            "UserName": "iamntg",
            "Phone": "+91 77364 26577",
            "DptTitle": "Fullstack Developer"
        };


        // logout
        _self.logoutAfterConfirm = function() {
            $ionicPopup.show({
                title: 'Confirm Logout',
                template: 'Are you sure you want to logout?',
                scope: $scope,
                buttons: [{
                    text: '<b>Yes</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        return logout();
                    }
                }, {
                    text: 'No',
                    onTap: function(e) {
                        console.log('logout');
                        return true;
                    }
                }]
            });
        };


        var logout = function() {
            /*Write your logic for logout, notify server that user is logged out*/

            //clear localstorage, for security purposes
            $window.localStorage.clear();

            //show toast for logout message
            showToast.showLongBottom(NTGIonicSeedConstants.successMessage.logoutMessage);

            //redirect to specified pages
            $state.go("login");
        }


        // redirect to screens from sidemenu
        _self.goToState = function(menu) {
            $scope.closeDrawer();
            if (menu.Code === 'logout') {
                _self.logoutAfterConfirm();
            } else {
                $state.go(menu.State);
            }
        };

    }

    sideMenuController.$inject = ['$scope', '$window', '$state', 'NTGIonicSeedConstants', 'showToast', 'deviceDetails', 'httpService', '$ionicPopup'];

})();
