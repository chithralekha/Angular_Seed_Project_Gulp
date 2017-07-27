angular.module('inspinia')
    .controller('LoginController', function (dataservice, logger, $state, AuthFactory,$localStorage, userService) {
    
    var vm = this;
    vm.descriptionText = 'Login';
    vm.userName = '';
    vm.password = '';
    
    vm.login = function() {
        
        AuthFactory.authenticate(vm.username, vm.password)
            
            .then(function (data) {
            userService.getUserProfile()
            .then(function (data) {
                 //alert(dataFromStorage.username);
            $state.go('index.dashboards');
            })           
        });
    }
    
    vm.logout = function() {
        AuthFactory.logout();
    }
});
