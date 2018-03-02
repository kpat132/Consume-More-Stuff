
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'brad', description: 'handsome', price: '2.00', user_id: '1', item_status: '2', condition_id: '1', category_id: '2'},
        {name: 'zubin', description: 'beautiful', price: '2.00', user_id: '2', item_status: '1', condition_id: '2', category_id: '3'},
      ]);
    });
};
