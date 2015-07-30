define(['angular'], function(angular) {
  'use strict';

  // Common filters used across all modules
  return angular.module('myApp.filters', ['myApp.services'])
    .filter('titlecase', function() {
      return function(input) {
        if (input) {
          var words = input.split(' ');
          for (var i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase(); // lowercase everything to get rid of weird casing issues
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
          }
          return words.join(' ');
        } else {
          return input;
        }
      };
    });
});