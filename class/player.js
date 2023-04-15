class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    // Picks up an item from a room into the player's inventory
    takeItem(itemName) {
        // Find the item using find() from room.items & push to player inventory
        let room = this.currentRoom;
        let foundItem = room.items.find(item => item.name === itemName);
        this.items.push(foundItem);        

        // find index of item and remove using splice
        let itemIndex = room.items.findIndex(item => item.name === itemName);
        currentRoom.items.splice(itemIndex, 1);
    }
    

    dropItem(itemName) {

        // Fill this in
    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) { // filter array of player's items down to one that has the same name
        let itemArray = this.items.filter(item => name === item.name);
        return itemArray[0];
    }
}

// let item = new Item("rock", "just a simple rock");
// let room = new Room("Dining Room", "For eating");
// let player = new Player("player", room);
// room.items.push(item);
// console.log(player.takeItem("rock"));

/*************************************************************************************** */

module.exports = {
  Player,
};
