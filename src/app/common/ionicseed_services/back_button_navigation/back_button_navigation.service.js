/**
 * @author NTG
 * created on 25.10.2016
 */

(function() {
    'use strict';

    angular.module('NTGIonicSeed.common.ionicseedservice.backButtonNavigation')

    .factory('backButtonNavigation', backButtonNavigation);

    function backButtonNavigation($state, $ionicPlatform, $ionicHistory, $rootScope) {
        return {
            goBackToPage: function(scope, currentState, nextState) {
                /*Overriding ths Hardware back button, which is navigating user to particular page when back button pressed*/
                scope.deviceBackButton = function() {
                    $ionicPlatform.registerBackButtonAction(function(event) {
                        if ($state.current.name == currentState) {
                            $state.go(nextState);
                        } else {
                            navigator.app.backHistory();
                        }
                    }, 100);
                }

                /*Overriding ths Application back button, which is navigating user to particular page when back button pressed*/
                $rootScope.$ionicGoBack = function() {
                    if ($state.current.name == currentState) {
                        $state.go(nextState);
                    } else {
                        $ionicHistory.goBack();
                    }
                };

                scope.$on('$ionicView.beforeEnter', function() {
                    var stateChangeListener = scope.$on('$stateChangeSuccess', function(data) {
                        scope.deviceBackButton();
                        stateChangeListener();
                    });
                });
            }
        }
    }

    backButtonNavigation.$inject = ['$state', '$ionicPlatform', '$ionicHistory', '$rootScope'];

})();
