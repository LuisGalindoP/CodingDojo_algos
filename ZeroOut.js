let myArray = [3,5,6,-3,2,-5];

const zeroOut = (arr) => {
    let newArray = arr.map(x => x < 0 ? x = 0 : x = x);
    return newArray;
}

console.log(zeroOut(myArray));