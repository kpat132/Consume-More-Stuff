const bookshelf = require('./bookshelf');

class Condition extends bookshelf.Model{
  get tableName() {return 'conditions'}

  items(){
    return this.belongsTo('Item')
  }


}


module.exports = bookshelf.model('Condition',Condition);