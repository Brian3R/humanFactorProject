function generation (inventory){
    // Input user's "inventory" data into "userDataJSON" to be used for generation
    //let userDataJSON = '{ "inventory": [ [' + 
    //'{"title": "green shirt with square", "clothing_type": "shirt", "body_region": 0, "color": "green", "favorability": 2 },'+
    //'{"title": "green shirt with triangle","clothing_type": "shirt","body_region": 0,"color": "green","favorability": 8}],'+
    //'[{"title": "denim jeans","clothing_type": "pants","body_region": 1,"color": "darkBlue","favorability": 10},' +
    //'{"title": "black pants","clothing_type": "pants","body_region": 1,"color": "black","favorability": 8}],'+
    //'[{"title": "boots","clothing_type": "shoes","body_region": 2,"color": "darkBlue","favorability": 2}]]}';

    // Parsing the inventory data into a js obj to be used for function
    //const userDataObj = JSON.parse(userDataJSON);

    // Inventory goes here
    const userDataObj = inventory;

    // Multiplier to be added to favorablity score if the colors match
    let matchMultiplier = 3;

    // Index location of shirts
    let shirtIndex = 0;

    // Variable to hold the name of the shirt to be selected
    let selectedShirtTitle = "";

    // The color of the shirt that is selected
    let shirtColor = "";

    // Index location of the selected shirt
    let selectedShirtIndex = 0;

    // Variables used to select shirt
    score1 = 0;
    score1Index = 0;
    score2 = 0;
    score2Index = 0;
    score3 = 0;
    score3Index = 0;

    for(var i=0; i < userDataObj.inventory[shirtIndex].length; i++) {
        if(userDataObj.inventory[shirtIndex][i].favorability >= score1) {
            score3 = score2
            score3Index = score2Index
            score2 = score1
            score2Index = score1Index
            score1 = userDataObj.inventory[shirtIndex][i].favorability
            score1Index = i
        }
        else if(userDataObj.inventory[shirtIndex][i].favorability >= score2){
            score3 = score2
            score3Index = score2Index
            score2 = userDataObj.inventory[shirtIndex][i].favorability
            score2Index = i
        }
        else if(userDataObj.inventory[shirtIndex][i].favorability >= score3){
            score3 = userDataObj.inventory[shirtIndex][i].favorability
            score3Index = i
        }
    }

    totalScore = score1 + score2 + score3;
    randomSeed = Math.floor(Math.random() * totalScore)

    if (randomSeed < score1){
        selectedShirtIndex = score1Index;
        selectedShirtTitle = userDataObj.inventory[shirtIndex][score1Index].title;
        shirtColor = userDataObj.inventory[shirtIndex][score1Index].color;
    }
    else if(randomSeed < score2){
        selectedShirtIndex = score2Index;
        selectedShirtTitle = userDataObj.inventory[shirtIndex][score2Index].title;
        shirtColor = userDataObj.inventory[shirtIndex][score2Index].color;
    }
    else{
        selectedShirtIndex = score3Index;
        selectedShirtTitle = userDataObj.inventory[shirtIndex][score3Index].title;
        shirtColor = userDataObj.inventory[shirtIndex][score3Index].color;
    }

    console.log(shirtColor);
    //console.log(selectedShirtIndex);
    console.log(selectedShirtTitle);
    console.log("-----------------------------")

    // Index location of pants
    let pantsIndex = 1;

    // Variable to hold the name of the pants to be selected
    let selectedPantsTitle = "";

    // The color of the pants that is selected
    let pantsColor = "";

    // Index location of the selected pants
    let selectedPantsIndex = 0;

    // Current match score (for looping)
    let matchScore = 0;

    // Current color (for looping)
    let currentColor = "";

    // Current highest match score
    let highestMatch = 0;

    for(var i=0; i < userDataObj.inventory[pantsIndex].length; i++) {
        matchScore = userDataObj.inventory[pantsIndex][i].favorability
        currentColor = userDataObj.inventory[pantsIndex][i].color

        if(colorMatcher(shirtColor,currentColor) == true){
            matchScore = matchScore * matchMultiplier;
        }
        if(matchScore >= highestMatch){
            highestMatch = matchScore;
            selectedPantsIndex = i;
            selectedPantsTitle = userDataObj.inventory[pantsIndex][i].title;
            pantsColor = currentColor;
        }
    }

    console.log(pantsColor);
    //console.log(selectedPantsIndex);
    console.log(selectedPantsTitle);
    console.log("-----------------------------")

    // Index location of shoes
    let shoesIndex = 2;

    // Variable to hold the name of the shoes to be selected
    let selectedShoesTitle = "";

    // The color of the shoes that are selected
    let shoesColor = "";

    // Index location of the selected shoes
    let selectedShoesIndex = 0;

    // Current match score (for looping)
    matchScore = 0;

    // Current color (for looping)
    currentColor = "";

    // Current highest match score
    highestMatch = 0;

    for(var i=0; i < userDataObj.inventory[shoesIndex].length; i++) {
        matchScore = userDataObj.inventory[shoesIndex][i].favorability
        currentColor = userDataObj.inventory[shoesIndex][i].color

        if(colorMatcher(shirtColor,currentColor) == true){
            matchScore = matchScore * matchMultiplier;
        }
        if(matchScore >= highestMatch){
            highestMatch = matchScore;
            selectedShoesIndex = i;
            selectedShoesTitle = userDataObj.inventory[shoesIndex][i].title;
            shoesColor = currentColor;
        }
    }

    console.log(shoesColor);
    //console.log(selectedShoesIndex);
    console.log(selectedShoesTitle);
    console.log("-----------------------------")

    console.log("You should wear your", selectedShirtTitle, "with your", selectedPantsTitle, "and your", selectedShoesTitle)

    const outfit = {
        top: selectedShirtIndex,
        bottom: selectedPantsIndex,
        shoes: selectedShoesIndex
    };

    return outfit;
}

