// Import from database here

// Input users "inventory" data into "userDataJSON" to be used for generation
let userDataJSON = '{ "inventory":[' +
'{ "title": "Red Shirt with square", "clothing_type": "shirt", "description": "Shirt that is red and has square", "body_region": 1, "color": "Red", "favorability": 2},' +
'{ "title": "Dark Blue Jeans", "clothing_type": "pants", "description": "Jeans that are dark blue", "body_region": 2, "color": "Dark Blue", "favorability": 5}]}';

// Parsing the inventory data into a js obj to be used for function
const userDataObj = JSON.parse(userDataJSON);

// Type of starting clothing we are looking for
// "Starting Clothing" is the piece of clothing which we build the rest of the outfit upon
let startingClothing = "shirt";

// Index location of the starting clothing
let startingClothingIndex = 0;

// Search for first appearance of piece of clothing matching starting clothing, put index into startingClothingIndex
// This will likely change to searching for a piece of clothing with a certain score/range of scores
for(var i=0; i < userDataObj.inventory.length; i++) {
    if(userDataObj.inventory[i].clothing_type == startingClothing) {
        startingClothingIndex = i;
        break;
    }
}

console.log(startingClothingIndex);

let secondClothing = "pants";
let secondClothingIndex = 0;

for(var i=0; i < userDataObj.inventory.length; i++) {
    if(userDataObj.inventory[i].clothing_type == secondClothing) {
        // There would be logic here to make good color pairings (would likely hand that off to a sub function)
        secondClothingIndex = i;
        break;
    }
}

console.log(secondClothingIndex);

// This would continue for shoes and any other pieces we want to add