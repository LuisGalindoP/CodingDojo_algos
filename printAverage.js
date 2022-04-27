let myArray = [5,10,5,4];

const averageArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum/array.length;
}

console.log(averageArray(myArray));
