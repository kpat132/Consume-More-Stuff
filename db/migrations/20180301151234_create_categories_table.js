exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', table => {
    table.increments('id').notNullable();
    table.string('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
};
