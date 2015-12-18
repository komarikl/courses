'use strict';

angular.module('coursesApp')

  .controller('CoursesCtrl', ['$scope', '$firebase', '$location', '$rootScope', function($scope,$firebase, $location, $rootScope) {
			var firebaseObj = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses"),
				sync = $firebase(firebaseObj);
			$scope.courses = sync.$asArray();
				//console.log(sync);

			$scope.confirmDelete = function(id) {
				var fb = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses/" + id);
				var course = $firebase(fb);
				$scope.courseToDelete = course.$asObject();
				$('#deleteModal').modal();
			}

			$scope.deleteCourse = function() {
				var fb = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses/" + $scope.courseToDelete.$id);
				var course = $firebase(fb);
				course.$remove().then(function(ref) {
					$('#deleteModal').modal('hide');
				}, function(error) {
					console.log("Error:", error);
				});
			}

			// $scope.searchCourses = function() {
			// 	var firebaseObj = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses"),
			// 	sync = $firebase(firebaseObj);
			// 	var allCourses = sync.$asArray();
			// 	$scope.courses = $filter('filterCourses')($scope.searchText, allCourses);
			// }
}]);




