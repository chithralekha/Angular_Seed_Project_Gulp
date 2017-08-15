angular.module("inspinia").run(["$templateCache", function($templateCache) {$templateCache.put("app/dashboards/home.html","<div class=\"row wrapper border-bottom white-bg page-heading\"><div class=\"col-lg-12\"><h2>Dashboard</h2><ol class=\"breadcrumb\"><li>Home</li><li>Dashboards</li><li class=\"active\"><strong>Dashboard</strong></li></ol></div></div><div class=\"wrapper wrapper-content animated fadeInRight\"><div class=\"row\" style=\"margin-top:20px; margin-left:5px;\" ng-repeat=\"item in vm.businessControlProfileList\"><div class=\"ibox float-e-margins col-lg-8\"><div class=\"ibox-title\"><span class=\"label label-primary pull-right\" ng-click=\"complianceScore(item)\"></span><h5>{{item.name}}</h5></div><div class=\"ibox-content\"><div class=\"row\"><div class=\"col-lg-6\" ng-click=\"showClick(item)\"><c3chart bindto-id=\"gauge-plot{{item.id}}-chart\"><chart-column column-id=\"{{item.name}}\" column-color=\"{{item.color}}\" column-values=\"{{item.workingSetCompliance}}\" column-type=\"gauge\"><chart-gauge min=\"0%\" max=\"100%\" units=\"Score\" expand=\"true\" label-format-function=\"vm.formatValue(item.workingSetCompliance,0)\"><chart-events on-click-data=\"showClick(item)\"></chart-events></chart-gauge></chart-column></c3chart></div><div class=\"col-lg-6\"><div class=\"ibox float-e-margins\"><div class=\"ibox-title\"><span class=\"label label-primary pull-right hidden\" ng-click=\"complianceScore(item)\">?</span><h5>Control Catalogues</h5><span class=\"pull-right\"><h5>Compliance Percentage</h5></span></div><div class=\"ibox-content\"><div><ul class=\"list-group clear-list m-t\" ng-repeat=\"cs in item.workingSetTemplate.controlSets | limitTo:4\" ng-init=\"outerIndex = $index\"><li class=\"list-group-item\"><span class=\"label label-success hidden\">{{outerIndex + 1}}</span> <span class=\"pull-right\" ng-class=\"controlSetComplianceClass(cs)\">{{cs.controlSetCompliance}} %</span><span class=\"label label-success\"></span>{{cs.title }}</li></ul><ul class=\"list-group clear-list m-t\"><li class=\"list-group-item\"><span class=\"label label-primary pull-right\"></span></li></ul></div></div></div><a ui-sref=\"dashboards.dashboardSingleWorkingSet({obj: item})\"><span class=\"label label-primary pull-right\">More....</span></a></div><div class=\"col-lg-3 hidden\"><div class=\"ibox float-e-margins\"><div class=\"ibox-title\"><span class=\"label label-primary pull-right\" ng-click=\"complianceScore(item)\"></span><h5>Users</h5></div><div class=\"ibox-content\"><ul class=\"list-group clear-list m-t\" ng-repeat=\"user in item.users | limitTo:4\"><li class=\"list-group-item clear-list\"><span class=\"label label-success\"></span>{{user.userName}}</li></ul><ul class=\"list-group clear-list m-t\"><li class=\"list-group-item\"><span class=\"label label-primary pull-right\"></span></li></ul></div></div></div></div></div></div></div></div>");
$templateCache.put("app/login/login.html","<div class=\"middle-box text-center loginscreen animated fadeInDown\"><div><form class=\"m-t\" role=\"form\" id=\"login-form\" ng-submit=\"vm.login();\"><div class=\"row\" ng-repeat=\"error in errors\"><div class=\"alert alert-danger\">{{error}}</div></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"\" ng-model=\"vm.username\"></div><div class=\"form-group\"><input type=\"password\" autocomplete=\"off\" class=\"form-control\" placeholder=\"Password\" required=\"\" ng-model=\"vm.password\"></div><button id=\"login-form-submit-button\" type=\"submit\" class=\"btn btn-primary block full-width m-b\">Login</button></form></div></div>");
$templateCache.put("app/main/main.html","<div class=\"wrapper wrapper-content animated fadeInRight\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"text-center m-t-lg\"><h1>{{main.helloText}}</h1><small>{{main.descriptionText}} <i class=\"glyphicon glyphicon-pencil\"></i></small></div></div></div></div>");
$templateCache.put("app/minor/minor.html","<div class=\"wrapper wrapper-content animated fadeInRight\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"text-center m-t-lg\"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>");
$templateCache.put("app/taskboard/taskAddEditModal.html","<div class=\"ibox\"><div class=\"ibox-content\"><form role=\"form\" name=\"signup_form2\" novalidate=\"\" ng-submit=\"vm.confirm()\"><div class=\"modal-body\"><div class=\"row\"><div class=\"row\"><div class=\"col-lg-2\" style=\"font-size : 12px; padding-top : 8px\"><input type=\"text\" style=\"font-size : 12px; padding-top : 8px\" class=\"form-control no-border\" name=\"TaskCode\" ng-model=\"vm.content.code\" placeholder=\"Code\" required=\"\" ng-minlength=\"3\"><div class=\"m-t-xs\" ng-show=\"signup_form2.TaskCode.$invalid && signup_form2.TaskCode.$dirty\"><small class=\"text-danger\" ng-show=\"signup_form2.TaskCode.$error.required\">Please input a Task Code</small> <small class=\"text-danger\" ng-show=\"signup_form2.TaskCode.$error.minlength\">Your Task Code is required to be at least 3 characters</small> <small class=\"text-danger\" ng-show=\"signup_form2.TaskCode.$error.maxlength\">Your Task Code cannot be longer than 20 characters</small></div></div><div class=\"col-lg-9\" style=\"font-weight:bold;\"><input type=\"text\" style=\"font-size:25px\" class=\"form-control no-border\" name=\"TaskTitle\" ng-model=\"vm.content.title\" placeholder=\"Task Title\" required=\"\" ng-minlength=\"3\"><div class=\"m-t-xs\" ng-show=\"signup_form2.TaskTitle.$invalid && signup_form2.TaskTitle.$dirty\"><small class=\"text-danger\" style=\"font-weight:normal;\" ng-show=\"signup_form2.TaskTitle.$error.required\">Please input a Task Title</small> <small class=\"text-danger\" ng-show=\"signup_form2.TaskTitle.$error.minlength\">Your Task Title is required to be at least 3 characters</small> <small class=\"text-danger\" ng-show=\"signup_form2.TaskTitle.$error.maxlength\">Your Task Title cannot be longer than 20 characters</small></div></div><div class=\"col-lg-1 pull-right\"><button type=\"button\" class=\"close\" ng-click=\"vm.cancel()\">X</button></div></div><div class=\"row\"><div class=\"col-lg-4 hidden\"></div><div class=\"col-lg-4\"></div><div class=\"col-lg-2 pull-right\"><button type=\"button\" class=\"btn btn-info pull-right\" ng-click=\"vm.confirm()\" ng-disabled=\"signup_form2.$invalid\"><i class=\"fa fa-save\"></i> Save</button></div></div></div></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"tabs-container\"><uib-tabset><uib-tab><uib-tab-heading>Edit <i class=\"fa fa-pencil\"></i></uib-tab-heading><div class=\"panel-body\"><div class=\"col-lg-6\"><br><div class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-md-4 control-label\" style=\"padding-top : 10px\">Control Code</label><div class=\"col-md-6\"><select class=\"form-control m-b\" ng-enabled=\"vm.enableControlStatus(vm.content)\" ng-model=\"controlSets.Value\" ng-options=\"controlSet.Value as controlSet.Name for controlSet in vm.controlSets.Values\" ng-change=\"vm.updateControlSet(controlSets.Value)\"></select></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" style=\"padding-top : 10px\">Task State</label><div class=\"col-md-6\"><div class=\"btn-group hidden\" role=\"group\" aria-label=\"...\"><button type=\"button\" class=\"btn btn-sm btn-primary\">New</button> <button type=\"button\" class=\"btn btn-sm btn-primary\">In Progress</button> <button type=\"button\" class=\"btn btn-sm btn-primary\">Completed</button></div><select class=\"form-control m-b\" ng-disabled=\"vm.enableStatus(vm.content)\" ng-model=\"taskStates.Value\" ng-options=\"taskState.Value as taskState.Name for taskState in vm.taskStates.Values\" ng-change=\"vm.updateTaskState(taskStates.Value)\"></select><select class=\"form-control m-b hidden\" name=\"Name\" ng-model=\"dialogTask.taskState.name\" placeholder=\"Task State\"><option ng-repeat=\"item in taskStates\" value=\"{{item.Value}}\">{{item.Name}}</option></select></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" style=\"padding-top : 10px\">Due</label><div class=\"col-md-6\"><input type=\"text\" class=\"form-control no-border\" name=\"taskDue\" ng-model=\"vm.content.due\" placeholder=\"Task Due\" formatted-date=\"\" format=\"medium\"><div class=\"m-t-xs\" ng-show=\"signup_form2.taskDue.$invalid && signup_form2.taskDue.$dirty\"><small class=\"text-danger\" style=\"font-weight:normal;\" ng-show=\"signup_form2.taskDue.$error.date\">Please input a valid date</small> <small class=\"text-danger\" ng-show=\"signup_form2.taskDue.$error.minlength\">Your Task Due is required to be at least 3 characters</small> <small class=\"text-danger\" ng-show=\"signup_form2.taskDue.$error.maxlength\">Your Task Due cannot be longer than 20 characters</small></div></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" style=\"padding-top : 10px\">Link</label><div class=\"col-md-6\"><input type=\"text\" class=\"form-control no-border\" name=\"Link\" ng-model=\"vm.content.link\" placeholder=\"Link\"></div></div><div class=\"form-group\"><uib-accordion close-others=\"true\"><uib-accordion-group heading=\"Description\" is-open=\"true\"><textarea class=\"form-control no-border\" rows=\"4\" name=\"Decsription\" ng-model=\"vm.content.description\"></textarea></uib-accordion-group></uib-accordion></div></div></div><div class=\"col-lg-6\"><br></div></div></uib-tab><uib-tab><uib-tab-heading>Comments <i class=\"fa fa-comment-o\"></i></uib-tab-heading><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"ibox float-e-margins\"><div class=\"form-group\"><uib-accordion close-others=\"true\"><uib-accordion-group heading=\"Comments\" is-open=\"true\"><textarea class=\"form-control no-border\" rows=\"4\" name=\"Comments\" ng-model=\"comment.data\"></textarea></uib-accordion-group></uib-accordion></div></div></div><div class=\"col-lg-6\"><ul class=\"list-group clear-list m-t\" ng-repeat=\"comment in dialogTask.comments\"><li class=\"list-group-item clear-list\"><div class=\"agile-detail\"><blockquote><p>{{comment.text}}</p><footer>{{comment.lastModifiedByUser.userName}}, <cite>{{comment.lastModified | date}}</cite></footer></blockquote></div></li></ul></div></div></div></uib-tab><uib-tab><uib-tab-heading>RACI <i class=\"fa fa-users\"></i></uib-tab-heading><div class=\"panel-body\"><div class=\"col-lg-6\"><div class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-md-6 control-label\"><input type=\"radio\" ng-model=\"vm.raci.name\" value=\"Team\"> Assign RACI Team</label> <label class=\"col-md-6 control-label\"><input type=\"radio\" ng-model=\"vm.raci.name\" value=\"Role\"> Assign RACI Roles</label></div></div><div class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-md-4 control-label\" style=\"padding-top : 10px\">RACI Team</label><div class=\"col-md-6\"><select class=\"form-control m-b\" ng-model=\"vm.raciTeams.Value\" ng-options=\"raciTeam.Value as raciTeam.Name for raciTeam in vm.raciTeams.Values\" ng-change=\"vm.updateRaciTeam(vm.raciTeams.Value)\" ng-disabled=\"vm.raci.name == \'Role\'\"></select></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" style=\"padding-top : 10px\">Responsible</label><div class=\"col-md-6\"><select class=\"form-control m-b\" ng-model=\"vm.responsibleUsers.Value\" ng-options=\"responsibleUser.Value as responsibleUser.Name for responsibleUser in vm.responsibleUsers.Values\" ng-change=\"vm.updateResponsibleUser(vm.responsibleUsers.Value)\" ng-disabled=\"vm.raci.name == \'Team\'\"></select></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" style=\"padding-top : 10px\">Accountable</label><div class=\"col-md-6\"><select class=\"form-control m-b\" ng-model=\"vm.accountableUsers.Value\" ng-options=\"accountableUser.Value as accountableUser.Name for accountableUser in vm.accountableUsers.Values\" ng-change=\"vm.updateAccountableUser(vm.accountableUsers.Value)\" ng-disabled=\"vm.raci.name == \'Team\'\"></select></div></div><div class=\"form-group\"><uib-accordion close-others=\"true\"><uib-accordion-group heading=\"Informed\" is-open=\"true\"><select multiple=\"\" class=\"form-control m-b\" ng-model=\"vm.informedUsers.Value\" ng-options=\"informedUser.Value as informedUser.Name for informedUser in vm.informedUsers.Values\" ng-change=\"vm.updateInformedUsers(vm.informedUsers.Value)\" ng-disabled=\"vm.raci.name == \'Team\'\"></select></uib-accordion-group></uib-accordion></div></div></div><div class=\"col-lg-6\"><br><uib-accordion close-others=\"true\"><uib-accordion-group heading=\"Consulted\" is-open=\"true\"><select multiple=\"\" class=\"form-control m-b\" ng-model=\"vm.consultedUsers.Value\" ng-options=\"consultedUser.Value as consultedUser.Name for consultedUser in vm.consultedUsers.Values\" ng-change=\"vm.updateConsultedUsers(vm.consultedUsers.Value)\" ng-disabled=\"vm.raci.name == \'Team\'\"></select></uib-accordion-group></uib-accordion></div></div></uib-tab><uib-tab><uib-tab-heading>Artifacts</uib-tab-heading><div class=\"panel-body\"><div class=\"col-lg-6\"><div class=\"button\" ng-select=\"\" ng-model=\"files\" ng-multiple=\"true\">Select</div></div></div></uib-tab></uib-tabset></div></div></div></div></form></div></div>");
$templateCache.put("app/taskboard/taskboard.html","<div class=\"row wrapper border-bottom white-bg page-heading\"><div class=\"col-lg-12\"><h2>Task Board</h2><ol class=\"breadcrumb\"><li>Home</li><li>{{vm.descriptionText}}</li><li class=\"active\"><strong>{{vm.descriptionText}}</strong></li></ol></div></div><div class=\"wrapper wrapper-content\"><div class=\"row\"><div class=\"col-lg-4\"><div class=\"ibox\"><div class=\"ibox-content\"><h3>New</h3><button ng-click=\"vm.reload()\" class=\"fa fa-refresh hidden\">Reload</button> <button class=\"hidden\" modal-trigger=\"\" size=\"\'lg\'\" title=\"\'Hello World!\'\" message=\"\'This is a test\'\">Click Me</button><p class=\"small\"><i class=\"fa fa-hand-o-up\"></i> Drag task between list</p><div class=\"input-group\"><input type=\"text\" placeholder=\"Add new task.\" class=\"input input-sm form-control\" ng-model=\"taskTitle\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-sm btn-white\" ng-click=\"openTaskDetailsDialog(null)\"><i class=\"fa fa-plus\"></i> Add task</button></span></div><ul ui-sortable=\"vm.sortableOptions\" class=\"sortable-list connectList agile-list\" ng-model=\"vm.todoList\"><li ng-class=\"vm.taskDueStatusClass(task)\" ng-repeat=\"task in vm.todoList\"><div class=\"agile-detail\"><button type=\"button\" modal-trigger=\"\" size=\"\'lg\'\" title=\"\'{{task.title}}\'\" id=\"\'{{task.id}}\'\" message=\"\'This is a test\'\" class=\"btn btn-w-m btn-xs btn-link\">{{task.title}}</button><p class=\"pull-right\"><i class=\"fa fa-clock-o\"></i>{{task.due|date}}</p></div><div class=\"agile-detail\">{{task.code}}<p class=\"pull-right\">{{task.responsibleUser.userName}}</p></div></li></ul></div></div></div><div class=\"col-lg-4\"><div class=\"ibox\"><div class=\"ibox-content\"><h3>Active</h3><p class=\"small\"><i class=\"fa fa-hand-o-up\"></i> Drag task between list</p><ul ui-sortable=\"vm.sortableOptions\" class=\"sortable-list connectList agile-list\" ng-model=\"vm.inProgressList\"><li ng-class=\"vm.taskDueStatusClass(task)\" ng-repeat=\"task in vm.inProgressList\"><div class=\"agile-detail\"><button type=\"button\" ng-click=\"vm.open()\" class=\"btn btn-w-m btn-xs btn-link\">{{task.title}}</button><p class=\"pull-right\"><i class=\"fa fa-clock-o\"></i>{{task.due|date}}</p></div><div class=\"agile-detail\">{{task.code}}<p class=\"pull-right\">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class=\"col-lg-4\"><div class=\"ibox\"><div class=\"ibox-content\"><h3>Completed</h3><p class=\"small\"><i class=\"fa fa-hand-o-up\"></i> Drag task between list</p><ul ui-sortable=\"sortableOptions\" class=\"sortable-list connectList agile-list\" ng-model=\"completedList\"><li ng-class=\"vm.taskDueStatusClass(task)\" enablestatus(task)=\"\" ng-repeat=\"task in completedList | freeFormat : taskOrCode | dateRange:daterange.startDate :daterange.endDate | responsibleUser : responsibleUserList.selected | controlCatalogue : controlCatalogue | filter : { title: filterText.name || task, dueStatus : { id : dueStatus }}\"><div class=\"agile-detail\"><button type=\"button\" ng-click=\"openTaskDetailsDialog(task)\" class=\"btn btn-w-m btn-xs btn-link\">{{task.title | cut:true:25:\' ...\'}}</button><p class=\"pull-right\"><i class=\"fa fa-clock-o\"></i>{{task.due|date}}</p></div><div class=\"agile-detail\">{{task.code}}<p class=\"pull-right\">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div></div></div>");
$templateCache.put("app/components/common/content.html","<div id=\"wrapper\"><div ng-include=\"\'app/components/common/navigation.html\'\"></div><div id=\"page-wrapper\" class=\"gray-bg {{$state.current.name}}\"><div ng-include=\"\'app/components/common/topnavbar.html\'\"></div><div ui-view=\"\"></div><div ng-include=\"\'app/components/common/footer.html\'\"></div></div></div>");
$templateCache.put("app/components/common/footer.html","<div class=\"footer\"><div class=\"pull-right\">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2015-2016</div></div><div></div>");
$templateCache.put("app/components/common/ibox_tools.html","<div class=\"ibox-tools\" uib-dropdown=\"\"><a ng-click=\"showhide()\"><i class=\"fa fa-chevron-up\"></i></a> <a uib-dropdown-toggle=\"\" href=\"\"><i class=\"fa fa-wrench\"></i></a><ul uib-dropdown-menu=\"\"><li><a href=\"\">Config option 1</a></li><li><a href=\"\">Config option 2</a></li></ul><a ng-click=\"closebox()\"><i class=\"fa fa-times\"></i></a></div>");
$templateCache.put("app/components/common/navigation.html","<nav class=\"navbar-default navbar-static-side\" role=\"navigation\"><div class=\"sidebar-collapse\" ng-controller=\"NavigationController as vm\"><ul side-navigation=\"\" class=\"nav metismenu\" id=\"side-menu\"><li class=\"nav-header\"><div class=\"profile-element\" uib-dropdown=\"\"><a uib-dropdown-toggle=\"\" href=\"\"><img alt=\"\" class=\"img-circle\" src=\"./assets/images/patterns/default_profile.png\"> <span class=\"clear\"><span class=\"block m-t-xs\"><strong class=\"font-bold\">{{vm.userName}}</strong></span></span></a><ul uib-dropdown-menu=\"\" class=\"animated flipInX m-t-xs\"><li><a href=\"\">Logout</a></li></ul></div><div class=\"logo-element\">Altius Systems</div></li><li ng-class=\"{active: $state.includes(\'dashboard.dashboards\')}\"><a href=\"#\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"nav-label\">Dashboards</span> <span class=\"fa arrow\"></span></a><ul class=\"nav nav-second-level collapse\" ng-class=\"{in: $state.includes(\'dashboards\')}\"><li ui-sref-active=\"active\" ng-show=\"vm.isAuthorized([vm.userRoles.System, vm.userRoles.Debugger, vm.userRoles.Administrator, vm.userRoles.QlikUser])\"><a ui-sref=\"dashboard.dashboards\">Profiles<span class=\"label label-primary pull-right\">NEW</span></a></li></ul></li><li ng-class=\"{active: $state.includes(\'taskboard\')}\"><a href=\"#\"><i class=\"fa fa-tasks\"></i> <span class=\"nav-label\">Taskboard</span><span class=\"fa arrow\"></span></a><ul class=\"nav nav-second-level collapse\" ng-class=\"{in: $state.includes(\'taskboard\')}\"><li ng-class=\"vm.bcpNavClass(bcp)\" ng-repeat=\"bcp in vm.businessControlProfileList\"><a ui-sref=\"taskboard.taskboard({filterText: 1, bcp: bcp.id})\">{{bcp.name}}</a></li></ul><ul class=\"nav nav-second-level collapse\" ng-class=\"{in: $state.includes(\'taskboard\')}\"><li ng-class=\"{active: $state.includes(\'taskboard\')}\"><a href=\"#\"><i class=\"fa fa-filter\"></i> <span class=\"nav-label-second-level\">Filters</span><span class=\"fa arrow\"></span></a><ul class=\"nav nav-third-level collapse\" ng-class=\"{in: $state.includes(\'taskboard\')}\"><li ng-class=\"vm.filterNavClass(filter)\" ng-repeat=\"filter in vm.filters\"><a ui-sref=\"taskboard.taskboard({filterText: filter.filterId})\">{{filter.filterName}}</a></li></ul></li></ul></li><li ui-sref-active=\"active\"><a ui-sref=\"index.minor\"><i class=\"fa fa-sitemap\"></i> <span class=\"nav-label\">Operations</span></a></li></ul></div></nav>");
$templateCache.put("app/components/common/topnavbar.html","<div class=\"row border-bottom\"><nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\"><div class=\"navbar-header\"><span minimaliza-sidebar=\"\"></span><form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\"></div></form></div><ul class=\"nav navbar-top-links navbar-right\" ng-controller=\"LoginController as vm\"><li><a ui-sref=\"login\" ng-click=\"vm.logout()\"><i class=\"fa fa-sign-out\"></i> Log out</a></li></ul></nav></div>");}]);