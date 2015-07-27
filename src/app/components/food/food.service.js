(function () {
	'use strict';

	var food = angular.module('food.service', []);

  food.factory('FoodStore', function($http, $q, store) {
    var data = [];
    data.myFood = store.get('myFood') ? store.get('myFood') : [];
    data.allFood = store.get('allFood') ? store.get('allFood') : [];

    data.import = function(){
      return $http.get('assets/models/food.json').then(function(response){
        return response.data;
      });
    };

		data.storeAllFood = function() {
			store.set('allFood', angular.copy(data.allFood));
		};

		data.storeMyFood = function() {
			store.set('myFood', angular.copy(data.myFood));
		};

    data.addToMyFood = function(item) {
			item.price = 0;
			item.calories = 0;
			item.protein = 0;
			item.fat = 0;
			item.carbohydrates = 0;

			angular.forEach(item.foods, function(v){
				item.price += v.price * v.count;
				item.calories += v.calories * v.count;
				item.protein += v.protein * v.count;
				item.fat += v.fat * v.count;
				item.carbohydrates += v.carbohydrates * v.count;
			});
      data.myFood.push(item);
      data.storeMyFood();
      swal("Good job!", "You added the item!", "success");
    };

    data.addToAllFood = function(item) {
      data.allFood.push(angular.copy(item));
      data.storeAllFood();
      swal("Good job!", "You added the item!", "success");
    };

    data.removeFromMyFood = function(item) {
      data.myFood.splice(item, 1);
      data.storeMyFood();
      swal("Good job!", "You removed the item!", "success");
    };

    data.removeFromAllFood = function(item) {
      data.allFood.splice(item, 1);
      data.storeAllFood();
      swal("Good job!", "You removed the item!", "success");
    };

    return data;
  });

})();
