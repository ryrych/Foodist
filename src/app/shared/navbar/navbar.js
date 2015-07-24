(function () {
  'use strict';

  var navbar = angular.module('macgular');

  navbar.directive('macMenu',function(){
      return {
        restrict: 'E',
        templateUrl: 'app/shared/navbar/partials/navbar.html'
      };
  });

})();
