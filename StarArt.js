//Print x amount of stars on starting from the left
const leftChar = (num) => {
    let result = ""; 
    const star = "*";
    for (let i = 0; i < num; i++) {
        result = result.concat(star);
    }
    return result;
};

//Print x amount of stars starting on the right
const rightChar = (num) => {
    let result = "";
    const star = "*";
    const space = " ";
    const numSpaces = 75 - num; //70

    for (let i = 1; i <= numSpaces; i++) {result = result.concat(space)};
    for (let i = 1; i <= num; i++) {result = result.concat(star)};

    return result;
}

//Print x amount of starts in the middle
const centerChar = (num, char) => {
    let resultRight = "";
    let resultCenter = "";
    let resultLeft = "";
    let resultFinal = "";
    const star = char;
    const space = "S";
    let left = 0;
    let right = 0;
    //Rest num from 75 to get the spaces
    let totalSpaces = 75-num;
    //Divide the spaces into 2 to get the spaces at the right and left
    left = totalSpaces / 2;
    //If the division as remainder floor one and ceiling the other one
    if (totalSpaces % 2 != 0) {
        left = Math.floor(left);
        right = (left + 1);
    } else {
        right = left;
    }
    //Add for loop for spaces left
    for (let i = 0; i < left; i++) {resultLeft = resultLeft.concat(space)};
    //Add for loop for stars
    for (let i = 0; i < num; i++) {resultCenter = resultCenter.concat(star)};
    //Add for loop for spaces right
    for (let i = 0; i < right; i++) {resultRight = resultRight.concat(space)};

    resultFinal = resultFinal.concat(resultLeft).concat(resultCenter).concat(resultRight);
    return resultFinal;
}


// console.log(leftChar(4));
// console.log(rightChar(70));
console.log(centerChar(11, "P"));