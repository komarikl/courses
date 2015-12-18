'use strict';

angular.module('coursesApp')

.controller('EditCourseCtrl',['$scope', '$firebase', '$routeParams', function($scope,$firebase,$routeParams){

			$scope.editCourse = function(id){
				$routeParams.courseId = id;
				
				var firebaseObj = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses/" + id),
					syn = $firebase(firebaseObj);
				console.log(id);
				console.log(syn);
				 $scope.courseToUpdate = syn.$asObject();
				 console.log(courseToUpdate);
			}

			$scope.update = function() {
				var fb = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses/" + $scope.courseToUpdate.$id);
				var course = $firebase(fb);
				course.$update({
					title: $scope.courseToUpdate.title,
					description : $scope.courseToUpdate.description,
					duration : $scope.courseToUpdate.duration,
					date : $scope.courseToUpdate.date,
					authors : $scope.courseToUpdate.authors
					}).then(function(ref) {
						console.log('accsess');
					}, function(error) {
						console.log("Error:", error);
					});
				}


}]);