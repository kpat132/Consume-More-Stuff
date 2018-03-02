exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', table => {
    table.increments('id').notNullable();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.decimal('price').notNullable();
    table.string('make');
    table.string('model');
    table.string('dimensions');
    table.string('image');
    table.string('notes');
    table.integer('user_id').references('id').inTable('users');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
};
