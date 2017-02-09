/**
 * @author NTG
 * created on 24.10.2016
 */

(function () {
 	'use strict';

 	angular.module('NTGIonicSeed.common.httpservice')
 	.factory('httpService', httpService);


 	function httpService($rootScope, $http, $log, $state, $window, NTGIonicSeedConfiguration, NTGIonicSeedConstants, showToast, pageLoading, deviceDetails) {

 		var baseUrl = NTGIonicSeedConfiguration.environments[NTGIonicSeedConfiguration.environment].urlBase;
		
 		var showErrorToast = function(message){
 			$log.log(message);
            showToast.showLongBottom(message);
 		};

 		var _httpGet = function (url, cbSuccess, cbError) {

			$http.get(baseUrl+url).then(function getSuccess(succResponse) {
				if(succResponse.status && (succResponse.status === 200)){
					cbSuccess(succResponse.data);
				}
			}, function getError(errResponse) {
				if(errResponse.status == -1 || !errResponse.data){
					showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
				}
				cbError(errResponse);
			});
		};


		var _httpPost = function (url, requestParams, cbSuccess, cbError) {

			// sending device id with each request for security
            requestParams.deviceToken = deviceDetails.getDeviceId();

            if(NTGIonicSeedConstants.isNetworkOn == true){
                $http.post(baseUrl+url, requestParams).then(function getSuccess(succResponse) {
                    if (typeof succResponse !== 'undefined') {
                            var isOk = true;
                            console.log(succResponse);
                            //check response is there
                            if (succResponse === null) {
                                isOk = false;
                            }

                            //check response have Data parameter in it.
                            if (isOk) {
                                if (succResponse.data === null) {
                                    isOk = false;
                                }
                            }

                            /*if data status is success go to callback function else show an error message in parameter Data.Message
                            If somthing wrong happend show another error message*/
                            if (isOk) {
                                console.log(succResponse);
                                if (succResponse.status === 200) {
                                    if(succResponse.data.ErrorCode == 501 || succResponse.data.ErrorCode == 502){
                                        showErrorToast(succResponse.data.Message);
                                        $window.localStorage.clear();
                                        $rootScope.getUserStatusStop();
                                        pageLoading.hide();
                                        $state.go('login');
                                    } else {
                                        cbSuccess(succResponse.data);
                                    }                                    
                                } else  {
                                    pageLoading.hide();
                                    showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
                                } 
                            } else {
                                pageLoading.hide();
                                showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
                            }
                        } else {
                            pageLoading.hide();
                            showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
                        }

                }, function getError(errResponse) {
                    if(errResponse.status == -1 || !errResponse.data){
                        pageLoading.hide();
                        showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
                    }
                    cbError(errResponse);
                });
            } else {
                pageLoading.hide();
                showErrorToast(NTGIonicSeedConstants.errorMessage.noConnection);
            }
		};


		var _httpPut = function (url, requestParams, cbSuccess, cbError) {

			$http.put(baseUrl+url, requestParams).then(function getSuccess(succResponse) {
				if (typeof succResponse !== 'undefined') {
						var isOk = true;

						//check response is there
						if (succResponse === null) {
							isOk = false;
						}

						//check response have Data parameter in it.
						if (isOk) {
							if (succResponse.data === null) {
								isOk = false;
							}
						}

						/*if data status is success go to callback function else show an error message in parameter Data.Message
						If somthing wrong happend show another error message*/
						if (isOk) {
							console.log(succResponse);
							if (succResponse.status === 200) {
								cbSuccess(succResponse.data);
							} else  {
								showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
							} 
						} else {
							showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
						}
					} else {
						showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
					}

			}, function getError(errResponse) {
				if(errResponse.status == -1 || !errResponse.data){
					showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
				}
				cbError(errResponse);
			});
		};


		var _httpDelete = function (url, cbSuccess, cbError) {

			$http.delete(baseUrl+url).then(function getSuccess(succResponse) {
				// cbSuccess(succResponse);

				console.log(succResponse);

				if (typeof succResponse !== 'undefined') {
						var isOk = true;

						//check response is there
						if (succResponse === null) {
							isOk = false;
						}

						/*if data status is success go to callback function else show an error message in parameter Data.Message
						If somthing wrong happend show another error message*/
						if (isOk) {
							console.log(succResponse);
							if (succResponse.status === 200) {
								cbSuccess(succResponse.data);
							} else  {
								showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
							} 
						} else {
							showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
						}
					} else {
						showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
					}

			}, function getError(errResponse) {
				console.log(errResponse);
				if(errResponse.status === -1 || !errResponse.data){
					showErrorToast(NTGIonicSeedConstants.errorMessage.serverDown);
				}
				cbError(errResponse);
			});
		};


		return {
			httpGet: _httpGet,
			httpPost: _httpPost,
			httpDelete: _httpDelete,
			httpPut: _httpPut
		};

 	}
	
	httpService.$inject = ['$rootScope', '$http', '$log', '$state', '$window', 'NTGIonicSeedConfiguration', 'NTGIonicSeedConstants', 'showToast', 'pageLoading', 'deviceDetails'];

 })();