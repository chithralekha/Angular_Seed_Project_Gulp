'use strict';

angular.module('inspinia')
    .controller('DashboardController', function (workingSets, logger, $filter, workingSetComplianceColorCodeService, tasksSummary) {
    
    var vm = this;
    vm.userName = 'Example user';
    vm.helloText = 'Dashboard';
    vm.descriptionText = 'Dashboard';
    vm.workingSetComplianceColorCode = workingSetComplianceColorCodeService.retrieveWorkingSetColorCode;
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
        businessControlProfile.push(workingSet.name);
        value.push(workingSet.workingSetCompliance);
    }) 
    
    var chart = c3.generate({
 bindto: '#chart1',
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
        var val= vm.workingSetComplianceColorCode(d.value);
          return val;
        //'#'+(0xff0000+(d.value-25)*256*3).toString(16);
      }
    },

  },
  axis: {
      rotated: true,
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
    var chart = c3.generate({
        bindto: '#chart1',
         x: 'Business Control Profiles',
    data: {
        columns: [
            ['Business Control Profile', 0, 20, 50, 40, 60, 50],
            ['Task Completed', 200, 130, 90, 240, 130, 220],
            ['Tasks Overdue', 300, 200, 160, 400, 250, 250]
        ],
        type: 'bar',
         axis: {
      rotated: true,
    x: {
      type: 'category',
        tick: {
          rotate: 50 // ADD
        }
    }
  },
        colors: {
      value: function(d) {
        var val= vm.workingSetComplianceColorCode(d.value);
          return val;
        //'#'+(0xff0000+(d.value-25)*256*3).toString(16);
      }
    },
    }
});
    var bcp = ['x'];
    var complianceScore = ['Compliance Score'], tasksCompleted = ['Task Completed', 3, 3, 5], tasksOverdue = ['Tasks OverDue', 61, 0, 4], tasksUnassigned = ['Tasks Unassigned', 4, 0, 8];
    angular.forEach(workingSets, function (workingSet) {
        bcp.push(workingSet.name);
        complianceScore.push(workingSet.workingSetCompliance);
    }); 
    
    var full = [
    bcp,
    complianceScore,
    tasksCompleted,
    tasksOverdue,
    tasksUnassigned
];

var chart = c3.generate({
    data: {
        x: 'x',
        columns: full,
        type: 'bar',
    },
    bar: {
        width: {
            ratio: 0.8 // this makes bar width 50% of length between ticks
        }
    },
//    axis: {
//        x: {
//            type: 'category' // this is needed to load string x value
//        }
//    },
     axis: {
      rotated: true,
    x: {
      type: 'category',
        tick: {
          rotate: 50 // ADD
        }
    }
  },
     colors: {
      value: function(d) {
        var val= vm.workingSetComplianceColorCode(d.value);
          return val;
        //'#'+(0xff0000+(d.value-25)*256*3).toString(16);
      }
    },
    bindto: '#chart'
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
