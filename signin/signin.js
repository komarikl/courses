'use strict';
angular.module('coursesApp')
.value('user',{})
.controller("SignInCtrl", function($http, $scope, $location, $rootScope){
	$scope.warning = false;
    	$scope.submit = function(user){
    		$http
            .get('users.json')
            .success(function(data){
            		var originalUser = data;
            		if ($scope.user.login == originalUser.login && $scope.user.password == originalUser.password){
            		$rootScope.loggedIn = true;
                    $rootScope.originalUser = originalUser.login;
    				$location.path('/courses');
    			} else {
    				$scope.warning = true;
    			}
              
        });

    		
    	};
})



// 'use strict';
// angular.module('coursesApp')
// .controller("SignInCtrl", "User", function($http, $scope, $location, $rootScope, User){
//     $scope.warning = false;
//         $scope.submit = function(user){
//                     if ($scope.user.login == originalUser.login && $scope.user.password == originalUser.password){
//                     $rootScope.loggedIn = true;
//                     $location.path('/courses');
//                 } else {
//                     $scope.warning = true;                  
//                 }
//         };
// })

// .factory('User', function(){
//             $http
//             .get('users.json')
//             .success(function(data){
//                 var OriginalUser = data;
//             });
//  return OriginalUser;
// });