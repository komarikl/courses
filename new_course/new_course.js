'use strict';

angular.module('coursesApp')

.controller('NewCourseCtrl', ['$scope', '$firebase', '$location',
	function($scope, $firebase, $location) {
		$scope.addCourse = function(){
			var firebaseObj = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses"),
				fb = $firebase(firebaseObj),
				title = $scope.course.title,
				description = $scope.course.description,
				duration = $scope.course.duration,
				date = $scope.course.date,
				authors = $scope.course.authors;

				fb.$push({
				    title: title,
				    description : description,
				    date : date,
				    duration : duration,
				    authors : authors
				})
				.then(function(ref) {
				    console.log(ref);
				}, function(error) {
				    console.log("Error:", error);
				})
				.then(function() {
					$location.path("/courses");
				}
				
				);

	}
}]);