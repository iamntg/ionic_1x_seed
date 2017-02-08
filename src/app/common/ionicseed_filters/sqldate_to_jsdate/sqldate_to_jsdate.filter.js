/**
 * @author NTG
 * created on 25.10.2016
 */

(function (){

    'use strict';
    
    angular.module('NTGIonicSeed.common.filters.sqldate_to_jsdate')    
    
    .filter('sqlDateToJs', function() {
        return function(sqlDate){
			var jsDate = "";
			if(sqlDate){
				jsDate = new Date(sqlDate);
			}
			return jsDate;
        }
    })

})();