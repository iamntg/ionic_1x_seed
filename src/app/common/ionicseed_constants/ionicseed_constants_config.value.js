/**
 * @author NTG
 * created on 19.10.2016
 */

(function (){

    'use strict';
    
    angular.module('NTGIonicSeed.common.constants').value('NTGIonicSeedConfiguration', {
        environment  : 'development',
        environments : {
            development : {
                urlBase : '' 
            },
            production : {
                urlBase : ''
            },
            staging : {
                urlBase : ''
            }
        }
    });

})();

