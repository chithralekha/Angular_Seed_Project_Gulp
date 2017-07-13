!function(){"use strict";angular.module("inspinia",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","ngRoute","oc.lazyLoad","ui.sortable"])}(),function(){"use strict";function a(a,e){a.state("index.taskboard",{url:"/taskboard/:filterText?bcp",templateUrl:"app/taskboard/taskboard.html",data:{pageTitle:"Taskboard"},controller:"TaskboardController",controllerAs:"vm"}),e.otherwise("/index/main")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(a)}(),angular.module("inspinia").controller("TaskboardController",["dataservice","taskDueStatusClassService","logger","$stateParams",function(a,e,t,s){function i(){return n(s.bcp,s.filterText).then(function(){t.info("Activated Taskboard View")})}function n(e,t){return a.getAvengers(e,t).then(function(a){return l.todoList=a.taskInfos,l.inProgressList=a.taskInfos,l.todoList})}var l=this;l.userName="Example user",l.helloText="Taskboard",l.descriptionText="Taskboard",l.taskDueStatusClass=e.retrieveTaskDueStatusClass,l.sortableOptions={connectWith:".connectList"},i()}]),angular.module("inspinia").controller("MainController",function(){var a=this;a.userName="Example user",a.helloText="Welcome in INSPINIA Gulp SeedProject",a.descriptionText="It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects."}),function(){"use strict";function a(a,e){function t(t,s,i){e.error(t,i),a.error("Error: "+t,s)}function s(t,s,i){e.info(t,i),a.info("Info: "+t,s)}function i(t,s,i){e.success(t,i),a.info("Success: "+t,s)}function n(t,s,i){e.warning(t,i),a.warn("Warning: "+t,s)}var l={showToasts:!0,error:t,info:s,success:i,warning:n,log:a.log};return l}angular.module("inspinia").factory("logger",a),a.$inject=["$log","toastr"]}(),function(){"use strict";function a(a){function e(e){return function(t){a.error(e,t)}}var t={catcher:e};return t}a.$inject=["logger"],angular.module("inspinia").factory("exception",a)}(),function(){"use strict";function a(){this.config={appErrorPrefix:void 0},this.configure=function(a){this.config.appErrorPrefix=a},this.$get=function(){return{config:this.config}}}function e(a){a.decorator("$exceptionHandler",t)}function t(a,e,t){return function(s,i){var n=e.config.appErrorPrefix||"",l={exception:s,cause:i};s.message=n+s.message,a(s,i),t.error(s.message,l)}}e.$inject=["$provide"],t.$inject=["$delegate","exceptionHandler","logger"],angular.module("inspinia").provider("exceptionHandler",a).config(e)}(),function(){"use strict";function a(a,e){a.state("dashboards",{"abstract":!0,url:"/dashboards",templateUrl:"app/components/common/content.html"}).state("dashboards.home",{url:"/home",templateUrl:"app/dashboards/home.html",data:{pageTitle:"Dashboard"},controller:"DashboardController",controllerAs:"vm"}),e.otherwise("/dashboards/home")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(a)}(),angular.module("inspinia").controller("DashboardController",["dataservice","logger",function(a,e){var t=this;t.userName="Example user",t.helloText="Dashboard",t.descriptionText="Dashboard"}]),angular.module("inspinia").controller("NavigationController",["dataservice","logger","$stateParams",function(a,e,t){var s=this;s.userName="Example user",s.helloText="Taskboard",s.descriptionText="Taskboard",s.businessControlProfileList=[{id:1,name:"bcp1"},{id:2,name:"bcp2"},{id:3,name:"bcp3"},{id:4,name:"bcp4"}],s.filters=[{id:1,name:"No Filter"},{id:2,name:"Unassigned"},{id:3,name:"Overdue"}],s.bcpNavClass=function(a){return a.id==t.bcp?"active":""},s.filterNavClass=function(a){return a.id==t.filterText?"active":""}}]),function(){"use strict";function a(a,e,t,s,i,n){function l(i,l){function o(a,e,t,s){return a.data}t.defer();return a.get(n.baseURL+"WorkingSets/"+i+"/Tasks?filterId="+l).then(o)["catch"](function(a){s.catcher("XHR Failed for getAvengers")(a),e.url("/")})}var o={getAvengers:l};return o}function e(a){var e=null;switch(a.dueStatus.status){case"Overdue":e="danger-element";break;case"On Time":e="success-element";break;case"In Jeopardy":e="warning-element"}return e}a.$inject=["$http","$location","$q","exception","logger","config"],angular.module("inspinia").factory("dataservice",a).value("taskDueStatusClassService",{retrieveTaskDueStatusClass:e})}(),function(){"use strict";angular.module("inspinia").constant("toastr",toastr).constant("moment",moment).constant("config",{baseURL:"http://localhost:3706/api/",authURL:"http://ec2-35-164-78-65.us-west-2.compute.amazonaws.com/MagpieIdentity/",oldTroutBaseURL:"http://localhost:9092/Landing/index?n="})}(),angular.element(document).ready(function(a){function e(){var a=angular.element("body > #wrapper").height()-61;angular.element(".sidebar-panel").css("min-height",a+"px");var e=angular.element("nav.navbar-default").height(),t=angular.element("#page-wrapper").height();e>t&&angular.element("#page-wrapper").css("min-height",e+"px"),t>e&&angular.element("#page-wrapper").css("min-height",angular.element(window).height()+"px"),angular.element("body").hasClass("fixed-nav")&&(e>t?angular.element("#page-wrapper").css("min-height",e+"px"):angular.element("#page-wrapper").css("min-height",angular.element(window).height()-60+"px"))}angular.element(window).bind("load resize scroll",function(){angular.element("body").hasClass("body-small")||e()}),angular.element(window).scroll(function(){angular.element(window).scrollTop()>0&&!angular.element("body").hasClass("fixed-nav")?angular.element("#right-sidebar").addClass("sidebar-top"):angular.element("#right-sidebar").removeClass("sidebar-top")}),a(function(){e()}),angular.element(window).bind("load resize",function(){angular.element(document).width()<769?angular.element("body").addClass("body-small"):angular.element("body").removeClass("body-small")})}),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("inspinia").run(a)}(),function(){"use strict";function a(a,e){a.state("index",{"abstract":!0,url:"/index",templateUrl:"app/components/common/content.html"}).state("index.main",{url:"/main",templateUrl:"app/main/main.html",data:{pageTitle:"Example view"}}).state("index.minor",{url:"/minor",templateUrl:"app/minor/minor.html",data:{pageTitle:"Example view"}}),e.otherwise("/index/main")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(a)}(),angular.module("inspinia").directive("sideNavigation",["$timeout",function(a){return{restrict:"A",link:function(e,t){e.$watch("authentication.user",function(){a(function(){t.metisMenu()})});var s=angular.element('#side-menu a:not([href$="\\#"])');if(s.click(function(){angular.element(window).width()<769&&angular.element("body").toggleClass("mini-navbar")}),angular.element("body").hasClass("fixed-sidebar")){var i=t.parent();i.slimScroll({height:"100%",railOpacity:.9})}}}}]).directive("minimalizaSidebar",["$timeout",function(a){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:["$scope",function(e){e.minimalize=function(){angular.element("body").toggleClass("mini-navbar"),!angular.element("body").hasClass("mini-navbar")||angular.element("body").hasClass("body-small")?(angular.element("#side-menu").hide(),a(function(){angular.element("#side-menu").fadeIn(400)},200)):angular.element("#side-menu").removeAttr("style")}}]}}]),angular.module("inspinia").run(["$templateCache",function(a){a.put("app/dashboards/home.html",'<div class="row wrapper border-bottom white-bg page-heading"><div class="col-lg-12"><h2>Dashboard</h2><ol class="breadcrumb"><li>Home</li><li>Dashboards</li><li class="active"><strong>Dashboard</strong></li></ol></div></div>'),a.put("app/main/main.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>{{main.helloText}}</h1><small>{{main.descriptionText}} <i class="glyphicon glyphicon-pencil"></i></small></div></div></div></div>'),a.put("app/taskboard/taskboard.html",'<div class="row wrapper border-bottom white-bg page-heading"><div class="col-lg-12"><h2>Task Board</h2><ol class="breadcrumb"><li>Home</li><li>{{vm.descriptionText}}</li><li class="active"><strong>{{vm.descriptionText}}</strong></li></ol></div></div><div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>New</h3><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><div class="input-group"><input type="text" placeholder="Add new task." class="input input-sm form-control" ng-model="taskTitle"> <span class="input-group-btn"><button type="button" class="btn btn-sm btn-white" ng-click="openTaskDetailsDialog(null)"><i class="fa fa-plus"></i> Add task</button></span></div><ul ui-sortable="vm.sortableOptions" class="sortable-list connectList agile-list" ng-model="vm.todoList"><li ng-class="vm.taskDueStatusClass(task)" ng-repeat="task in vm.todoList"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>Active</h3><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><ul ui-sortable="vm.sortableOptions" class="sortable-list connectList agile-list" ng-model="vm.inProgressList"><li ng-class="taskDueStatusClass(task)" ng-repeat="task in vm.inProgressList"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>Completed</h3><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><ul ui-sortable="sortableOptions" class="sortable-list connectList agile-list" ng-model="completedList"><li ng-class="taskDueStatusClass(task)" enablestatus(task)="" ng-repeat="task in completedList | freeFormat : taskOrCode | dateRange:daterange.startDate :daterange.endDate | responsibleUser : responsibleUserList.selected | controlCatalogue : controlCatalogue | filter : { title: filterText.name || task, dueStatus : { id : dueStatus }}"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title | cut:true:25:\' ...\'}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div></div></div>'),a.put("app/minor/minor.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>'),a.put("app/components/common/content.html",'<div id="wrapper"><div ng-include="\'app/components/common/navigation.html\'"></div><div id="page-wrapper" class="gray-bg {{$state.current.name}}"><div ng-include="\'app/components/common/topnavbar.html\'"></div><div ui-view=""></div><div ng-include="\'app/components/common/footer.html\'"></div></div></div>'),a.put("app/components/common/footer.html",'<div class="footer"><div class="pull-right">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2015-2016</div></div><div></div>'),a.put("app/components/common/ibox_tools.html",'<div class="ibox-tools" uib-dropdown=""><a ng-click="showhide()"><i class="fa fa-chevron-up"></i></a> <a uib-dropdown-toggle="" href=""><i class="fa fa-wrench"></i></a><ul uib-dropdown-menu=""><li><a href="">Config option 1</a></li><li><a href="">Config option 2</a></li></ul><a ng-click="closebox()"><i class="fa fa-times"></i></a></div>'),a.put("app/components/common/navigation.html",'<nav class="navbar-default navbar-static-side" role="navigation"><div class="sidebar-collapse"><ul side-navigation="" class="nav metismenu" id="side-menu"><li class="nav-header"><div class="profile-element" uib-dropdown=""><a uib-dropdown-toggle="" href=""><span class="clear"><span class="block m-t-xs"><strong class="font-bold">{{main.userName}}</strong></span> <span class="text-muted text-xs block">Example menu<b class="caret"></b></span></span></a><ul uib-dropdown-menu="" class="animated flipInX m-t-xs"><li><a href="">Logout</a></li></ul></div><div class="logo-element">Altius Systems</div></li><li ng-class="{active: $state.includes(\'dashboards\')}"><a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span></a><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'dashboards\')}"><li ui-sref-active="active"><a ui-sref="dashboards.home">Profiles<span class="label label-primary pull-right">NEW</span></a></li></ul></li><li ui-sref-active="active"><a ui-sref="index.main"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Dashboard</span></a></li><li ng-class="{active: $state.includes(\'index.taskboard\')}" ng-controller="NavigationController as vm"><a href="#"><i class="fa fa-tasks"></i> <span class="nav-label">Taskboard</span><span class="fa arrow"></span></a><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="vm.bcpNavClass(bcp)" ng-repeat="bcp in vm.businessControlProfileList"><a ui-sref="index.taskboard({filterText: 1, bcp: bcp.id})">{{bcp.name}}</a></li></ul><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="{active: $state.includes(\'index.taskboard\')}"><a href="#"><i class="fa fa-filter"></i> <span class="nav-label-second-level">Filters</span><span class="fa arrow"></span></a><ul class="nav nav-third-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="vm.filterNavClass(filter)" ng-repeat="filter in vm.filters"><a ui-sref="index.taskboard({filterText: filter.id})">{{filter.name}}</a></li></ul></li></ul></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-sitemap"></i> <span class="nav-label">Operations</span></a></li></ul></div></nav>'),a.put("app/components/common/topnavbar.html",'<div class="row border-bottom"><nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0"><div class="navbar-header"><span minimaliza-sidebar=""></span><form role="search" class="navbar-form-custom" method="post" action=""><div class="form-group"><input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search"></div></form></div><ul class="nav navbar-top-links navbar-right"><li><a href=""><i class="fa fa-sign-out"></i> Log out</a></li></ul></nav></div>')}]);
//# sourceMappingURL=../maps/scripts/app-c6a0c2db00.js.map
