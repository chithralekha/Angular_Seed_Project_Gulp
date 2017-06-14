/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('inspinia')
        .constant('toastr', toastr)
        .constant('moment', moment);
})();
