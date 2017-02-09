/**
 * @author NTG
 * created on 19.10.2016
 */

(function () {
    'use strict';

    angular.module('NTGIonicSeed.common.constants').value('NTGIonicSeedConstants', {

        errorMessage: {
            noActivationCode: 'Please enter valid activation code',
            activationCodeFailed: 'Invalid activation code',
            loginFailed: 'Login Failed!',
			noUserId: 'Please enter valid username',
			noPassword: 'Please enter valid password',
            noConnection: 'Unable to connect to server! \n Please check your internet connection!',
            offlineMessage: 'Please check your internet connection!',
            responseNull: 'Something went wrong in the Server, \n Please try later!',
			serverDown: 'Please check your internet connection!',
            authenticationFailed: 'Invalid Login Credentials !!'
        },
        successMessage: {
            logoutMessage: 'You are now logged out!'
        },
        isNetworkOn: true,
        deviceInformation: ''
    });

})();