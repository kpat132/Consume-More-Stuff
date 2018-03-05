// item status
exports.up = function(knex, Promise) {
  return knex.schema.createTable('item_status', table => {
    table.increments('id').notNullable();
    table.enu('status', ['published', 'sold']);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('item_status')
};