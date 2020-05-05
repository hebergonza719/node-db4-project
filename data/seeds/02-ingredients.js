
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {id: 1, ingredient_name: 'milk'},
    {id: 2, ingredient_name: 'flan mix'},
    {id: 3, ingredient_name: 'cheese'},
    {id: 4, ingredient_name: 'tomato sauce'},
    {id: 5, ingredient_name: 'oil'},
    {id: 6, ingredient_name: 'rice'}
  ]);  
};
