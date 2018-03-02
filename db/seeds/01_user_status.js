
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_status').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_status').insert([
        {status: 'active'},
        {status: 'inactive'}
      ]);
    });
};
