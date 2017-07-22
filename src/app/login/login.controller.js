angular.module('inspinia')
    .controller('LoginController', function (dataservice, logger, $state) {
    
        var vm = this;

        vm.userName = 'Example user';
        vm.helloText = 'Dashboard';
        vm.descriptionText = 'Dashboard';
        vm.login = function() {
             $state.go('index.dashboards');
        }
    
//     activate();
    
    function activate() {
        //Following comment is from the original sorce, CleanCode by John Papa
        //            Using a resolver on all routes or dataservice.ready in every controller
        //            var promises = [getAvengers()];
        //            return dataservice.ready(promises).then(function(){
        
        return getAllWorkingSets()
                .then(function () {
                logger.info('Activated Dashboard View');
            });
        }
    function getAllWorkingSets() {
        return dataservice.getAllWorkingSets()
            .then(function (data) {
            //alert(data);
            vm.businessControlProfileList = data;
            vm.inProgressList = data.inProgressList;
            vm.completedList = data.completedList;
           return vm.todoList;
        });
    }
    
    });
