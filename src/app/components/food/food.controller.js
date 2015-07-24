(function () {
	'use strict';

	var food = angular.module('food.controller', []);

	food.controller('ManageFoodCtrl', function (FoodStore)
	{
    var vm = this;

    vm.allFood = FoodStore.allFood;
	});

  food.controller('MealsCtrl', function (FoodStore)
  {
		var vm = this;

		vm.meals = FoodStore.myFood;
  });

})();
