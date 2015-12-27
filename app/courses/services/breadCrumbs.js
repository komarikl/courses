'use strict';

		angular.module('coursesApp')
		.factory('breadCrumbs', ['$rootScope', function($rootScope) {
			var title = '';

			return {
				getTitle: function () {
					return title;
				},
				setTitle: function (newTitle) {
					title = newTitle;
				}
			};

		}])