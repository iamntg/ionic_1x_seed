/**
 * @author NTG
 * created on 19.10.2016
 */
(function() {
    'use strict';

    angular.module('NTGIonicSeed.pages', [
            'NTGIonicSeed.pages.login',
            'NTGIonicSeed.pages.home',
            'NTGIonicSeed.pages.randommodule' 
        ])
        .config(routeConfig);

    function routeConfig($urlRouterProvider, $ionicConfigProvider) {
        // check whether the user is logged in, if he logged in then go to home page.
        // otherwise redirect to login screen 
        if (localStorage.getItem('isLoggedIn') && (localStorage.getItem('isLoggedIn') === 'true')) {
            $urlRouterProvider.otherwise('app/home');
        } else {
            $urlRouterProvider.otherwise('login');
        }

        $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.navBar.alignTitle('center');
    }
})();
