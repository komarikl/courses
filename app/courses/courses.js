'use strict';

angular.module('coursesApp')

	.factory("coursesFactory", ["$firebaseArray",
	  function($firebaseArray) {
	    // create a reference to the database where we will store our data
	    var ref = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses");

	    return $firebaseArray(ref);
	  }
	])

	.controller("CoursesCtrl", ["$scope", "coursesFactory", '$location', '$filter', 'breadCrumbs', 
	  function($scope, coursesFactory, location, filter, breadCrumbs) {
	    $scope.courses = coursesFactory;

	    breadCrumbs.setTitle("");
  }
]);

//   .controller('CoursesCtrl', ['$scope', '$firebase', '$location', '$rootScope', '$filter', 'breadCrumbs', 
//   	function($scope,$firebase, $location, $rootScope, $filter, breadCrumbs) {
// 			var firebaseObj = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses"),
// 				sync = $firebase(firebaseObj);
// 			$scope.courses = sync.$asArray();
// 				//console.log(sync);

// 			$scope.confirmDelete = function(id) {
// 				var fb = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses/" + id);
// 				var course = $firebase(fb);
// 				$scope.courseToDelete = course.$asObject();
// 				$('#deleteModal').modal();
// 			}

// 			$scope.deleteCourse = function() {
// 				var fb = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses/" + $scope.courseToDelete.$id);
// 				var course = $firebase(fb);
// 				course.$remove().then(function(ref) {
// 					$('#deleteModal').modal('hide');
// 				}, function(error) {
// 					console.log("Error:", error);
// 				});
// 			}


//  			$scope.searchingString = '';
	
// 			$scope.searchCourses = function() {
// 				$scope.searchingString = $scope.searchText;
// 			};

// 			$scope.coursesFiltered = function (course) {
// 				return ~course.title.indexOf($scope.searchingString) ||
// 				~$filter('date')(course.date, 'dd.MM.yyyy').indexOf($scope.searchingString);
// 			};

// 			breadCrumbs.setTitle("");
// }]);




