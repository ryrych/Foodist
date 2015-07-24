(function () {
	'use strict';

	var food = angular.module('food.directive', []);

	food.directive('manageFood',function(){
		return {
			restrict: 'E',
			controller: function(FoodStore){
				var vm = this;

				vm.addToAllFood = function(item) {
					FoodStore.addToAllFood(item);
				};

				vm.removeFromAllFood = function(item) {
					FoodStore.removeFromAllFood(item);
				};
			},
			controllerAs: "ManageFoodDir",
			scope: {
				items: "="
			},
			templateUrl: 'app/components/food/partials/directive/manageFood.html'
		};
	});

	food.directive('meals',function(){
		return {
			restrict: 'E',
			controller: function(FoodStore){
				var vm = this;

				$('#addNewMeal').on('show.bs.modal', function(){
					vm.initNewMeal();
				});

				vm.initNewMeal = function () {
					vm.newMeal = {};
					vm.newMeal.foods = [];
				};

				vm.foods = FoodStore.allFood;
				vm.removeFromMyMeal = function(item) {
					FoodStore.removeFromMyFood(item);
				};

				vm.addFoodToMeal = function(food) {
					var counter = false;
					angular.forEach(vm.newMeal.foods, function(v){
						if (v.name === food.name) {
							v.count += food.count;
							counter = true;
						}
					});

					if (!counter) {
						vm.newMeal.foods.push(angular.copy(food));
					}
					swal("Good job!", "You added the item!", "success");
				};

				vm.addMeal = function(item) {
					item.date = new Date().getTime();
					FoodStore.addToMyFood(item);
					$('#addNewMeal').modal('hide');
				};


			},
			controllerAs: "MealsDir",
			scope: {
				items: "="
			},
			templateUrl: 'app/components/food/partials/directive/meals.html'
		};
	});

})();
