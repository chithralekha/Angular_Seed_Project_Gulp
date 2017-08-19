'use strict';

angular.module('inspinia')
    .controller('DashboardController', function (workingSets, logger, $filter) {
    
    var vm = this;
    vm.userName = 'Example user';
    vm.helloText = 'Dashboard';
    vm.descriptionText = 'Dashboard';
    alert(workingSets);
   
//var chart = c3.generate({
//    bindto : '#chart',
//    data: {
//      columns: [
//        ['data1', 30],
//        ['data2', 50],
//        ['data3',50]  
//      ],
//         type:'pie'
//    }
//    
//});
//    var chart = c3.generate({
//    bindto: '#chart',
//    data: {
//      columns: [
//        ['data1', 30, 200, 100, 400, 150, 250],
//        ['data2', 50, 20, 10, 40, 15, 25]
//      ],
//      axes: {
//        data2: 'y2'
//      },
//      types: {
//        data2: 'bar' // ADD
//      }
//    },
//    axis: {
//      y: {
//        label: {
//          text: 'Y Label',
//          position: 'outer-middle'
//        }
//      },
//      y2: {
//        show: true,
//        label: {
//          text: 'Y2 Label',
//          position: 'outer-middle'
//        }
//      }
//    }
//});
    var businessControlProfile = ['Business Control Profiles'];
    var value = ['value'];
    angular.forEach(workingSets, function (workingSet) {
        alert(workingSet.id);
        businessControlProfile.push(workingSet.name);
        value.push(workingSet.workingSetCompliance);
    }) 
    
    var chart = c3.generate({
 bindto: '#chart',
  data: {
    x: 'Business Control Profiles',
    columns:
    [
      businessControlProfile,
      value
    ],

    type: 'bar',
    
		colors: {
      value: function(d) {
        return '#'+(0xff0000+(d.value-25)*256*3).toString(16);
      }
    },

  },
  axis: {
    x: {
      type: 'category',
        tick: {
          rotate: 50 // ADD
        }
    }
  },
  legend: {
    show: false
  }
});
    activate();
    
    function activate() {
        //Following comment is from the original sorce, CleanCode by John Papa
        //            Using a resolver on all routes or dataservice.ready in every controller
        //            var promises = [getAvengers()];
        //            return dataservice.ready(promises).then(function(){
        
//        return getAllWorkingSets()
//                .then(function () {
//                logger.info('Activated Dashboard View');
//            });
        vm.businessControlProfileList = workingSets;
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
