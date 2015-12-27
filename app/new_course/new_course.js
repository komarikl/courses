'use strict';

angular.module('coursesApp')

.controller('NewCourseCtrl', ['$scope', 'coursesFactory', '$location', 'breadCrumbs', 
	function($scope, coursesFactory, $location, breadCrumbs) {

		$scope.courses = coursesFactory;
		$scope.addCourse = function(){


				$scope.courses.$add({
				    title: $scope.course.title,
				    description : $scope.course.description,
				    date : $scope.course.date,
				    duration : $scope.course.duration,
				    authors : $scope.course.authors
				})
				.then(function(ref) {
				    console.log(ref);
				}, function(error) {
				    console.log("Error:", error);
				})
				.then(function() {
					$location.path("/courses");
				});
	};
	breadCrumbs.setTitle("Новый курс");
}]);