// This function takes 2 colors as strings (color1 is main color, color2 is secondary)
// returns true if they match, false if they don't
// Note: this function is super ugly; can be beautified later
function colorMatcher (color1, color2) {

    if (color1 == "black" || color2 == "black")
        return true;

    if (color1 == "white" || color2 == "white")
        return true;

    if (color1 == color2)
        return true;

    if (color1 == "pink")
        if (color2 == "lightBlue" || color2 == "darkBlue" || color2 == "gray")
            return true;
        else
            return false;
    
    if (color1 == "red")
        if (color2 == "lightBlue" || color2 == "darkBlue" || color2 == "gray")
            return true;
        else
            return false;
    
    if (color1 == "orange")
        if (color2 == "lightBlue" || color2 == "darkBlue" || color2 == "green")
            return true;
        else
            return false;
    
    if (color1 == "beige")
        if (color2 == "purple" || color2 == "darkBlue" || color2 == "brown")
            return true;
        else
            return false;
    
    if (color1 == "yellow")
        if (color2 == "green" || color2 == "darkBlue")
            return true;
        else
            return false;
    
    if (color1 == "green")
        if (color2 == "orange" || color2 == "purple")
            return true;
        else
            return false;
    
    if (color1 == "lightBlue")
        if (color2 == "pink" || color2 == "red" || color2 == "orange")
            return true;
        else
            return false;
    
    if (color1 == "darkBlue")
        if (color2 == "pink" || color2 == "red" || color2 == "yellow" || color2 == "gray")
            return true;
        else
            return false;
    
    if (color1 == "purple")
        if (color2 == "orange" || color2 == "green" || color2 == "gray")
            return true;
        else
            return false;
    
    if (color1 == "brown")
        if (color2 == "beige")
            return true;
        else
            return false;
    
    if (color1 == "gray")
        if (color2 == "pink" || color2 == "red" || color2 == "darkBlue" || color2 == "purple")
            return true;
        else
            return false;
}

export default generation;