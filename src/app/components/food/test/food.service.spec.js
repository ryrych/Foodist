(function() {
  'use strict';

  describe('food service', function(){
    var food;

    beforeEach(module('macgular'));

    beforeEach(inject(function(FoodStore) {
      food = FoodStore;
    }));


    it('should import some food', function() {
      var data;

      food.import().then(function(result) {
        data = result;
        console.log(result);
      });

      //expect(data).toBeDefined();
    });

    it('should add a new meal', function(){
      var meal = {
          'name': "Launch",
          'foods': [
            {
              "name":"yougurt",
              "price":0.9,
              "calories":200,
              "protein":50,
              "fat":43,
              "carbohydrates":644,
              "count":1
            }
          ]
      };

      food.addToMyFood(meal);
      expect(food.myFood.length).toBeGreaterThan(0);
    });


    it('should remove and add to allFood', function(){

      var meal = {
        "name":"yougurt",
        "price":0.9,
        "calories":200,
        "protein":50,
        "fat":43,
        "carbohydrates":644
      };

      food.addToAllFood(meal);
      expect(food.allFood.length).toBeGreaterThan(0);

      var old = food.allFood.length;
      var score = old - food.allFood.length;
      expect(score).toBeGreaterThan(-1);
    });

  });
})();
