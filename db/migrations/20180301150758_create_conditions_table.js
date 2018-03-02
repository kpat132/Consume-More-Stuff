exports.up = function(knex, Promise) {
  return knex.schema.createTable('conditions', table => {
    table.increments('id').notNullable();
    table.enu('name', ['new', 'good', 'fair', 'word', 'used'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('conditions')
};
