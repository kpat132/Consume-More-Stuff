
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      // Inserts seed entries
      return knex('conditions').insert([
        {id: 1, name: 'fair'},
        {id: 2, name: 'new'},
        {id: 3, name: 'used'}
      ]);
    });
};
