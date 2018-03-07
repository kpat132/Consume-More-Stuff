// user status
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_status', table => {
    table.increments('id').notNullable();
    table.enu('status', ['active', 'inactive']);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('user_status')
};
