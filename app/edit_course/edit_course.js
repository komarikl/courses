'use strict';

angular.module('coursesApp')

.controller("EditCourseCtrl", ["$scope", '$routeParams', '$firebaseObject', 'breadCrumbs', 
  function($scope, $routeParams, $firebaseObject , breadCrumbs) {
    var id = $routeParams.courseId;

   var ref = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses");
    $scope.courseToUpdate = $firebaseObject(ref.child(id));
    $scope.courseToUpdate.$loaded()
        .then(function() {
        console.log($scope.courseToUpdate);
        breadCrumbs.setTitle('Курс ' + $scope.courseToUpdate.title);
        })
        .catch(function(err) {
        console.error(err);
        });
  }
])

// .controller('EditCourseCtrl',['$scope', 'coursesFactory', '$routeParams', 'breadCrumbs',
// 	function($scope, coursesFactory, $routeParams, breadCrumbs){


// 				var id = $routeParams.courseId;
// 				$scope.courseAuthors;
// 				var firebaseObj = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses/" + id),
// 					syn = $firebase(firebaseObj);

// 				 $scope.firebaseGetted =  syn.$asObject();
// 				 $scope.firebaseGetted.$bindTo($scope, 'firebaseGetted');

// 				 $scope.$watch('firebaseGetted', function(){
// 				 	$scope.courseToUpdate = angular.extend({}, $scope.firebaseGetted);
// 				 	console.log($scope.courseToUpdate);
// 				 });


// 				var courseTitle = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses/" + id + "/title");
// 				courseTitle.on("value", function(snapshot) {
// 					breadCrumbs.setTitle(snapshot.val());
// 						}
// 					);


// 			$scope.update = function() {
// 				var fb = new Firebase("https://resplendent-inferno-8217.firebaseio.com/courses/" + $scope.courseToUpdate.$id);
// 				var course = $firebase(fb);
// 				course.$update({
// 					title: $scope.courseToUpdate.title,
// 					description : $scope.courseToUpdate.description,
// 					duration : $scope.courseToUpdate.duration,
// 					date : $scope.courseToUpdate.date,
// 					authors : $scope.courseToUpdate.authors
// 					}).then(function(ref) {
// 						console.log('accsess');
// 					}, function(error) {
// 						console.log("Error:", error);
// 					});

// 					$scope.firebaseGetted = angular.extend({}, $scope.courseToUpdate);
// 				}

// }]);
