const bookshelf = require('./bookshelf');

class Item extends bookshelf.Model{
  get tableName() {return 'items'}
  get hasTimestamps() {return true}

  users(){
    return this.belongsTo('User');
  }
  categories(){
    return this.hasOne('Category');
  }
  conditions(){
    return this.hasOne('Condition');
  }

}

module.exports = bookshelf.model('Item',Item);