
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'Auto'},
        {id: 2, name: 'Clothes'},
        {id: 3, name: 'Furniture'},
        {id: 4, name: 'Electronics'},
        {id: 5, name: 'Misc...'}
      ]);
    });
};
