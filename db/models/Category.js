const bookshelf = require('./bookshelf');

class Category extends bookshelf.Model{
  get tableName(){return 'categories'}

  items(){
    return this.belongsTo('Item')
  }

}


module.exports = bookshelf.model('Category',Category);