const db = require('../data/db-config.js');

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipes_ingredients as r')
  .innerJoin('ingredients as i', 'i.id', 'r.ingredient_id')
  .innerJoin('recipes', 'recipes.id', 'r.recipe_id')
  .select('i.ingredient_name as ingredient', 'r.ingredient_quantity as quantity')
  .where({ 'recipes.id':  recipe_id})
}

// select s.step_number as [Step #], s.instruction as instruction
// from steps as s
// join recipes as r
// on s.recipe_id = r.id
// where r.id = 3

function getInstructions(recipe_id) {
  return db('steps as s')
    .join('recipes as r', 's.recipe_id', 'r.id')
    .select('s.step_number as [Step #]', 's.instruction as instruction')
    .where({ 'r.id': recipe_id })
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};