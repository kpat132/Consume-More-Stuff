exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'krish', email: 'krish@test.com', password: 'password', user_status_id: '1'},
        {id: 2, username: 'shell', email: 'michelle@test.com', password: 'password', user_status_id: '2'},
      ]);
    });
};