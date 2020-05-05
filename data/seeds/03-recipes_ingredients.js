
exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    {recipe_id: 1, ingredient_id: 1, ingredient_quantity: 1.0},
    {recipe_id: 1, ingredient_id: 2, ingredient_quantity: 2.2},    
    {recipe_id: 2, ingredient_id: 3, ingredient_quantity: 3.4},
    {recipe_id: 2, ingredient_id: 4, ingredient_quantity: 5.6},
    {recipe_id: 3, ingredient_id: 5, ingredient_quantity: 7.8},    
    {recipe_id: 3, ingredient_id: 6, ingredient_quantity: 9.0}
    ]);  
};
