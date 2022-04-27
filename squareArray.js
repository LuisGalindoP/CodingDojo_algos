let myArray = [2,6,8,5];

const squareArray = (arr) => {
    let newArray  = arr.map(item => item * item);
    return newArray;
}

console.log(squareArray(myArray));