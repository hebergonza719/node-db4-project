
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {id: 1, recipe_id: 1, step_number: 1, instruction: 'open box'},
    {id: 2, recipe_id: 1, step_number: 2, instruction: 'put contents into bowl'},
    {id: 3, recipe_id: 2, step_number: 1, instruction: 'call pizza place'},
    {id: 4, recipe_id: 2, step_number: 2, instruction: 'pay for pizza'},
    {id: 5, recipe_id: 3, step_number: 1, instruction: 'call Chinese rest'},
    {id: 6, recipe_id: 3, step_number: 2, instruction: 'pay delivery person'}
    ]);  
};