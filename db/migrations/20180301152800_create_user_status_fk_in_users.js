
exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
  table.integer('user_status_id').references('id').inTable('user_status');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('user_status_id')
  })
};
