
exports.up = function(knex) {
   return (
     knex.schema
      .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 255).notNullable();
      })
      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 255).notNullable();
      })
      .createTable('recipes_ingredients', tbl => {
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          // reference field and table separately
          .references('id')
          .inTable('recipes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        // this needs to be added after the field has been defined. this is a foreign key constraint -- references('table.field')
        // below didn't work ????
        // tbl.foreign('ingredient_id').references('id').inTable('ingredients');
        tbl.float('ingredient_quantity').notNullable();
      })
      .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          // table.field
          .references('recipes.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('step_number')
          .notNullable();
        tbl.string('instruction', 255).notNullable();
      })
   );
};

exports.down = function(knex) {
  return (
    knex.schema
    // order is very important make sure first created go last
      .dropTableIfExists('recipes_ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
  );
};
