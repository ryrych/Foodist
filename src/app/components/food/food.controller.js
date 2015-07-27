(function () {
	'use strict';

	var food = angular.module('food.controller', []);

	food.controller('ManageFoodCtrl', function (FoodStore)
	{
    var vm = this;

    vm.allFood = FoodStore.allFood;

		vm.importFood = function() {
			FoodStore.import().then(function(data){
				FoodStore.allFood = data;
				vm.allFood = data;
				FoodStore.storeAllFood();
			});
		}

	});

  food.controller('MealsCtrl', function (FoodStore)
  {
		var vm = this;

		vm.meals = FoodStore.myFood;
  });

})();
