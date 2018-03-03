const bookshelf = require('./bookshelf');

class User_Status extends bookshelf.Model{
  get tableName(){return 'user_status'}
  
  users(){
    return this.belongsTo('User');
  }
}

module.exports = bookshelf.model('User_Status',User_Status);
