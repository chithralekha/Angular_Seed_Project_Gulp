!function(){"use strict";angular.module("inspinia",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","ui.sortable","gridshore.c3js.chart"])}(),function(){"use strict";function e(e,a){e.state("index.taskboard",{url:"/taskboard/:filterText?bcp",templateUrl:"app/taskboard/taskboard.html",data:{pageTitle:"Taskboard"},controller:"TaskboardController",controllerAs:"vm"}),a.otherwise("/index/main")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").controller("TaskboardController",["dataservice","taskDueStatusClassService","logger","$stateParams","$state","$uibModal","$scope",function(e,a,t,s,i,o,l){function n(){return r(s.bcp,s.filterText).then(function(){t.info("Activated Taskboard View")})}function r(a,t){return e.getTasksSummary(a,t).then(function(e){return c.todoList=e.todoList,c.inProgressList=e.inProgressList,c.completedList=e.completedList,c.todoList})}var c=this;c.userName="Example user",c.helloText="Taskboard",c.descriptionText="Taskboard",c.taskDueStatusClass=a.retrieveTaskDueStatusClass,l.$on("task:updated",function(e,a){alert("From Parent  .."+a.id+"Task State="+a.taskState.name),"New"===a.taskState.name&&angular.forEach(c.todoList,function(e){e.id===a.id&&(e.title=a.title)})}),c.sortableOptions={connectWith:".connectList",stop:function(e,a){var t=(a.item.sortable.index,a.item.sortable.dropindex),s={},i=a.item.sortable.droptarget.attr("ng-model");console.log("Destination List = "+i),"vm.todoList"===i&&(s=c.todoList[t],console.log("item in todoList"+s)),"vm.inProgressList"===i&&(s=c.inProgressList[t],console.log("item in inProgressList"+s.id)),"vm.completedList"===i&&(s=c.completedList[t],console.log("item in completedList"+s))}},n(),c.reload=function(){i.reload()}}]),angular.module("inspinia").controller("TaskAddEditModalController",["$uibModalInstance","items","dataservice","taskDueStatusClassService","logger","$stateParams","$state","$scope","$rootScope",function(e,a,t,s,i,o,l,n,r){var c=this;c.userName="Example user",c.helloText="Taskboard",c.descriptionText="Taskboard",c.content=a,n.$on("task:updated",function(e,a){}),c.confirm=function(){c.content.title="Policy Control 1 Task2",t.saveTask(c.content),r.$broadcast("task:updated",c.content),e.close()},c.cancel=e.dismiss}]),angular.module("inspinia").controller("MainController",["AuthFactory",function(e){var a=this;a.userName="",a.helloText="Welcome in INSPINIA Gulp SeedProject",a.descriptionText="It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects."}]),function(){"use strict";function e(e,a){e.state("login",{url:"/login",templateUrl:"app/login/login.html",data:{pageTitle:"Login",specialClass:"login-bg"},controller:"LoginController",controllerAs:"vm"}),a.otherwise("/login")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").controller("LoginController",["dataservice","logger","$state","AuthFactory","$localStorage","userService",function(e,a,t,s,i,o){var l=this;l.descriptionText="Login",l.userName="",l.password="",l.login=function(){s.authenticate(l.username,l.password).then(function(e){o.getUserProfile().then(function(e){t.go("index.dashboards")})})},l.logout=function(){s.logout()}}]),function(){"use strict";function e(e,a){function t(t,s,i){a.error(t,i),e.error("Error: "+t,s)}function s(t,s,i){a.info(t,i),e.info("Info: "+t,s)}function i(t,s,i){a.success(t,i),e.info("Success: "+t,s)}function o(t,s,i){a.warning(t,i),e.warn("Warning: "+t,s)}var l={showToasts:!0,error:t,info:s,success:i,warning:o,log:e.log};return l}angular.module("inspinia").factory("logger",e),e.$inject=["$log","toastr"]}(),function(){"use strict";function e(e){function a(a){return function(t){e.error(a,t)}}var t={catcher:a};return t}e.$inject=["logger"],angular.module("inspinia").factory("exception",e)}(),function(){"use strict";function e(){this.config={appErrorPrefix:void 0},this.configure=function(e){this.config.appErrorPrefix=e},this.$get=function(){return{config:this.config}}}function a(e){e.decorator("$exceptionHandler",t)}function t(e,a,t){return function(s,i){var o=a.config.appErrorPrefix||"",l={exception:s,cause:i};s.message=o+s.message,e(s,i),t.error(s.message,l)}}a.$inject=["$provide"],t.$inject=["$delegate","exceptionHandler","logger"],angular.module("inspinia").provider("exceptionHandler",e).config(a)}(),function(){"use strict";function e(e,a){e.state("index.dashboards",{url:"/home",templateUrl:"app/dashboards/home.html",data:{pageTitle:"Dashboard"},controller:"DashboardController",controllerAs:"vm"}),a.otherwise("/index/main")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").controller("DashboardController",["dataservice","logger","$filter",function(e,a,t){function s(){return i().then(function(){a.info("Activated Dashboard View")})}function i(){return e.getAllWorkingSets().then(function(e){return o.businessControlProfileList=e,o.inProgressList=e.inProgressList,o.completedList=e.completedList,o.todoList})}var o=this;o.userName="Example user",o.helloText="Dashboard",o.descriptionText="Dashboard",o.formatValue=function(e,a){var t=Math.abs(e);return t},s()}]),angular.module("inspinia").controller("NavigationController",["dataservice","logger","$stateParams","AuthFactory","$localStorage","USER_ROLES","userService",function(e,a,t,s,i,o,l){function n(e){g.businessControlProfileList=e}function r(e){console.log("Promise Notification: "+e)}function c(e){console.log("Error Message: "+e)}function d(){console.log("getAllWorkingSets has completed")}function u(e){g.filters=e}function m(e){console.log("Promise Notification: "+e)}function c(e){console.log("Error Message: "+e)}function p(){console.log("getAllFilters has completed")}var g=this,v=i.getObject("Token","{}");g.userName=v.username,g.userRoles=o,g.userData=i.getObject("Profile","{}"),g.isAuthorized=function(e){var a=!1;return angular.isArray(e)||(e=[e]),angular.forEach(g.userData.data.roles,function(t){-1!==e.indexOf(t)&&(a=!0)}),a},e.getAllWorkingSets().then(n,null,r)["catch"](c)["finally"](d),e.getAllFilters().then(u,null,m)["catch"](c)["finally"](p),g.bcpNavClass=function(e){return e.id==t.bcp?"active":""},g.filterNavClass=function(e){var a=e.filterId==t.filterText?"active":"";return a}}]),function(){"use strict";function e(e,a,t,s,i,o){function l(e,a){var s=t.defer(),i=n(e,a);return t.when(i).then(function(e){var a=e.taskInfos,t=[],i=[],o=[];a.forEach(function(e,a,s){1===e.taskState.id?t.push(e):2===e.taskState.id?i.push(e):3===e.taskState.id&&o.push(e)});var l={todoList:t,inProgressList:i,completedList:o};s.resolve(l)}),s.promise}function n(a,t){return e({method:"GET",url:o.baseURL+"workingSets/"+a+"/TaskInfos?filterId="+t}).then(r)["catch"](c)}function r(e){return e.data}function c(e){return t.reject("Error retrieving Tasks. (HTTP status: "+e.status+")")}function d(){return e({method:"GET",url:o.baseURL+"WorkingSets/"}).then(r)["catch"](u)}function u(e){return t.reject("Error retrieving WorkingSets. (HTTP status: "+e.status+")")}function m(){return e({method:"GET",url:o.baseURL+"Filters/"}).then(r)["catch"](p)}function p(e){return t.reject("Error retrieving Filters. (HTTP status: "+e.status+")")}function g(a){alert(a.title),e.put(o.baseURL+"Tasks/"+a.id,a),alert("success")}var v={getTasksSummary:l,getAllTasks:n,getAllWorkingSets:d,getAllFilters:m,saveTask:g};return v}function a(e){return{store:function(a,t){e.localStorage[a]=t},get:function(a,t){return e.localStorage[a]||t},remove:function(a){e.localStorage.removeItem(a)},storeObject:function(a,t){e.localStorage[a]=JSON.stringify(t)},getObject:function(a,t){return JSON.parse(e.localStorage[a]||t)}}}function t(e,a){return{put:function(t,s){"localhost"===a.host()?e.put(t,s,{path:"/"}):e.put(t,s,{domain:a.host(),path:"/"})},get:function(a,t){return e.get(a)||t},remove:function(a){e.remove(a)}}}function s(e,a,t,s,i){var o=function(t,o,l,n){return e.open({controller:"TaskAddEditModalController",controllerAs:"vm",templateUrl:"app/taskboard/taskAddEditModal.html",size:t,windowClass:"app-modal-window",backdrop:"static",keyboard:!1,resolve:{items:function(){return a.get(s.baseURL+"Tasks/"+l,{headers:{Authorization:"Bearer "+i.get("AccessToken")}}).then(function(e){return e.data})}}})};return{open:o}}function i(e,a,t,s,i,o,l,n,r){function c(e,t){var i=s.defer(),o=$.param({grant_type:"password",username:e,password:t}),n={headers:{"Content-Type":"application/x-www-form-urlencoded"}},r=a.post(l.authURL+"oauth/token",o,n);return s.when(r).then(function(a){x.isAuthenticated="true",x.username=e,x.bearerToken=a.data.access_token,x.expirationDate=new Date(a[".expires"]),i.resolve(x),v(x)})["catch"](b),i.promise}function d(){u(),m()}function u(){x.isAuthenticated="false",x.username="",n.remove(h)}function m(){n.remove(k)}function p(){return x.username}function g(){return x}function v(e){n.storeObject(h,e),r.remove("AccessToken"),r.put("AccessToken",e.bearerToken)}function b(e){return s.reject("Error retrieving the AuthFac Service. (HTTP status: "+e.status+")")}var f={},h="Token",k="Profile",x={isAuthenticated:!1,username:"",bearerToken:"",expirationDate:null},f={authenticate:c,logout:d,getUserName:p,getUserData:g};return f}function o(e,a,t,s,i,o,l,n){function r(){var a=t.defer(),s=e.get(o.authURL+"user/profile",{headers:{Authorization:"Bearer "+l.get("AccessToken")}});return t.when(s).then(function(e){u=e,a.resolve(u),c(u)})["catch"](d),a.promise}function c(e){n.storeObject(m,e)}function d(e){return t.reject("Error retrieving User Profile. (HTTP status: "+e.status+")")}var u={},m="Profile",p={getUserProfile:r};return p}function l(e){var a=null;switch(e.dueStatus.status){case"Overdue":a="danger-element";break;case"On Time":a="success-element";break;case"In Jeopardy":a="warning-element"}return a}e.$inject=["$http","$location","$q","exception","logger","config"],i.$inject=["$rootScope","$http","$location","$q","exception","logger","config","$localStorage","$cookieFactory"],a.$inject=["$window"],o.$inject=["$http","$location","$q","exception","logger","config","$cookies","$localStorage"],t.$inject=["$cookies","$location"],s.$inject=["$uibModal","$http","$q","config","$cookies"],angular.module("inspinia").factory("dataservice",e).factory("AuthFactory",i).factory("$localStorage",a).factory("userService",o).factory("$cookieFactory",t).factory("$modalFactory",s).value("taskDueStatusClassService",{retrieveTaskDueStatusClass:l})}(),function(){"use strict";angular.module("inspinia").constant("toastr",toastr).constant("moment",moment).constant("config",{baseURL:"http://ec2-52-33-130-108.us-west-2.compute.amazonaws.com:8081/MagpieAPI/api/",authURL:"http://ec2-52-33-130-108.us-west-2.compute.amazonaws.com:8081/MagpieIdentity/",oldTroutBaseURL:"http://localhost:9092/Landing/index?n="}).constant("USER_ROLES",{all:"*",System:"System",NotificationService:"NotificationService",Debugger:"Debugger",Administrator:"Administrator",AccountManager:"AccountManager",UserManager:"UserManager",RaciTeamManager:"RaciTeamManager",BusinessProcessManager:"BusinessProcessManager",QlikUser:"QlikUser",TaskBoardUser:"TaskBoardUser",TaskBoardUserReadOnly:"TaskBoardUserReadOnly",ProgramDesigner:"ProgramDesigner",LogViewer:"LogViewer",DocumentRepositoryUser:"DocumentRepositoryUser",DocumentRepositoryUserReadOnly:"DocumentRepositoryUserReadOnly",IncidentResponseUser:"IncidentResponseUser",PolicyGeneratorUser:"PolicyGeneratorUser"})}(),angular.element(document).ready(function(e){function a(){var e=angular.element("body > #wrapper").height()-61;angular.element(".sidebar-panel").css("min-height",e+"px");var a=angular.element("nav.navbar-default").height(),t=angular.element("#page-wrapper").height();a>t&&angular.element("#page-wrapper").css("min-height",a+"px"),t>a&&angular.element("#page-wrapper").css("min-height",angular.element(window).height()+"px"),angular.element("body").hasClass("fixed-nav")&&(a>t?angular.element("#page-wrapper").css("min-height",a+"px"):angular.element("#page-wrapper").css("min-height",angular.element(window).height()-60+"px"))}angular.element(window).bind("load resize scroll",function(){angular.element("body").hasClass("body-small")||a()}),angular.element(window).scroll(function(){angular.element(window).scrollTop()>0&&!angular.element("body").hasClass("fixed-nav")?angular.element("#right-sidebar").addClass("sidebar-top"):angular.element("#right-sidebar").removeClass("sidebar-top")}),e(function(){a()}),angular.element(window).bind("load resize",function(){angular.element(document).width()<769?angular.element("body").addClass("body-small"):angular.element("body").removeClass("body-small")})}),function(){"use strict";function e(e,a,t){a.$state=t,e.debug("runBlock end")}e.$inject=["$log","$rootScope","$state"],angular.module("inspinia").run(e)}(),function(){"use strict";function e(e,a){e.state("index",{"abstract":!0,url:"/index",templateUrl:"app/components/common/content.html"}).state("index.main",{url:"/main",templateUrl:"app/main/main.html",data:{pageTitle:"Example view"}}).state("index.minor",{url:"/minor",templateUrl:"app/minor/minor.html",data:{pageTitle:"Example view"}}),a.otherwise("/login")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").directive("sideNavigation",["$timeout",function(e){return{restrict:"A",link:function(a,t){a.$watch("authentication.user",function(){e(function(){t.metisMenu()})});var s=angular.element('#side-menu a:not([href$="\\#"])');if(s.click(function(){angular.element(window).width()<769&&angular.element("body").toggleClass("mini-navbar")}),angular.element("body").hasClass("fixed-sidebar")){var i=t.parent();i.slimScroll({height:"100%",railOpacity:.9})}}}}]).directive("minimalizaSidebar",["$timeout",function(e){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:["$scope",function(a){a.minimalize=function(){angular.element("body").toggleClass("mini-navbar"),!angular.element("body").hasClass("mini-navbar")||angular.element("body").hasClass("body-small")?(angular.element("#side-menu").hide(),e(function(){angular.element("#side-menu").fadeIn(400)},200)):angular.element("#side-menu").removeAttr("style")}}]}}]).directive("pageTitle",["$rootScope","$timeout",function(e,a){return{link:function(t,s){var i=function(e,t,i,o,l){var n="Altius";t.data&&t.data.pageTitle&&(n="Altius | "+t.data.pageTitle),a(function(){s.text(n)})};e.$on("$stateChangeStart",i)}}}]).directive("modalTrigger",["$modalFactory",function(e){return{link:function(a,t,s){function i(){var t=a.$eval(s.size)||"lg",i=a.$eval(s.title)||"Default Title",o=a.$eval(s.message)||"Default Message",l=a.$eval(s.id)||0;e.open(t,i,l,o)}t.on("click",i),a.$on("$destroy",function(){t.off("click",i)})}}}]),angular.module("inspinia").run(["$templateCache",function(e){e.put("app/dashboards/home.html",'<div class="row wrapper border-bottom white-bg page-heading"><div class="col-lg-12"><h2>Dashboard</h2><ol class="breadcrumb"><li>Home</li><li>Dashboards</li><li class="active"><strong>Dashboard</strong></li></ol></div></div><div class="wrapper wrapper-content animated fadeInRight"><div class="row" style="margin-top:20px; margin-left:5px;" ng-repeat="item in vm.businessControlProfileList"><div class="ibox float-e-margins col-lg-8"><div class="ibox-title"><span class="label label-primary pull-right" ng-click="complianceScore(item)"></span><h5>{{item.name}}</h5></div><div class="ibox-content"><div class="row"><div class="col-lg-6" ng-click="showClick(item)"><c3chart bindto-id="gauge-plot{{item.id}}-chart"><chart-column column-id="{{item.name}}" column-color="{{item.color}}" column-values="{{item.workingSetCompliance}}" column-type="gauge"><chart-gauge min="0%" max="100%" units="Score" expand="true" label-format-function="vm.formatValue(item.workingSetCompliance,0)"><chart-events on-click-data="showClick(item)"></chart-events></chart-gauge></chart-column></c3chart></div><div class="col-lg-6"><div class="ibox float-e-margins"><div class="ibox-title"><span class="label label-primary pull-right hidden" ng-click="complianceScore(item)">?</span><h5>Control Catalogues</h5><span class="pull-right"><h5>Compliance Percentage</h5></span></div><div class="ibox-content"><div><ul class="list-group clear-list m-t" ng-repeat="cs in item.workingSetTemplate.controlSets | limitTo:4" ng-init="outerIndex = $index"><li class="list-group-item"><span class="label label-success hidden">{{outerIndex + 1}}</span> <span class="pull-right" ng-class="controlSetComplianceClass(cs)">{{cs.controlSetCompliance}} %</span><span class="label label-success"></span>{{cs.title }}</li></ul><ul class="list-group clear-list m-t"><li class="list-group-item"><span class="label label-primary pull-right"></span></li></ul></div></div></div><a ui-sref="dashboards.dashboardSingleWorkingSet({obj: item})"><span class="label label-primary pull-right">More....</span></a></div><div class="col-lg-3 hidden"><div class="ibox float-e-margins"><div class="ibox-title"><span class="label label-primary pull-right" ng-click="complianceScore(item)"></span><h5>Users</h5></div><div class="ibox-content"><ul class="list-group clear-list m-t" ng-repeat="user in item.users | limitTo:4"><li class="list-group-item clear-list"><span class="label label-success"></span>{{user.userName}}</li></ul><ul class="list-group clear-list m-t"><li class="list-group-item"><span class="label label-primary pull-right"></span></li></ul></div></div></div></div></div></div></div></div>'),e.put("app/login/login.html",'<div class="middle-box text-center loginscreen animated fadeInDown"><div><form class="m-t" role="form" id="login-form" ng-submit="vm.login();"><div class="row" ng-repeat="error in errors"><div class="alert alert-danger">{{error}}</div></div><div class="form-group"><input type="text" class="form-control" placeholder="Username" required="" ng-model="vm.username"></div><div class="form-group"><input type="password" autocomplete="off" class="form-control" placeholder="Password" required="" ng-model="vm.password"></div><button id="login-form-submit-button" type="submit" class="btn btn-primary block full-width m-b">Login</button></form></div></div>'),e.put("app/main/main.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>{{main.helloText}}</h1><small>{{main.descriptionText}} <i class="glyphicon glyphicon-pencil"></i></small></div></div></div></div>'),e.put("app/minor/minor.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>Simple example of second view</h1><small>Configure in app.js as index.minor state.</small></div></div></div></div>'),e.put("app/taskboard/taskAddEditModal.html",'<div class="ibox"><div class="ibox-content"><form role="form" name="signup_form2" novalidate="" ng-submit="vm.confirm()"><div class="modal-body"><div class="row"><div class="row"><div class="col-lg-2" style="font-size : 12px; padding-top : 8px"><input type="text" style="font-size : 12px; padding-top : 8px" class="form-control no-border" name="TaskCode" ng-model="dialogTask.code" placeholder="Code" required=""></div><div class="col-lg-9" style="font-weight:bold;"><input type="text" style="font-size:25px" class="form-control no-border" name="TaskTitle" ng-model="dialogTask.title" placeholder="Task Title" required=""></div><div class="col-lg-1 pull-right"><button type="button" class="close" ng-click="vm.cancel()">X</button></div></div><div class="row"><div class="col-lg-4 hidden"></div><div class="col-lg-4"></div><div class="col-lg-2 pull-right"><button type="button" class="btn btn-info pull-right" ng-click="vm.confirm()"><i class="fa fa-save"></i> Save</button></div></div></div></div><div class="modal-body"><div class="row"><div class="col-lg-12"><div class="tabs-container"><uib-tabset><uib-tab><uib-tab-heading>Edit <i class="fa fa-pencil"></i></uib-tab-heading><div class="panel-body"><div class="col-lg-6"><br><div class="form-horizontal"><div class="form-group"><label class="col-md-4 control-label" style="padding-top : 10px">Control Code</label><div class="col-md-6"><select class="form-control m-b" ng-disabled="enableControlStatus(task)" ng-model="controlSets.Value" ng-options="controlSet.Value as controlSet.Name for controlSet in controlSets.Values" ng-change="updateControlSet(controlSets.Value)"></select></div></div><div class="form-group"><label class="col-md-4 control-label" style="padding-top : 10px">Task State</label><div class="col-md-6"><div class="btn-group hidden" role="group" aria-label="..."><button type="button" class="btn btn-sm btn-primary">New</button> <button type="button" class="btn btn-sm btn-primary">In Progress</button> <button type="button" class="btn btn-sm btn-primary">Completed</button></div><select class="form-control m-b" ng-disabled="enableStatus(task)" ng-model="taskStates.Value" ng-options="taskState.Value as taskState.Name for taskState in taskStates.Values" ng-change="update(taskStates.Value)"></select><select class="form-control m-b hidden" name="Name" ng-model="dialogTask.taskState.name" placeholder="Task State"><option ng-repeat="item in taskStates" value="{{item.Value}}">{{item.Name}}</option></select></div></div><div class="form-group"><label class="col-md-4 control-label" style="padding-top : 10px">Due</label><div class="col-md-6"><input type="text" class="form-control no-border" name="taskDue" ng-model="dialogTask.due" placeholder="Task Due" formatted-date="" format="medium"><div class="m-t-xs" ng-show="signup_form2.taskDue.$invalid && signup_form2.taskDue.$dirty"><small class="text-danger" style="font-weight:normal;" ng-show="signup_form2.taskDue.$error.date">Please input a valid date</small> <small class="text-danger" ng-show="signup_form2.taskDue.$error.minlength">Your Task Due is required to be at least 3 characters</small> <small class="text-danger" ng-show="signup_form2.taskDue.$error.maxlength">Your Task Due cannot be longer than 20 characters</small></div></div></div><div class="form-group hidden"><label class="col-md-2 control-label">Created By</label><div class="col-md-10"><input type="text" class="form-control no-border" name="CreatedBy" ng-model="dialogTask.createdByUserId" placeholder="Created By" required=""></div></div><div class="form-group"><label class="col-md-4 control-label" style="padding-top : 10px">Link</label><div class="col-md-6"><input type="text" class="form-control no-border" name="Link" ng-model="dialogTask.link" placeholder="Link"></div></div><div class="form-group"><uib-accordion close-others="true"><uib-accordion-group heading="Description" is-open="true"><textarea class="form-control no-border" rows="4" name="Decsription" ng-model="dialogTask.description"></textarea></uib-accordion-group></uib-accordion></div></div></div><div class="col-lg-6"><br></div></div></uib-tab><uib-tab><uib-tab-heading>Comments <i class="fa fa-comment-o"></i></uib-tab-heading><div class="panel-body"><div class="row"><div class="col-lg-6"><div class="ibox float-e-margins"><div class="form-group"><uib-accordion close-others="true"><uib-accordion-group heading="Comments" is-open="true"><textarea class="form-control no-border" rows="4" name="Comments" ng-model="comment.data"></textarea></uib-accordion-group></uib-accordion></div></div></div><div class="col-lg-6"><ul class="list-group clear-list m-t" ng-repeat="comment in dialogTask.comments"><li class="list-group-item clear-list"><div class="agile-detail"><blockquote><p>{{comment.text}}</p><footer>{{comment.lastModifiedByUser.userName}}, <cite>{{comment.lastModified | date}}</cite></footer></blockquote></div></li></ul></div></div></div></uib-tab><uib-tab><uib-tab-heading>RACI <i class="fa fa-users"></i></uib-tab-heading><div class="panel-body"><div class="col-lg-6"><div class="form-horizontal"><div class="form-group"><label class="col-md-6 control-label"><input type="radio" ng-model="raci.name" value="Team"> Assign RACI Team</label> <label class="col-md-6 control-label"><input type="radio" ng-model="raci.name" value="Role"> Assign RACI Roles</label></div></div><div class="form-horizontal"><div class="form-group"><label class="col-md-4 control-label" style="padding-top : 10px">RACI Team</label><div class="col-md-6"><select class="form-control m-b" ng-model="raciTeams.Value" ng-options="raciTeam.Value as raciTeam.Name for raciTeam in raciTeams.Values" ng-change="updateRaciTeam(raciTeams.Value)" ng-disabled="raci.name == \'Role\'"></select></div></div><div class="form-group"><label class="col-md-4 control-label" style="padding-top : 10px">Responsible</label><div class="col-md-6"><select class="form-control m-b" ng-model="responsibleUsers.Value" ng-options="responsibleUser.Value as responsibleUser.Name for responsibleUser in responsibleUsers.Values" ng-change="updateResponsibleUser(responsibleUsers.Value)" ng-disabled="raci.name == \'Team\'"></select></div></div><div class="form-group"><label class="col-md-4 control-label" style="padding-top : 10px">Accountable</label><div class="col-md-6"><select class="form-control m-b" ng-model="accountableUsers.Value" ng-options="accountableUser.Value as accountableUser.Name for accountableUser in accountableUsers.Values" ng-change="updateAccountableUser(accountableUsers.Value)" ng-disabled="raci.name == \'Team\'"></select></div></div><div class="form-group"><uib-accordion close-others="true"><uib-accordion-group heading="Informed" is-open="true"><select multiple="" class="form-control m-b" ng-model="informedUsers.Value" ng-options="informedUser.Value as informedUser.Name for informedUser in informedUsers.Values" ng-change="updateInformedUser(informedUsers.Value)" ng-disabled="raci.name == \'Team\'"></select></uib-accordion-group></uib-accordion></div></div></div><div class="col-lg-6"><br><uib-accordion close-others="true"><uib-accordion-group heading="Consulted" is-open="true"><select multiple="" class="form-control m-b" ng-model="consultedUsers.Value" ng-options="consultedUser.Value as consultedUser.Name for consultedUser in consultedUsers.Values" ng-change="updateConsultedUser(consultedUsers.Value)" ng-disabled="raci.name == \'Team\'"></select></uib-accordion-group></uib-accordion></div></div></uib-tab></uib-tabset></div></div></div></div></form></div></div>'),e.put("app/taskboard/taskboard.html",'<div class="row wrapper border-bottom white-bg page-heading"><div class="col-lg-12"><h2>Task Board</h2><ol class="breadcrumb"><li>Home</li><li>{{vm.descriptionText}}</li><li class="active"><strong>{{vm.descriptionText}}</strong></li></ol></div></div><div class="wrapper wrapper-content"><div class="row"><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>New</h3><button ng-click="vm.reload()" class="fa fa-refresh hidden">Reload</button> <button class="hidden" modal-trigger="" size="\'lg\'" title="\'Hello World!\'" message="\'This is a test\'">Click Me</button><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><div class="input-group"><input type="text" placeholder="Add new task." class="input input-sm form-control" ng-model="taskTitle"> <span class="input-group-btn"><button type="button" class="btn btn-sm btn-white" ng-click="openTaskDetailsDialog(null)"><i class="fa fa-plus"></i> Add task</button></span></div><ul ui-sortable="vm.sortableOptions" class="sortable-list connectList agile-list" ng-model="vm.todoList"><li ng-class="vm.taskDueStatusClass(task)" ng-repeat="task in vm.todoList"><div class="agile-detail"><button type="button" modal-trigger="" size="\'lg\'" title="\'{{task.title}}\'" id="\'{{task.id}}\'" message="\'This is a test\'" class="btn btn-w-m btn-xs btn-link">{{task.title}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>Active</h3><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><ul ui-sortable="vm.sortableOptions" class="sortable-list connectList agile-list" ng-model="vm.inProgressList"><li ng-class="vm.taskDueStatusClass(task)" ng-repeat="task in vm.inProgressList"><div class="agile-detail"><button type="button" ng-click="vm.open()" class="btn btn-w-m btn-xs btn-link">{{task.title}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div><div class="col-lg-4"><div class="ibox"><div class="ibox-content"><h3>Completed</h3><p class="small"><i class="fa fa-hand-o-up"></i> Drag task between list</p><ul ui-sortable="sortableOptions" class="sortable-list connectList agile-list" ng-model="completedList"><li ng-class="vm.taskDueStatusClass(task)" enablestatus(task)="" ng-repeat="task in completedList | freeFormat : taskOrCode | dateRange:daterange.startDate :daterange.endDate | responsibleUser : responsibleUserList.selected | controlCatalogue : controlCatalogue | filter : { title: filterText.name || task, dueStatus : { id : dueStatus }}"><div class="agile-detail"><button type="button" ng-click="openTaskDetailsDialog(task)" class="btn btn-w-m btn-xs btn-link">{{task.title | cut:true:25:\' ...\'}}</button><p class="pull-right"><i class="fa fa-clock-o"></i>{{task.due|date}}</p></div><div class="agile-detail">{{task.code}}<p class="pull-right">{{task.responsibleUser.firstName}}</p></div></li></ul></div></div></div></div></div>'),e.put("app/components/common/content.html",'<div id="wrapper"><div ng-include="\'app/components/common/navigation.html\'"></div><div id="page-wrapper" class="gray-bg {{$state.current.name}}"><div ng-include="\'app/components/common/topnavbar.html\'"></div><div ui-view=""></div><div ng-include="\'app/components/common/footer.html\'"></div></div></div>'),e.put("app/components/common/footer.html",'<div class="footer"><div class="pull-right">10GB of <strong>250GB</strong> Free.</div><div><strong>Copyright</strong> Example Company &copy; 2015-2016</div></div><div></div>'),e.put("app/components/common/ibox_tools.html",'<div class="ibox-tools" uib-dropdown=""><a ng-click="showhide()"><i class="fa fa-chevron-up"></i></a> <a uib-dropdown-toggle="" href=""><i class="fa fa-wrench"></i></a><ul uib-dropdown-menu=""><li><a href="">Config option 1</a></li><li><a href="">Config option 2</a></li></ul><a ng-click="closebox()"><i class="fa fa-times"></i></a></div>'),e.put("app/components/common/navigation.html",'<nav class="navbar-default navbar-static-side" role="navigation"><div class="sidebar-collapse" ng-controller="NavigationController as vm"><ul side-navigation="" class="nav metismenu" id="side-menu"><li class="nav-header"><div class="profile-element" uib-dropdown=""><a uib-dropdown-toggle="" href=""><i class="fa fa-user" aria-hidden="true"></i> <span class="clear"><span class="block m-t-xs"><strong class="font-bold">{{vm.userName}}</strong></span></span></a><ul uib-dropdown-menu="" class="animated flipInX m-t-xs"><li><a href="">Logout</a></li></ul></div><div class="logo-element">Altius Systems</div></li><li ng-class="{active: $state.includes(\'index.dashboards\')}"><a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span></a><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'dashboards\')}"><li ui-sref-active="active" ng-show="vm.isAuthorized([vm.userRoles.System, vm.userRoles.Debugger, vm.userRoles.Administrator, vm.userRoles.QlikUser])"><a ui-sref="index.dashboards">Profiles<span class="label label-primary pull-right">NEW</span></a></li></ul></li><li ng-class="{active: $state.includes(\'index.taskboard\')}"><a href="#"><i class="fa fa-tasks"></i> <span class="nav-label">Taskboard</span><span class="fa arrow"></span></a><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="vm.bcpNavClass(bcp)" ng-repeat="bcp in vm.businessControlProfileList"><a ui-sref="index.taskboard({filterText: 1, bcp: bcp.id})">{{bcp.name}}</a></li></ul><ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="{active: $state.includes(\'index\')}"><a href="#"><i class="fa fa-filter"></i> <span class="nav-label-second-level">Filters</span><span class="fa arrow"></span></a><ul class="nav nav-third-level collapse" ng-class="{in: $state.includes(\'index\')}"><li ng-class="vm.filterNavClass(filter)" ng-repeat="filter in vm.filters"><a ui-sref="index.taskboard({filterText: filter.filterId})">{{filter.filterName}}</a></li></ul></li></ul></li><li ui-sref-active="active"><a ui-sref="index.minor"><i class="fa fa-sitemap"></i> <span class="nav-label">Operations</span></a></li></ul></div></nav>'),
e.put("app/components/common/topnavbar.html",'<div class="row border-bottom"><nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0"><div class="navbar-header"><span minimaliza-sidebar=""></span><form role="search" class="navbar-form-custom" method="post" action=""><div class="form-group"><input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search"></div></form></div><ul class="nav navbar-top-links navbar-right" ng-controller="LoginController as vm"><li><a ui-sref="login" ng-click="vm.logout()"><i class="fa fa-sign-out"></i> Log out</a></li></ul></nav></div>')}]);
//# sourceMappingURL=../maps/scripts/app-edc794350d.js.map