const bookshelf = require('./bookshelf');

class Conditon extends bookshelf.Model{
  get tableName() {return 'conditions'}

  items(){
    return this.belongsTo('Item')
  }


}


module.exports = bookshelf.model('Condition',Condition);