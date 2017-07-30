/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('inspinia')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('config', {
        baseURL : 'http://ec2-52-33-130-108.us-west-2.compute.amazonaws.com:8081/MagpieAPI/api/', 
        //'http://localhost:3706/api/',
        authURL : 'http://ec2-52-33-130-108.us-west-2.compute.amazonaws.com:8081/MagpieIdentity/',
        //'http://localhost:50443/',
        //           'http://ec2-52-33-130-108.us-west-2.compute.amazonaws.com:8081/MagpieIdentity/',
        //            'http://localhost:50443/',
        //            baseURL : 'http://localhost:3706/api/',
        //            authURL : 'http://ec2-54-148-177-100.us-west-2.compute.amazonaws.com/MagpieIdentity/',
        oldTroutBaseURL : 'http://localhost:9092/Landing/index?n='})
        .constant('USER_ROLES', {
        all : '*',
        System : 'System',
        NotificationService : 'NotificationService',
        Debugger : 'Debugger',
        Administrator : 'Administrator',
        AccountManager : 'AccountManager',
        UserManager : 'UserManager',
        RaciTeamManager : 'RaciTeamManager',
        BusinessProcessManager : 'BusinessProcessManager',
        QlikUser : 'QlikUser',
        TaskBoardUser : 'TaskBoardUser',
        TaskBoardUserReadOnly : 'TaskBoardUserReadOnly',
        ProgramDesigner : 'ProgramDesigner',
        LogViewer : 'LogViewer',
        DocumentRepositoryUser : 'DocumentRepositoryUser',
        DocumentRepositoryUserReadOnly : 'DocumentRepositoryUserReadOnly',
        IncidentResponseUser : 'IncidentResponseUser',
        PolicyGeneratorUser : 'PolicyGeneratorUser'
    });
})();
