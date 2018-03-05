exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, name: 'tshirt', description: 'blue', price: '2.00', user_id: 1, item_status_id: 2, condition_id: 1, category_id: 2},
        {id: 2, name: 'truck', description: 'beat up', price: '2.00', user_id: 2, item_status_id: 1, condition_id: 3, category_id: 1},
        {id: 3, name: 'couch', description: 'big', price: '12.00', user_id: 1, item_status_id: 1, condition_id: 4, category_id: 3},
        {id: 4, name: 'computer', description: 'apple', price: '2000.00', user_id: 2, item_status_id: 2, condition_id: 2, category_id: 4},
        {id: 5, name: 'human', description: 'hottie', price: '22.00', user_id: 1, item_status_id: 1, condition_id: 5, category_id: 5},
      ]);
    });
};