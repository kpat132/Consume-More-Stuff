
exports.up = function(knex, Promise) {
  return knex.schema.table('items', table => {
    table.integer('item_status_id').references('id').inTable('item_status');
    table.integer('condition_id').references('id').inTable('conditions');
    table.integer('category_id').references('id').inTable('categories');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('items', table => {
    table.dropColumn('item_status_id');
    table.dropColumn('condition_id');
    table.dropColumn('category_id');
  })
};
