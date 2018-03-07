const bookshelf = require("./bookshelf");

class Item extends bookshelf.Model {
  get tableName() {
    return "items";
  }
  get hasTimestamps() {
    return true;
  }

  users() {
    return this.belongsTo("User");
  }
  categories() {
    return this.belongsTo("Category");
  }
  conditions() {
    return this.belongsTo("Condition");
  }
  item_status() {
    return this.belongsTo("Item_Status");
  }
}

module.exports = bookshelf.model("Item", Item);
