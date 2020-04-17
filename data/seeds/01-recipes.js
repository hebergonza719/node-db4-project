
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {id: 1, recipe_name: 'flan'},
    {id: 2, recipe_name: 'pizza'},
    {id: 3, recipe_name: 'fried rice'}
  ]);
};
