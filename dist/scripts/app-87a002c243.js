!function(){"use strict";angular.module("inspinia",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","ngRoute","oc.lazyLoad","ui.sortable","gridshore.c3js.chart"])}(),function(){"use strict";function a(a,e){a.state("index.taskboard",{url:"/taskboard/:filterText?bcp",templateUrl:"app/taskboard/taskboard.html",data:{pageTitle:"Taskboard"},controller:"TaskboardController",controllerAs:"vm"}),e.otherwise("/index/main")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(a)}(),angular.module("inspinia").controller("TaskboardController",["dataservice","taskDueStatusClassService","logger","$stateParams","$state",function(a,e,t,i,s){function n(){return l(i.bcp,i.filterText).then(function(){t.info("Activated Taskboard View")})}function l(e,t){return a.getTasksSummary(e,t).then(function(a){return o.todoList=a.todoList,o.inProgressList=a.inProgressList,o.completedList=a.completedList,o.todoList})}var o=this;o.userName="Example user",o.helloText="Taskboard",o.descriptionText="Taskboard",o.taskDueStatusClass=e.retrieveTaskDueStatusClass,o.sortableOptions={connectWith:".connectList"},n(),o.reload=function(){s.reload()}}]),function(){"use strict";function a(a,e){a.state("login",{url:"/login",templateUrl:"app/login/login.html",data:{pageTitle:"Login",specialClass:"login-bg"},controller:"LoginController",controllerAs:"vm"}),e.otherwise("/login")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(a)}(),angular.module("inspinia").controller("LoginController",["dataservice","logger",function(a,e){function t(){return i().then(function(){e.info("Activated Dashboard View")})}function i(){return a.getAllWorkingSets().then(function(a){return s.businessControlProfileList=a,s.inProgressList=a.inProgressList,s.completedList=a.completedList,s.todoList})}var s=this;s.userName="Example user",s.helloText="Dashboard",s.descriptionText="Dashboard",t()}]),angular.module("inspinia").controller("MainController",function(){var a=this;a.userName="Example user",a.helloText="Welcome in INSPINIA Gulp SeedProject",a.descriptionText="It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects."}),function(){"use strict";function a(a,e){function t(t,i,s){e.error(t,s),a.error("Error: "+t,i)}function i(t,i,s){e.info(t,s),a.info("Info: "+t,i)}function s(t,i,s){e.success(t,s),a.info("Success: "+t,i)}function n(t,i,s){e.warning(t,s),a.warn("Warning: "+t,i)}var l={showToasts:!0,error:t,info:i,success:s,warning:n,log:a.log};return l}angular.module("inspinia").factory("logger",a),a.$inject=["$log","toastr"]}(),function(){"use strict";function a(a){function e(e){return function(t){a.error(e,t)}}var t={catcher:e};return t}a.$inject=["logger"],angular.module("inspinia").factory("exception",a)}(),function(){"use strict";function a(){this.config={appErrorPrefix:void 0},this.configure=function(a){this.config.appErrorPrefix=a},this.$get=function(){return{config:this.config}}}function e(a){a.decorator("$exceptionHandler",t)}function t(a,e,t){return function(i,s){var n=e.config.appErrorPrefix||"",l={exception:i,cause:s};i.message=n+i.message,a(i,s),t.error(i.message,l)}}e.$inject=["$provide"],t.$inject=["$delegate","exceptionHandler","logger"],angular.module("inspinia").provider("exceptionHandler",a).config(e)}(),function(){"use strict";function a(a,e){a.state("index.dashboards",{url:"/home",templateUrl:"app/dashboards/home.html",data:{pageTitle:"Dashboard"},controller:"DashboardController",controllerAs:"vm"}),e.otherwise("/index/main")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(a)}(),angular.module("inspinia").controller("DashboardController",["dataservice","logger",function(a,e){function t(){return i().then(function(){e.info("Activated Dashboard View")})}function i(){return a.getAllWorkingSets().then(function(a){return s.businessControlProfileList=a,s.inProgressList=a.inProgressList,s.completedList=a.completedList,s.todoList})}var s=this;s.userName="Example user",s.helloText="Dashboard",s.descriptionText="Dashboard",t()}]),angular.module("inspinia").controller("NavigationController",["dataservice","logger","$stateParams",function(a,e,t){function i(a){d.businessControlProfileList=a}function s(a){}function n(a){console.log("Error Message: "+a)}function l(){}function o(a){d.filters=a}function r(a){console.log("Promise Notification: "+a)}function n(a){console.log("Error Message: "+a)}function c(){console.log("getAllFilters has completed")}var d=this;d.userName="Example user",d.helloText="Taskboard",d.descriptionText="Taskboard",a.getAllWorkingSets().then(i,null,s)["catch"](n)["finally"](l),a.getAllFilters().then(o,null,r)["catch"](n)["finally"](c),d.bcpNavClass=function(a){return a.id==t.bcp?"active":""},d.filterNavClass=function(a){var e=a.filterId==t.filterText?"active":"";return e}}]),function(){"use strict";function a(a,e,t,i,s,n){function l(a,e){var i=t.defer(),s=o(a,e);return t.when(s).then(function(a){var e=a.taskInfos,t=[],s=[],n=[];e.forEach(function(a,e,i){1===a.taskState.id?t.push(a):2===a.taskState.id?s.push(a):3===a.taskState.id&&n.push(a)});var l={todoList:t,inProgressList:s,completedList:n};i.resolve(l)}),i.promise}function o(e,t){return a({method:"GET",url:n.baseURL+"WorkingSets/"+e+"/Tasks?filterId="+t}).then(r)["catch"](c)}function r(a){return a.data}function c(a){return t.reject("Error retrieving Tasks. (HTTP status: "+a.status+")")}function d(){return a({method:"GET",url:n.baseURL+"WorkingSets/"}).then(r)["catch"](u)}function u(a){return t.reject("Error retrieving WorkingSets. (HTTP status: "+a.status+")")}function p(){return a({method:"GET",url:n.baseURL+"Filters/"}).then(r)["catch"](m)}function m(a){return t.reject("Error retrieving Filters. (HTTP status: "+a.status+")")}var g={getTasksSummary:l,getAllTasks:o,getAllWorkingSets:d,getAllFilters:p};return g}function e(a){var e=null;switch(a.dueStatus.status){case"Overdue":e="danger-element";break;case"On Time":e="success-element";break;case"In Jeopardy":e="warning-element"}return e}a.$inject=["$http","$location","$q","exception","logger","config"],angular.module("inspinia").factory("dataservice",a).value("taskDueStatusClassService",{retrieveTaskDueStatusClass:e})}(),function(){"use strict";angular.module("inspinia").constant("toastr",toastr).constant("moment",moment).constant("config",{baseURL:"http://localhost:3706/api/",authURL:"http://ec2-35-164-78-65.us-west-2.compute.amazonaws.com/MagpieIdentity/",oldTroutBaseURL:"http://localhost:9092/Landing/index?n="})}(),angular.element(document).ready(function(a){function e(){var a=angular.element("body > #wrapper").height()-61;angular.element(".sidebar-panel").css("min-height",a+"px");var e=angular.element("nav.navbar-default").height(),t=angular.element("#page-wrapper").height();e>t&&angular.element("#page-wrapper").css("min-height",e+"px"),t>e&&angular.element("#page-wrapper").css("min-height",angular.element(window).height()+"px"),angular.element("body").hasClass("fixed-nav")&&(e>t?angular.element("#page-wrapper").css("min-height",e+"px"):angular.element("#page-wrapper").css("min-height",angular.element(window).height()-60+"px"))}angular.element(window).bind("load resize scroll",function(){angular.element("body").hasClass("body-small")||e()}),angular.element(window).scroll(function(){angular.element(window).scrollTop()>0&&!angular.element("body").hasClass("fixed-nav")?angular.element("#right-sidebar").addClass("sidebar-top"):angular.element("#right-sidebar").removeClass("sidebar-top")}),a(function(){e()}),angular.element(window).bind("load resize",function(){angular.element(document).width()<769?angular.element("body").addClass("body-small"):angular.element("body").removeClass("body-small")})}),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("inspinia").run(a)}(),function(){"use strict";function a(a,e){a.state("index",{"abstract":!0,url:"/index",templateUrl:"app/components/common/content.html"}).state("index.main",{url:"/main",templateUrl:"app/main/main.html",data:{pageTitle:"Example view"}}).state("index.minor",{url:"/minor",templateUrl:"app/minor/minor.html",data:{pageTitle:"Example view"}}),e.otherwise("/login")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(a)}(),angular.module("inspinia").directive("sideNavigation",["$timeout",function(a){return{restrict:"A",link:function(e,t){e.$watch("authentication.user",function(){a(function(){t.metisMenu()})});var i=angular.element('#side-menu a:not([href$="\\#"])');if(i.click(function(){angular.element(window).width()<769&&angular.element("body").toggleClass("mini-navbar")}),angular.element("body").hasClass("fixed-sidebar")){var s=t.parent();s.slimScroll({height:"100%",railOpacity:.9})}}}}]).directive("minimalizaSidebar",["$timeout",function(a){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:["$scope",function(e){e.minimalize=function(){angular.element("body").toggleClass("mini-navbar"),!angular.element("body").hasClass("mini-navbar")||angular.element("body").hasClass("body-small")?(angular.element("#side-menu").hide(),a(function(){angular.element("#side-menu").fadeIn(400)},200)):angular.element("#side-menu").removeAttr("style")}}]}}]),angular.module("inspinia").run(["$templateCache",function(a){a.put("app/dashboards/home.html",'<div class="row wrapper border-bottom white-bg page-heading"><div class="col-lg-12"><h2>Dashboard</h2><ol class="breadcrumb"><li>Home</li><li>Dashboards</li><li class="active"><strong>Dashboard</strong></li></ol></div></div><div class="wrapper wrapper-content animated fadeInRight"><div class="row" style="margin-top:20px; margin-left:5px;" ng-repeat="item in vm.businessControlProfileList"><div class="ibox float-e-margins col-lg-8"><div class="ibox-title"><span class="label label-primary pull-right" ng-click="complianceScore(item)"></span><h5>{{item.name}}</h5></div><div class="ibox-content"><div class="row"><div class="col-lg-6" ng-click="showClick(item)"><c3chart bindto-id="gauge-plot{{item.id}}-chart"><chart-column column-id="{{item.name}}" column-color="{{item.color}}" column-values="{{item.workingSetCompliance}}" column-type="gauge"><chart-gauge min="0" max="100" units="Score"><chart-events on-click-data="showClick(item)"></chart-events></chart-gauge></chart-column></c3chart></div><div class="col-lg-6"><div class="ibox float-e-margins"><div class="ibox-title"><span class="label label-primary pull-right hidden" ng-click="complianceScore(item)">?</span><h5>Control Catalogues</h5><span class="pull-right"><h5>Compliance Percentage</h5></span></div><div class="ibox-content"><div><ul class="list-group clear-list m-t" ng-repeat="cs in item.workingSetTemplate.controlSets | limitTo:4" ng-init="outerIndex = $index"><li class="list-group-item"><span class="label label-success hidden">{{outerIndex + 1}}</span> <span class="pull-right" ng-class="controlSetComplianceClass(cs)">{{cs.controlSetCompliance}} %</span><span class="label label-success"></span>{{cs.title }}</li></ul><ul class="list-group clear-list m-t"><li class="list-group-item"><span class="label label-primary pull-right"></span></li></ul></div></div></div><a ui-sref="dashboards.dashboardSingleWorkingSet({obj: item})"><span class="label label-primary pull-right">More....</span></a></div><div class="col-lg-3 hidden"><div class="ibox float-e-margins"><div class="ibox-title"><span class="label label-primary pull-right" ng-click="complianceScore(item)"></span><h5>Users</h5></div><div class="ibox-content"><ul class="list-group clear-list m-t" ng-repeat="user in item.users | limitTo:4"><li class="list-group-item clear-list"><span class="label label-success"></span>{{user.userName}}</li></ul><ul class="list-group clear-list m-t"><li class="list-group-item"><span class="label label-primary pull-right"></span></li></ul></div></div></div></div></div></div></div></div>'),a.put("app/login/login.html",'<div class="middle-box text-center loginscreen animated fadeInDown"><div><form class="m-t" role="form" id="login-form" ng-submit="login();"><div class="row" ng-repeat="error in errors"><div class="alert alert-danger">{{error}}</div></div><div class="form-group"><input type="text" class="form-control" placeholder="Username" required="" ng-model="username"></div><div class="form-group"><input type="password" autocomplete="off" class="form-control" placeholder="Password" required="" ng-model="password"></div><button id="login-form-submit-button" type="submit" class="btn btn-primary block full-width m-b">Login</button></form></div></div>'),a.put("app/main/main.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>{{main.helloText}}</h1><small>{{main.descriptionText}} <i class="glyphicon glyphicon-pencil"></i></small></div></div></div></div>'),a.put("app/minor/minor.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>'),a.put("app/taskboard/taskboard.html",'<div class="row wrapper border-bottom white-bg page-heading"><div class="col-lg-12"><h2>Task Board</h2><ol class="breadcrumb"><li>Home</li><li>{{vm.descriptionText}}</li><li class="active"><strong>{{vm.descriptionText}}</strong></li></ol></div></div><div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>New</h3><button ng-click="vm.reload()" class="fa fa-refresh">Reload</button><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><div class="input-group"><input type="text" placeholder="Add new task." class="input input-sm form-control" ng-model="taskTitle"> <span class="input-group-btn"><button type="button" class="btn btn-sm btn-white" ng-click="openTaskDetailsDialog(null)"><i class="fa fa-plus"></i> Add task</button></span></div><ul ui-sortable="vm.sortableOptions" class="sortable-list connectList agile-list" ng-model="vm.todoList"><li ng-class="vm.taskDueStatusClass(task)" ng-repeat="task in vm.todoList"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>Active</h3><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><ul ui-sortable="vm.sortableOptions" class="sortable-list connectList agile-list" ng-model="vm.inProgressList"><li ng-class="vm.taskDueStatusClass(task)" ng-repeat="task in vm.inProgressList"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>Completed</h3><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><ul ui-sortable="sortableOptions" class="sortable-list connectList agile-list" ng-model="completedList"><li ng-class="vm.taskDueStatusClass(task)" enablestatus(task)="" ng-repeat="task in completedList | freeFormat : taskOrCode | dateRange:daterange.startDate :daterange.endDate | responsibleUser : responsibleUserList.selected | controlCatalogue : controlCatalogue | filter : { title: filterText.name || task, dueStatus : { id : dueStatus }}"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title | cut:true:25:\' ...\'}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div></div></div>'),a.put("app/components/common/content.html",'<div id="wrapper"><div ng-include="\'app/components/common/navigation.html\'"></div><div id="page-wrapper" class="gray-bg {{$state.current.name}}"><div ng-include="\'app/components/common/topnavbar.html\'"></div><div ui-view=""></div><div ng-include="\'app/components/common/footer.html\'"></div></div></div>'),a.put("app/components/common/footer.html",'<div class="footer"><div class="pull-right">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2015-2016</div></div><div></div>'),a.put("app/components/common/ibox_tools.html",'<div class="ibox-tools" uib-dropdown=""><a ng-click="showhide()"><i class="fa fa-chevron-up"></i></a> <a uib-dropdown-toggle="" href=""><i class="fa fa-wrench"></i></a><ul uib-dropdown-menu=""><li><a href="">Config option 1</a></li><li><a href="">Config option 2</a></li></ul><a ng-click="closebox()"><i class="fa fa-times"></i></a></div>'),a.put("app/components/common/navigation.html",'<nav class="navbar-default navbar-static-side" role="navigation"><div class="sidebar-collapse"><ul side-navigation="" class="nav metismenu" id="side-menu"><li class="nav-header"><div class="profile-element" uib-dropdown=""><a uib-dropdown-toggle="" href=""><span class="clear"><span class="block m-t-xs"><strong class="font-bold">{{main.userName}}</strong></span> <span class="text-muted text-xs block">Example menu<b class="caret"></b></span></span></a><ul uib-dropdown-menu="" class="animated flipInX m-t-xs"><li><a href="">Logout</a></li></ul></div><div class="logo-element">Altius Systems</div></li><li ng-class="{active: $state.includes(\'index.dashboards\')}"><a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span></a><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'dashboards\')}"><li ui-sref-active="active"><a ui-sref="index.dashboards">Profiles<span class="label label-primary pull-right">NEW</span></a></li></ul></li><li ng-class="{active: $state.includes(\'index.taskboard\')}" ng-controller="NavigationController as vm"><a href="#"><i class="fa fa-tasks"></i> <span class="nav-label">Taskboard</span><span class="fa arrow"></span></a><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="vm.bcpNavClass(bcp)" ng-repeat="bcp in vm.businessControlProfileList"><a ui-sref="index.taskboard({filterText: 1, bcp: bcp.id})">{{bcp.name}}</a></li></ul><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="{active: $state.includes(\'index\')}"><a href="#"><i class="fa fa-filter"></i> <span class="nav-label-second-level">Filters</span><span class="fa arrow"></span></a><ul class="nav nav-third-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="vm.filterNavClass(filter)" ng-repeat="filter in vm.filters"><a ui-sref="index.taskboard({filterText: filter.filterId})">{{filter.filterName}}</a></li></ul></li></ul></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-sitemap"></i> <span class="nav-label">Operations</span></a></li></ul></div></nav>'),a.put("app/components/common/topnavbar.html",'<div class="row border-bottom"><nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0"><div class="navbar-header"><span minimaliza-sidebar=""></span><form role="search" class="navbar-form-custom" method="post" action=""><div class="form-group"><input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search"></div></form></div><ul class="nav navbar-top-links navbar-right"><li><a href=""><i class="fa fa-sign-out"></i> Log out</a></li></ul></nav></div>')}]);
//# sourceMappingURL=../maps/scripts/app-87a002c243.js.map
