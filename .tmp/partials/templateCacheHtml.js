angular.module("inspinia").run(["$templateCache", function($templateCache) {$templateCache.put("app/dashboards/home.html","<div class=\"row wrapper border-bottom white-bg page-heading\"><div class=\"col-lg-12\"><h2>Dashboard</h2><ol class=\"breadcrumb\"><li>Home</li><li>Dashboards</li><li class=\"active\"><strong>Dashboard</strong></li></ol></div></div><div class=\"wrapper wrapper-content animated fadeInRight\"><div class=\"row\" style=\"margin-top:20px; margin-left:5px;\" ng-repeat=\"item in vm.businessControlProfileList\"><div class=\"ibox float-e-margins col-lg-8\"><div class=\"ibox-title\"><span class=\"label label-primary pull-right\" ng-click=\"complianceScore(item)\"></span><h5>{{item.name}}</h5></div><div class=\"ibox-content\"><div class=\"row\"><div class=\"col-lg-6\" ng-click=\"showClick(item)\"><c3chart bindto-id=\"gauge-plot{{item.id}}-chart\"><chart-column column-id=\"{{item.name}}\" column-color=\"{{item.color}}\" column-values=\"{{item.workingSetCompliance}}\" column-type=\"gauge\"><chart-gauge min=\"0\" max=\"100\" units=\"Score\"><chart-events on-click-data=\"showClick(item)\"></chart-events></chart-gauge></chart-column></c3chart></div><div class=\"col-lg-6\"><div class=\"ibox float-e-margins\"><div class=\"ibox-title\"><span class=\"label label-primary pull-right hidden\" ng-click=\"complianceScore(item)\">?</span><h5>Control Catalogues</h5><span class=\"pull-right\"><h5>Compliance Percentage</h5></span></div><div class=\"ibox-content\"><div><ul class=\"list-group clear-list m-t\" ng-repeat=\"cs in item.workingSetTemplate.controlSets | limitTo:4\" ng-init=\"outerIndex = $index\"><li class=\"list-group-item\"><span class=\"label label-success hidden\">{{outerIndex + 1}}</span> <span class=\"pull-right\" ng-class=\"controlSetComplianceClass(cs)\">{{cs.controlSetCompliance}} %</span><span class=\"label label-success\"></span>{{cs.title }}</li></ul><ul class=\"list-group clear-list m-t\"><li class=\"list-group-item\"><span class=\"label label-primary pull-right\"></span></li></ul></div></div></div><a ui-sref=\"dashboards.dashboardSingleWorkingSet({obj: item})\"><span class=\"label label-primary pull-right\">More....</span></a></div><div class=\"col-lg-3 hidden\"><div class=\"ibox float-e-margins\"><div class=\"ibox-title\"><span class=\"label label-primary pull-right\" ng-click=\"complianceScore(item)\"></span><h5>Users</h5></div><div class=\"ibox-content\"><ul class=\"list-group clear-list m-t\" ng-repeat=\"user in item.users | limitTo:4\"><li class=\"list-group-item clear-list\"><span class=\"label label-success\"></span>{{user.userName}}</li></ul><ul class=\"list-group clear-list m-t\"><li class=\"list-group-item\"><span class=\"label label-primary pull-right\"></span></li></ul></div></div></div></div></div></div></div></div>");
$templateCache.put("app/login/login.html","<div class=\"middle-box text-center loginscreen animated fadeInDown\"><div><form class=\"m-t\" role=\"form\" id=\"login-form\" ng-submit=\"login();\"><div class=\"row\" ng-repeat=\"error in errors\"><div class=\"alert alert-danger\">{{error}}</div></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"\" ng-model=\"username\"></div><div class=\"form-group\"><input type=\"password\" autocomplete=\"off\" class=\"form-control\" placeholder=\"Password\" required=\"\" ng-model=\"password\"></div><button id=\"login-form-submit-button\" type=\"submit\" class=\"btn btn-primary block full-width m-b\">Login</button></form></div></div>");
$templateCache.put("app/main/main.html","<div class=\"wrapper wrapper-content animated fadeInRight\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"text-center m-t-lg\"><h1>{{main.helloText}}</h1><small>{{main.descriptionText}} <i class=\"glyphicon glyphicon-pencil\"></i></small></div></div></div></div>");
$templateCache.put("app/taskboard/taskboard.html","<div class=\"row wrapper border-bottom white-bg page-heading\"><div class=\"col-lg-12\"><h2>Task Board</h2><ol class=\"breadcrumb\"><li>Home</li><li>{{vm.descriptionText}}</li><li class=\"active\"><strong>{{vm.descriptionText}}</strong></li></ol></div></div><div class=\"wrapper wrapper-content animated fadeInRight\"><div class=\"row\"><div class=\"col-lg-4\"><div class=\"ibox\"><div class=\"ibox-content\"><h3>New</h3><button ng-click=\"vm.reload()\" class=\"fa fa-refresh\">Reload</button><p class=\"small\"><i class=\"fa fa-hand-o-up\"></i> Drag task between list</p><div class=\"input-group\"><input type=\"text\" placeholder=\"Add new task.\" class=\"input input-sm form-control\" ng-model=\"taskTitle\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-sm btn-white\" ng-click=\"openTaskDetailsDialog(null)\"><i class=\"fa fa-plus\"></i> Add task</button></span></div><ul ui-sortable=\"vm.sortableOptions\" class=\"sortable-list connectList agile-list\" ng-model=\"vm.todoList\"><li ng-class=\"vm.taskDueStatusClass(task)\" ng-repeat=\"task in vm.todoList\"><div class=\"agile-detail\"><button type=\"button\" ng-click=\"openTaskDetailsDialog(task)\" class=\"btn btn-w-m btn-xs btn-link\">{{task.title}}</button><p class=\"pull-right\"><i class=\"fa fa-clock-o\"></i>{{task.due|date}}</p></div><div class=\"agile-detail\">{{task.code}}<p class=\"pull-right\">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class=\"col-lg-4\"><div class=\"ibox\"><div class=\"ibox-content\"><h3>Active</h3><p class=\"small\"><i class=\"fa fa-hand-o-up\"></i> Drag task between list</p><ul ui-sortable=\"vm.sortableOptions\" class=\"sortable-list connectList agile-list\" ng-model=\"vm.inProgressList\"><li ng-class=\"vm.taskDueStatusClass(task)\" ng-repeat=\"task in vm.inProgressList\"><div class=\"agile-detail\"><button type=\"button\" ng-click=\"openTaskDetailsDialog(task)\" class=\"btn btn-w-m btn-xs btn-link\">{{task.title}}</button><p class=\"pull-right\"><i class=\"fa fa-clock-o\"></i>{{task.due|date}}</p></div><div class=\"agile-detail\">{{task.code}}<p class=\"pull-right\">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class=\"col-lg-4\"><div class=\"ibox\"><div class=\"ibox-content\"><h3>Completed</h3><p class=\"small\"><i class=\"fa fa-hand-o-up\"></i> Drag task between list</p><ul ui-sortable=\"sortableOptions\" class=\"sortable-list connectList agile-list\" ng-model=\"completedList\"><li ng-class=\"vm.taskDueStatusClass(task)\" enablestatus(task)=\"\" ng-repeat=\"task in completedList | freeFormat : taskOrCode | dateRange:daterange.startDate :daterange.endDate | responsibleUser : responsibleUserList.selected | controlCatalogue : controlCatalogue | filter : { title: filterText.name || task, dueStatus : { id : dueStatus }}\"><div class=\"agile-detail\"><button type=\"button\" ng-click=\"openTaskDetailsDialog(task)\" class=\"btn btn-w-m btn-xs btn-link\">{{task.title | cut:true:25:\' ...\'}}</button><p class=\"pull-right\"><i class=\"fa fa-clock-o\"></i>{{task.due|date}}</p></div><div class=\"agile-detail\">{{task.code}}<p class=\"pull-right\">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div></div></div>");
$templateCache.put("app/minor/minor.html","<div class=\"wrapper wrapper-content animated fadeInRight\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"text-center m-t-lg\"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>");
$templateCache.put("app/components/common/content.html","<div id=\"wrapper\"><div ng-include=\"\'app/components/common/navigation.html\'\"></div><div id=\"page-wrapper\" class=\"gray-bg {{$state.current.name}}\"><div ng-include=\"\'app/components/common/topnavbar.html\'\"></div><div ui-view=\"\"></div><div ng-include=\"\'app/components/common/footer.html\'\"></div></div></div>");
$templateCache.put("app/components/common/footer.html","<div class=\"footer\"><div class=\"pull-right\">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2015-2016</div></div><div></div>");
$templateCache.put("app/components/common/ibox_tools.html","<div class=\"ibox-tools\" uib-dropdown=\"\"><a ng-click=\"showhide()\"><i class=\"fa fa-chevron-up\"></i></a> <a uib-dropdown-toggle=\"\" href=\"\"><i class=\"fa fa-wrench\"></i></a><ul uib-dropdown-menu=\"\"><li><a href=\"\">Config option 1</a></li><li><a href=\"\">Config option 2</a></li></ul><a ng-click=\"closebox()\"><i class=\"fa fa-times\"></i></a></div>");
$templateCache.put("app/components/common/navigation.html","<nav class=\"navbar-default navbar-static-side\" role=\"navigation\"><div class=\"sidebar-collapse\"><ul side-navigation=\"\" class=\"nav metismenu\" id=\"side-menu\"><li class=\"nav-header\"><div class=\"profile-element\" uib-dropdown=\"\"><a uib-dropdown-toggle=\"\" href=\"\"><span class=\"clear\"><span class=\"block m-t-xs\"><strong class=\"font-bold\">{{main.userName}}</strong></span> <span class=\"text-muted text-xs block\">Example menu<b class=\"caret\"></b></span></span></a><ul uib-dropdown-menu=\"\" class=\"animated flipInX m-t-xs\"><li><a href=\"\">Logout</a></li></ul></div><div class=\"logo-element\">Altius Systems</div></li><li ng-class=\"{active: $state.includes(\'index.dashboards\')}\"><a href=\"#\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"nav-label\">Dashboards</span> <span class=\"fa arrow\"></span></a><ul class=\"nav nav-second-level collapse\" ng-class=\"{in: $state.includes(\'dashboards\')}\"><li ui-sref-active=\"active\"><a ui-sref=\"index.dashboards\">Profiles<span class=\"label label-primary pull-right\">NEW</span></a></li></ul></li><li ng-class=\"{active: $state.includes(\'index.taskboard\')}\" ng-controller=\"NavigationController as vm\"><a href=\"#\"><i class=\"fa fa-tasks\"></i> <span class=\"nav-label\">Taskboard</span><span class=\"fa arrow\"></span></a><ul class=\"nav nav-second-level collapse\" ng-class=\"{in: $state.includes(\'index\')}\"><li ng-class=\"vm.bcpNavClass(bcp)\" ng-repeat=\"bcp in vm.businessControlProfileList\"><a ui-sref=\"index.taskboard({filterText: 1, bcp: bcp.id})\">{{bcp.name}}</a></li></ul><ul class=\"nav nav-second-level collapse\" ng-class=\"{in: $state.includes(\'index\')}\"><li ng-class=\"{active: $state.includes(\'index\')}\"><a href=\"#\"><i class=\"fa fa-filter\"></i> <span class=\"nav-label-second-level\">Filters</span><span class=\"fa arrow\"></span></a><ul class=\"nav nav-third-level collapse\" ng-class=\"{in: $state.includes(\'index\')}\"><li ng-class=\"vm.filterNavClass(filter)\" ng-repeat=\"filter in vm.filters\"><a ui-sref=\"index.taskboard({filterText: filter.filterId})\">{{filter.filterName}}</a></li></ul></li></ul></li><li ui-sref-active=\"active\"><a ui-sref=\"index.minor\"><i class=\"fa fa-sitemap\"></i> <span class=\"nav-label\">Operations</span></a></li></ul></div></nav>");
$templateCache.put("app/components/common/topnavbar.html","<div class=\"row border-bottom\"><nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\"><div class=\"navbar-header\"><span minimaliza-sidebar=\"\"></span><form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\"></div></form></div><ul class=\"nav navbar-top-links navbar-right\"><li><a href=\"\"><i class=\"fa fa-sign-out\"></i> Log out</a></li></ul></nav></div>");}]);