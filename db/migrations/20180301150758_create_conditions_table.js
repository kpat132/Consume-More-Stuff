exports.up = function(knex, Promise) {
  return knex.schema.createTable('conditions', table => {
    table.increments('id').notNullable();
    table.enu('name', ['new', 'good', 'fair', 'poor', 'used'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('conditions')
};
