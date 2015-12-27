'use strict';

angular.module('coursesApp')
.directive('courseAuthors', function (){
      return {
        restrict : 'A',
        replace: true,
        templateUrl : 'courses/directives/selectDir/selectDir.html',
         scope : {courseAuthors : "="},
        link : function (scope, elem, attrs){
            
            if (scope.courseAuthors === undefined) scope.courseAuthors = [];

            scope.moveRight = function() {
                for (var i = 0; i < scope.leftSelect.length; i++) {
                  var el = scope.leftSelect[i];
                  if (scope.courseAuthors.indexOf(el) < 0) {
                    scope.courseAuthors.push(el);
                  }
                }
              };

            scope.moveLeft = function() {
                for (var i = 0; i < scope.rightSelect.length; i++) {
                  var el = scope.rightSelect[i];
                  var indexOf = scope.courseAuthors.indexOf(el);
                  scope.courseAuthors.splice(indexOf, 1);
                }
            };
        }
    }
})