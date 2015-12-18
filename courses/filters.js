'use strict';

angular.module('coursesApp')

.filter('verboseminutes', function() {
    return function(input) {
        var i = Number(input);
        if (isNaN(i)) return input;

        var h = Math.floor(i / 60);
        var m = i % 60;
        return (h==0 ? '' : human_plural_form(h,['час','часа','часов'])+' ') +
               (m==0 ? '' : human_plural_form(m,['минута','минуты','минут']));
    };
});

.filter('filterCourses', [
    '$filter',
    function($filter) {
        var dateFilter = $filter('date');

        return function(search, array) {
            var i, name, date, filteredArray = [];
            search = search.toLowerCase();
            for (i=0; i<array.length; i++) {
                name = array[i].name.toLowerCase();
                date = dateFilter(array[i].date, 'dd.MM.yyyy');
                if (~name.indexOf(search) || ~date.indexOf(search)) {
                    filteredArray.push(array[i]);
                }
            }
            return filteredArray;
        };
    }
]);