const bookshelf = require('./bookshelf');


class User extends bookshelf.Model{
  get tableName() {return 'users'}
  get hasTimestamps(){return true}

  user_status(){
    return this.belongsTo(`User_Status`);
  }

  items(){
    return this.hasMany('Item');
  }

}

module.exports = bookshelf.model('User',User);