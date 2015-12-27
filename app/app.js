	'use strict';

	angular.module('coursesApp', [
	  'ngRoute',
	  'firebase',
	  'ngAnimate',
	  'ui.bootstrap'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider
	  .when('/signin', {
	  	templateUrl: 'signin/signin.html'
	  })
	  .when('/courses', {
	  	templateUrl: 'courses/courses.html',
	  	controller: 'CoursesCtrl'
	  })
	  .when('/new_course', {
	  	templateUrl: 'new_course/new_course.html',
	  	controller: 'NewCourseCtrl'
	  })
	  .when('/:courseId', {
	  	templateUrl: 'edit_course/edit_course.html',
	  	controller: 'EditCourseCtrl'
	  })
	  .otherwise({redirectTo: '/signin'});
	}])
	.run(runApp)

	.controller("MainCtrl", MainCtrl)
	

	function runApp($http, $rootScope, $location){

        $rootScope.$on("$routeChangeStart", function(event, next, current) {
   			 if (!$rootScope.loggedIn) 
      			$location.path( "/signin" );
    		 }
   		 )}

    function MainCtrl($scope, breadCrumbs){
    	$scope.breadCrumbs = breadCrumbs;
   }
