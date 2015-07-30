define([], function() {
  'use strict';

  // Underline text
  var homeDirective = function() {
    return {
      link: function($scope, $element) {
        $element.css({
          textDecoration: 'underline'
        });
      }
    };
  };

  return homeDirective;
});