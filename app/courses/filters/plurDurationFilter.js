'use strict';

angular.module('coursesApp')

.filter('plurDuration', function() {
        return function(input) {

            function declOfNum(number, titles){  //честно спёрто с http://htmler.ru/2013/11/22/sklonenie-chislitelnah-na-javascript/
            var cases = [2, 0, 1, 1, 1, 2];  
            return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
            };

            var n = Number(input),
                h = Math.floor(n / 60),
                min = n % 60,
                hTitles = ((h == 0 || isNaN(h)) ? ('', h = '') : declOfNum(h, ['час','часа','часов'])),
                minTitles = ((min == 0 || isNaN(min)) ? ('', min = '') : declOfNum(min, ['минута','минуты','минут']));

                return h + ' ' + hTitles + ' ' + min + ' ' + minTitles;
    };
})
