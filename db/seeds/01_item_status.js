
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item_status')
    .then(function () {
      // Inserts seed entries
      return knex('item_status').insert([
        {status: 'published'},
        {status: 'sold'}
      ]);
    });
};
