
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'brad', email: 'test@test', password: 'password', user_status_id: '1'},
        {username: 'ubin', email: 'test1@test', password: 'password', user_status_id: '1'},
        {username: 'krish', email: 'test2@test', password: 'password', user_status_id: '2'},
        {username: 'shell', email: 'test3@test', password: 'password', user_status_id: '2'}
      ]);
    });
};
