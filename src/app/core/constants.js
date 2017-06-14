/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('inspinia')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('config', {
        baseURL : 'http://localhost:3706/api/',
        authURL : 'http://ec2-35-164-78-65.us-west-2.compute.amazonaws.com/MagpieIdentity/',
        //            baseURL : 'http://localhost:3706/api/',
        //            authURL : 'http://ec2-54-148-177-100.us-west-2.compute.amazonaws.com/MagpieIdentity/',
        oldTroutBaseURL : 'http://localhost:9092/Landing/index?n='
    });
})();
