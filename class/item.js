class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}


let item = new Item("rock", "just a simple rock");

console.log(item.name);
console.log(item.description);


module.exports = {
  Item,
};
