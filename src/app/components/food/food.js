(function () {
  'use strict';

  var food = angular.module('food', ['food.controller', 'food.service', 'food.directive']);

  /** @ngInject */
  food.config(function($stateProvider) {
    $stateProvider
      .state('manageFood', {
        url: '/managefood',
        templateUrl: 'app/components/food/partials/manageFood.html',
        controller: 'ManageFoodCtrl',
        controllerAs: 'ManageFoodCtrl'
      })
      .state('meals', {
        url: '/meals',
        templateUrl: 'app/components/food/partials/meals.html',
        controller: 'MealsCtrl',
        controllerAs: 'MealsCtrl'
      });
  });

})();
