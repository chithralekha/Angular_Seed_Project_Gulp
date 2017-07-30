!function(){"use strict";angular.module("inspinia",["ngCookies","ui.router","ui.bootstrap","ui.sortable","gridshore.c3js.chart"])}(),function(){"use strict";function e(e,t){e.state("index.taskboard",{url:"/taskboard/:filterText?bcp",templateUrl:"app/taskboard/taskboard.html",data:{pageTitle:"Taskboard"},controller:"TaskboardController",controllerAs:"vm"}),t.otherwise("/index/main")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").controller("TaskboardController",["dataservice","taskDueStatusClassService","logger","$stateParams","$state",function(e,t,a,i,n){function s(){return o(i.bcp,i.filterText).then(function(){a.info("Activated Taskboard View")})}function o(t,a){return e.getTasksSummary(t,a).then(function(e){return l.todoList=e.todoList,l.inProgressList=e.inProgressList,l.completedList=e.completedList,l.todoList})}var l=this;l.userName="Example user",l.helloText="Taskboard",l.descriptionText="Taskboard",l.taskDueStatusClass=t.retrieveTaskDueStatusClass,l.sortableOptions={connectWith:".connectList",stop:function(e,t){var a=(t.item.sortable.index,t.item.sortable.dropindex),i={},n=t.item.sortable.droptarget.attr("ng-model");console.log("Destination List = "+n),"vm.todoList"===n&&(i=l.todoList[a],console.log("item in todoList"+i)),"vm.inProgressList"===n&&(i=l.inProgressList[a],console.log("item in inProgressList"+i.id)),"vm.completedList"===n&&(i=l.completedList[a],console.log("item in completedList"+i))}},s(),l.reload=function(){n.reload()}}]),angular.module("inspinia").controller("MainController",["AuthFactory",function(e){var t=this;t.userName="",t.helloText="Welcome in INSPINIA Gulp SeedProject",t.descriptionText="It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects."}]),function(){"use strict";function e(e,t){function a(a,i,n){t.error(a,n),e.error("Error: "+a,i)}function i(a,i,n){t.info(a,n),e.info("Info: "+a,i)}function n(a,i,n){t.success(a,n),e.info("Success: "+a,i)}function s(a,i,n){t.warning(a,n),e.warn("Warning: "+a,i)}var o={showToasts:!0,error:a,info:i,success:n,warning:s,log:e.log};return o}angular.module("inspinia").factory("logger",e),e.$inject=["$log","toastr"]}(),function(){"use strict";function e(e,t){e.state("login",{url:"/login",templateUrl:"app/login/login.html",data:{pageTitle:"Login",specialClass:"login-bg"},controller:"LoginController",controllerAs:"vm"}),t.otherwise("/login")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").controller("LoginController",["dataservice","logger","$state","AuthFactory","$localStorage","userService",function(e,t,a,i,n,s){var o=this;o.descriptionText="Login",o.userName="",o.password="",o.login=function(){i.authenticate(o.username,o.password).then(function(e){s.getUserProfile().then(function(e){a.go("index.dashboards")})})},o.logout=function(){i.logout()}}]),function(){"use strict";function e(e){function t(t){return function(a){e.error(t,a)}}var a={catcher:t};return a}e.$inject=["logger"],angular.module("inspinia").factory("exception",e)}(),function(){"use strict";function e(){this.config={appErrorPrefix:void 0},this.configure=function(e){this.config.appErrorPrefix=e},this.$get=function(){return{config:this.config}}}function t(e){e.decorator("$exceptionHandler",a)}function a(e,t,a){return function(i,n){var s=t.config.appErrorPrefix||"",o={exception:i,cause:n};i.message=s+i.message,e(i,n),a.error(i.message,o)}}t.$inject=["$provide"],a.$inject=["$delegate","exceptionHandler","logger"],angular.module("inspinia").provider("exceptionHandler",e).config(t)}(),function(){"use strict";function e(e,t){e.state("index.dashboards",{url:"/home",templateUrl:"app/dashboards/home.html",data:{pageTitle:"Dashboard"},controller:"DashboardController",controllerAs:"vm"}),t.otherwise("/index/main")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").controller("DashboardController",["dataservice","logger","$filter",function(e,t,a){function i(){return n().then(function(){t.info("Activated Dashboard View")})}function n(){return e.getAllWorkingSets().then(function(e){return s.businessControlProfileList=e,s.inProgressList=e.inProgressList,s.completedList=e.completedList,s.todoList})}var s=this;s.userName="Example user",s.helloText="Dashboard",s.descriptionText="Dashboard",s.formatValue=function(e,t){var a=Math.abs(e);return a},i()}]),angular.module("inspinia").controller("NavigationController",["dataservice","logger","$stateParams","AuthFactory","$localStorage","USER_ROLES","userService",function(e,t,a,i,n,s,o){function l(e){g.businessControlProfileList=e}function r(e){console.log("Promise Notification: "+e)}function c(e){console.log("Error Message: "+e)}function u(){console.log("getAllWorkingSets has completed")}function d(e){g.filters=e}function p(e){console.log("Promise Notification: "+e)}function c(e){console.log("Error Message: "+e)}function m(){console.log("getAllFilters has completed")}var g=this,v=n.getObject("Token","{}");g.userName=v.username,g.userRoles=s,g.userData=n.getObject("Profile","{}"),g.isAuthorized=function(e){var t=!1;return angular.isArray(e)||(e=[e]),angular.forEach(g.userData.data.roles,function(a){-1!==e.indexOf(a)&&(t=!0)}),t},e.getAllWorkingSets().then(l,null,r)["catch"](c)["finally"](u),e.getAllFilters().then(d,null,p)["catch"](c)["finally"](m),g.bcpNavClass=function(e){return e.id==a.bcp?"active":""},g.filterNavClass=function(e){var t=e.filterId==a.filterText?"active":"";return t}}]),function(){"use strict";function e(e,t,a,i,n,s){function o(e,t){var i=a.defer(),n=l(e,t);return a.when(n).then(function(e){var t=e.taskInfos,a=[],n=[],s=[];t.forEach(function(e,t,i){1===e.taskState.id?a.push(e):2===e.taskState.id?n.push(e):3===e.taskState.id&&s.push(e)});var o={todoList:a,inProgressList:n,completedList:s};i.resolve(o)}),i.promise}function l(t,a){return e({method:"GET",url:s.baseURL+"workingSets/"+t+"/TaskInfos?filterId="+a}).then(r)["catch"](c)}function r(e){return e.data}function c(e){return a.reject("Error retrieving Tasks. (HTTP status: "+e.status+")")}function u(){return e({method:"GET",url:s.baseURL+"WorkingSets/"}).then(r)["catch"](d)}function d(e){return a.reject("Error retrieving WorkingSets. (HTTP status: "+e.status+")")}function p(){return e({method:"GET",url:s.baseURL+"Filters/"}).then(r)["catch"](m)}function m(e){return a.reject("Error retrieving Filters. (HTTP status: "+e.status+")")}var g={getTasksSummary:o,getAllTasks:l,getAllWorkingSets:u,getAllFilters:p};return g}function t(e){return{store:function(t,a){e.localStorage[t]=a},get:function(t,a){return e.localStorage[t]||a},remove:function(t){e.localStorage.removeItem(t)},storeObject:function(t,a){e.localStorage[t]=JSON.stringify(a)},getObject:function(t,a){return JSON.parse(e.localStorage[t]||a)}}}function a(e,t){return{put:function(a,i){"localhost"===t.host()?e.put(a,i,{path:"/"}):e.put(a,i,{domain:t.host(),path:"/"})},get:function(t,a){return e.get(t)||a},remove:function(t){e.remove(t)}}}function i(e,t,a,i,n,s,o,l,r){function c(e,a){var n=i.defer(),s=$.param({grant_type:"password",username:e,password:a}),l={headers:{"Content-Type":"application/x-www-form-urlencoded"}},r=t.post(o.authURL+"oauth/token",s,l);return i.when(r).then(function(t){w.isAuthenticated="true",w.username=e,w.bearerToken=t.data.access_token,w.expirationDate=new Date(t[".expires"]),n.resolve(w),v(w)})["catch"](f),n.promise}function u(){d(),p()}function d(){w.isAuthenticated="false",w.username="",l.remove(b)}function p(){l.remove(k)}function m(){return w.username}function g(){return w}function v(e){l.storeObject(b,e),r.remove("AccessToken"),r.put("AccessToken",e.bearerToken)}function f(e){return i.reject("Error retrieving the AuthFac Service. (HTTP status: "+e.status+")")}var h={},b="Token",k="Profile",w={isAuthenticated:!1,username:"",bearerToken:"",expirationDate:null},h={authenticate:c,logout:u,getUserName:m,getUserData:g};return h}function n(e,t,a,i,n,s,o,l){function r(){var t=a.defer(),i=e.get(s.authURL+"user/profile",{headers:{Authorization:"Bearer "+o.get("AccessToken")}});return a.when(i).then(function(e){d=e,t.resolve(d),c(d)})["catch"](u),t.promise}function c(e){l.storeObject(p,e)}function u(e){return a.reject("Error retrieving User Profile. (HTTP status: "+e.status+")")}var d={},p="Profile",m={getUserProfile:r};return m}function s(e){var t=null;switch(e.dueStatus.status){case"Overdue":t="danger-element";break;case"On Time":t="success-element";break;case"In Jeopardy":t="warning-element"}return t}e.$inject=["$http","$location","$q","exception","logger","config"],i.$inject=["$rootScope","$http","$location","$q","exception","logger","config","$localStorage","$cookieFactory"],t.$inject=["$window"],n.$inject=["$http","$location","$q","exception","logger","config","$cookies","$localStorage"],a.$inject=["$cookies","$location"],angular.module("inspinia").factory("dataservice",e).factory("AuthFactory",i).factory("$localStorage",t).factory("userService",n).factory("$cookieFactory",a).value("taskDueStatusClassService",{retrieveTaskDueStatusClass:s})}(),function(){"use strict";angular.module("inspinia").constant("toastr",toastr).constant("moment",moment).constant("config",{baseURL:"http://ec2-52-33-130-108.us-west-2.compute.amazonaws.com:8081/MagpieAPI/api/",authURL:"http://ec2-52-33-130-108.us-west-2.compute.amazonaws.com:8081/MagpieIdentity/",oldTroutBaseURL:"http://localhost:9092/Landing/index?n="}).constant("USER_ROLES",{all:"*",System:"System",NotificationService:"NotificationService",Debugger:"Debugger",Administrator:"Administrator",AccountManager:"AccountManager",UserManager:"UserManager",RaciTeamManager:"RaciTeamManager",BusinessProcessManager:"BusinessProcessManager",QlikUser:"QlikUser",TaskBoardUser:"TaskBoardUser",TaskBoardUserReadOnly:"TaskBoardUserReadOnly",ProgramDesigner:"ProgramDesigner",LogViewer:"LogViewer",DocumentRepositoryUser:"DocumentRepositoryUser",DocumentRepositoryUserReadOnly:"DocumentRepositoryUserReadOnly",IncidentResponseUser:"IncidentResponseUser",PolicyGeneratorUser:"PolicyGeneratorUser"})}(),angular.element(document).ready(function(e){function t(){var e=angular.element("body > #wrapper").height()-61;angular.element(".sidebar-panel").css("min-height",e+"px");var t=angular.element("nav.navbar-default").height(),a=angular.element("#page-wrapper").height();t>a&&angular.element("#page-wrapper").css("min-height",t+"px"),a>t&&angular.element("#page-wrapper").css("min-height",angular.element(window).height()+"px"),angular.element("body").hasClass("fixed-nav")&&(t>a?angular.element("#page-wrapper").css("min-height",t+"px"):angular.element("#page-wrapper").css("min-height",angular.element(window).height()-60+"px"))}angular.element(window).bind("load resize scroll",function(){angular.element("body").hasClass("body-small")||t()}),angular.element(window).scroll(function(){angular.element(window).scrollTop()>0&&!angular.element("body").hasClass("fixed-nav")?angular.element("#right-sidebar").addClass("sidebar-top"):angular.element("#right-sidebar").removeClass("sidebar-top")}),e(function(){t()}),angular.element(window).bind("load resize",function(){angular.element(document).width()<769?angular.element("body").addClass("body-small"):angular.element("body").removeClass("body-small")})}),function(){"use strict";function e(e,t,a){t.$state=a,e.debug("runBlock end")}e.$inject=["$log","$rootScope","$state"],angular.module("inspinia").run(e)}(),function(){"use strict";function e(e,t){e.state("index",{"abstract":!0,url:"/index",templateUrl:"app/components/common/content.html"}).state("index.main",{url:"/main",templateUrl:"app/main/main.html",data:{pageTitle:"Example view"}}).state("index.minor",{url:"/minor",templateUrl:"app/minor/minor.html",data:{pageTitle:"Example view"}}),t.otherwise("/login")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").directive("sideNavigation",["$timeout",function(e){return{restrict:"A",link:function(t,a){t.$watch("authentication.user",function(){e(function(){a.metisMenu()})});var i=angular.element('#side-menu a:not([href$="\\#"])');if(i.click(function(){angular.element(window).width()<769&&angular.element("body").toggleClass("mini-navbar")}),angular.element("body").hasClass("fixed-sidebar")){var n=a.parent();n.slimScroll({height:"100%",railOpacity:.9})}}}}]).directive("minimalizaSidebar",["$timeout",function(e){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:["$scope",function(t){t.minimalize=function(){angular.element("body").toggleClass("mini-navbar"),!angular.element("body").hasClass("mini-navbar")||angular.element("body").hasClass("body-small")?(angular.element("#side-menu").hide(),e(function(){angular.element("#side-menu").fadeIn(400)},200)):angular.element("#side-menu").removeAttr("style")}}]}}]).directive("pageTitle",["$rootScope","$timeout",function(e,t){return{link:function(a,i){var n=function(e,a,n,s,o){var l="Altius";a.data&&a.data.pageTitle&&(l="Altius | "+a.data.pageTitle),t(function(){i.text(l)})};e.$on("$stateChangeStart",n)}}}]),angular.module("inspinia").run(["$templateCache",function(e){e.put("app/dashboards/home.html",'<div class="row wrapper border-bottom white-bg page-heading"><div class="col-lg-12"><h2>Dashboard</h2><ol class="breadcrumb"><li>Home</li><li>Dashboards</li><li class="active"><strong>Dashboard</strong></li></ol></div></div><div class="wrapper wrapper-content animated fadeInRight"><div class="row" style="margin-top:20px; margin-left:5px;" ng-repeat="item in vm.businessControlProfileList"><div class="ibox float-e-margins col-lg-8"><div class="ibox-title"><span class="label label-primary pull-right" ng-click="complianceScore(item)"></span><h5>{{item.name}}</h5></div><div class="ibox-content"><div class="row"><div class="col-lg-6" ng-click="showClick(item)"><c3chart bindto-id="gauge-plot{{item.id}}-chart"><chart-column column-id="{{item.name}}" column-color="{{item.color}}" column-values="{{item.workingSetCompliance}}" column-type="gauge"><chart-gauge min="0%" max="100%" units="Score" expand="true" label-format-function="vm.formatValue(item.workingSetCompliance,0)"><chart-events on-click-data="showClick(item)"></chart-events></chart-gauge></chart-column></c3chart></div><div class="col-lg-6"><div class="ibox float-e-margins"><div class="ibox-title"><span class="label label-primary pull-right hidden" ng-click="complianceScore(item)">?</span><h5>Control Catalogues</h5><span class="pull-right"><h5>Compliance Percentage</h5></span></div><div class="ibox-content"><div><ul class="list-group clear-list m-t" ng-repeat="cs in item.workingSetTemplate.controlSets | limitTo:4" ng-init="outerIndex = $index"><li class="list-group-item"><span class="label label-success hidden">{{outerIndex + 1}}</span> <span class="pull-right" ng-class="controlSetComplianceClass(cs)">{{cs.controlSetCompliance}} %</span><span class="label label-success"></span>{{cs.title }}</li></ul><ul class="list-group clear-list m-t"><li class="list-group-item"><span class="label label-primary pull-right"></span></li></ul></div></div></div><a ui-sref="dashboards.dashboardSingleWorkingSet({obj: item})"><span class="label label-primary pull-right">More....</span></a></div><div class="col-lg-3 hidden"><div class="ibox float-e-margins"><div class="ibox-title"><span class="label label-primary pull-right" ng-click="complianceScore(item)"></span><h5>Users</h5></div><div class="ibox-content"><ul class="list-group clear-list m-t" ng-repeat="user in item.users | limitTo:4"><li class="list-group-item clear-list"><span class="label label-success"></span>{{user.userName}}</li></ul><ul class="list-group clear-list m-t"><li class="list-group-item"><span class="label label-primary pull-right"></span></li></ul></div></div></div></div></div></div></div></div>'),e.put("app/login/login.html",'<div class="middle-box text-center loginscreen animated fadeInDown"><div><form class="m-t" role="form" id="login-form" ng-submit="vm.login();"><div class="row" ng-repeat="error in errors"><div class="alert alert-danger">{{error}}</div></div><div class="form-group"><input type="text" class="form-control" placeholder="Username" required="" ng-model="vm.username"></div><div class="form-group"><input type="password" autocomplete="off" class="form-control" placeholder="Password" required="" ng-model="vm.password"></div><button id="login-form-submit-button" type="submit" class="btn btn-primary block full-width m-b">Login</button></form></div></div>'),e.put("app/main/main.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>{{main.helloText}}</h1><small>{{main.descriptionText}} <i class="glyphicon glyphicon-pencil"></i></small></div></div></div></div>'),e.put("app/minor/minor.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>'),e.put("app/taskboard/taskboard.html",'<div class="row wrapper border-bottom white-bg page-heading"><div class="col-lg-12"><h2>Task Board</h2><ol class="breadcrumb"><li>Home</li><li>{{vm.descriptionText}}</li><li class="active"><strong>{{vm.descriptionText}}</strong></li></ol></div></div><div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>New</h3><button ng-click="vm.reload()" class="fa fa-refresh hidden">Reload</button><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><div class="input-group"><input type="text" placeholder="Add new task." class="input input-sm form-control" ng-model="taskTitle"> <span class="input-group-btn"><button type="button" class="btn btn-sm btn-white" ng-click="openTaskDetailsDialog(null)"><i class="fa fa-plus"></i> Add task</button></span></div><ul ui-sortable="vm.sortableOptions" class="sortable-list connectList agile-list" ng-model="vm.todoList"><li ng-class="vm.taskDueStatusClass(task)" ng-repeat="task in vm.todoList"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>Active</h3><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><ul ui-sortable="vm.sortableOptions" class="sortable-list connectList agile-list" ng-model="vm.inProgressList"><li ng-class="vm.taskDueStatusClass(task)" ng-repeat="task in vm.inProgressList"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>Completed</h3><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><ul ui-sortable="sortableOptions" class="sortable-list connectList agile-list" ng-model="completedList"><li ng-class="vm.taskDueStatusClass(task)" enablestatus(task)="" ng-repeat="task in completedList | freeFormat : taskOrCode | dateRange:daterange.startDate :daterange.endDate | responsibleUser : responsibleUserList.selected | controlCatalogue : controlCatalogue | filter : { title: filterText.name || task, dueStatus : { id : dueStatus }}"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title | cut:true:25:\' ...\'}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div></div></div>'),e.put("app/components/common/content.html",'<div id="wrapper"><div ng-include="\'app/components/common/navigation.html\'"></div><div id="page-wrapper" class="gray-bg {{$state.current.name}}"><div ng-include="\'app/components/common/topnavbar.html\'"></div><div ui-view=""></div><div ng-include="\'app/components/common/footer.html\'"></div></div></div>'),e.put("app/components/common/footer.html",'<div class="footer"><div class="pull-right">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2015-2016</div></div><div></div>'),e.put("app/components/common/ibox_tools.html",'<div class="ibox-tools" uib-dropdown=""><a ng-click="showhide()"><i class="fa fa-chevron-up"></i></a> <a uib-dropdown-toggle="" href=""><i class="fa fa-wrench"></i></a><ul uib-dropdown-menu=""><li><a href="">Config option 1</a></li><li><a href="">Config option 2</a></li></ul><a ng-click="closebox()"><i class="fa fa-times"></i></a></div>'),e.put("app/components/common/navigation.html",'<nav class="navbar-default navbar-static-side" role="navigation"><div class="sidebar-collapse" ng-controller="NavigationController as vm"><ul side-navigation="" class="nav metismenu" id="side-menu"><li class="nav-header"><div class="profile-element" uib-dropdown=""><a uib-dropdown-toggle="" href=""><i class="fa fa-user" aria-hidden="true"></i> <span class="clear"><span class="block m-t-xs"><strong class="font-bold">{{vm.userName}}</strong></span></span></a><ul uib-dropdown-menu="" class="animated flipInX m-t-xs"><li><a href="">Logout</a></li></ul></div><div class="logo-element">Altius Systems</div></li><li ng-class="{active: $state.includes(\'index.dashboards\')}"><a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span></a><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'dashboards\')}"><li ui-sref-active="active" ng-show="vm.isAuthorized([vm.userRoles.System, vm.userRoles.Debugger, vm.userRoles.Administrator, vm.userRoles.QlikUser])"><a ui-sref="index.dashboards">Profiles<span class="label label-primary pull-right">NEW</span></a></li></ul></li><li ng-class="{active: $state.includes(\'index.taskboard\')}"><a href="#"><i class="fa fa-tasks"></i> <span class="nav-label">Taskboard</span><span class="fa arrow"></span></a><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="vm.bcpNavClass(bcp)" ng-repeat="bcp in vm.businessControlProfileList"><a ui-sref="index.taskboard({filterText: 1, bcp: bcp.id})">{{bcp.name}}</a></li></ul><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="{active: $state.includes(\'index\')}"><a href="#"><i class="fa fa-filter"></i> <span class="nav-label-second-level">Filters</span><span class="fa arrow"></span></a><ul class="nav nav-third-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="vm.filterNavClass(filter)" ng-repeat="filter in vm.filters"><a ui-sref="index.taskboard({filterText: filter.filterId})">{{filter.filterName}}</a></li></ul></li></ul></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-sitemap"></i> <span class="nav-label">Operations</span></a></li></ul></div></nav>'),e.put("app/components/common/topnavbar.html",'<div class="row border-bottom"><nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0"><div class="navbar-header"><span minimaliza-sidebar=""></span><form role="search" class="navbar-form-custom" method="post" action=""><div class="form-group"><input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search"></div></form></div><ul class="nav navbar-top-links navbar-right" ng-controller="LoginController as vm"><li><a ui-sref="login" ng-click="vm.logout()"><i class="fa fa-sign-out"></i> Log out</a></li></ul></nav></div>')}]);
//# sourceMappingURL=../maps/scripts/app-43f5b69023.js.map