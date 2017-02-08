/**
 * @author NTG
 * created on 19.10.2016
 */

(function () {
    'use strict';

    angular.module('NTGIonicSeed.common.constants').value('TlinkConstants', {

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
            authenticationFailed: 'Invalid Login Credentials !!',
            emptyTextMessage: 'Please enter your message !',
            sendMessageFailed: 'Send message failed, Please Try Again !!',
            exitApp: 'Press again to exit',
            userSelectListEmpty: 'No more users to select!',
            messageReceiverListEmpty: 'Please specify at least one recipient!',
            messageTextEmpty: 'Your message is empty!',
            activityListNoDataError: 'Please select an user/weekend date to get activity',
            addActivityValidationError: 'Please fill all mandatory fields',
            activityDeleteMessage: 'Activity has not been deleted',
            activitySaveMessage: 'Activity has not been saved successfully',
            noActivityMessage: 'No activity to save. Please add activity first',
            activityTotalFactorDay: 'Total Factor for a day should not be greater than 1',
            activityTotalFactorWeek: 'Total Factor for a week should not be greater than 5',
            expenseListNoDataError: 'Please select an user/expense status/weekend date to get expense',
            addExpenseValidationError: 'Please fill all mandatory fields',
            expenseDeleteMessage: 'Expense has not been deleted',
            expenseSaveMessage: 'Expense has not been saved successfully',
            noExpenseMessage: 'No expense to save. Please add expense first',
            noPrivilege: 'No privilege to view',
            expensePaidMessage: 'Select a valid date to continue',
            statusSelectListEmpty: 'No more status to select!',
            dateValidationError: 'Start date should not be greater than end date'
        },
        successMessage: {
            activitySaveMessage: 'Activity has been saved successfully',
            activityAddMessage: 'Activity has been added successfully',
            activityUpdateMessage: 'Activity has been updated successfully',
            activityDeleteMessage: 'Activity has been deleted successfully',
            sendMessageSuccess: 'Message send successfully !',
            expenseSaveMessage: 'Expense has been saved successfully',
            expenseAddMessage: 'Expense has been added successfully',
            expenseUpdateMessage: 'Expense has been updated successfully',
            expenseDeleteMessage: 'Expense has been deleted successfully',
            crownestSaveMessage: 'Crownest has been saved successfully',
            crownestAddMessage: 'Task has been added successfully',
            crownestUpdateMessage: 'Crownest has been updated successfully',
            crownestDeleteMessage: 'Crownest has been deleted successfully',
            logoutMessage: 'You are now logged out!'
        },
        isNetworkOn: true,
        deviceInformation: ''
    });

})();