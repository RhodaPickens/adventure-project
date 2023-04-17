const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");

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
        const item = this.currentRoom.getItemByName(itemName);
        this.items.push(item);

        // remove item from room by filtering items to those not matching item name
        this.currentRoom.items = this.currentRoom.items.filter(next => next.name !== itemName);
    }

    // Drops an item the player is holding into their current room
    dropItem(itemName) {
        //find the item in player inventory and push to room items
        let retrievedItem = this.getItemByName(itemName);
        this.currentRoom.items.push(retrievedItem);

        // Update player inventory by filtering items to those not matching item name
        this.items = this.items.filter(next => next.name !== itemName);
    }


    // food can be eaten by a player
    eatItem(itemName) {
        const item = this.getItemByName(itemName);
        // checks if object attached to itemName is an instance of Food class
        if (item instanceof Food) {
            // creates new inventory with items that are not the food
            this.items = this.items.filter(next => next.name !== itemName);
        }
    }

    getItemByName(name) { // filter array of player's items down to one that has the same name
        let itemArray = this.items.filter(item => name === item.name);
        return itemArray[0];
    }
}


/*************************************************************************************** */

module.exports = {
  Player,
};
