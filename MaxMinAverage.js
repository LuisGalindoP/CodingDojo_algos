let myArray = [2,5,6,8,9,-3];

const maxMinAverage = (arr) => {
    let sum = 0;
    let max = Math.max(...myArray);
    let min = Math.min(...myArray);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum/arr.length;

    console.log("MAX IS: ", max);
    console.log("MIN IS: ", min);
    console.log("AVERAGE IS: ", average);
}

maxMinAverage(myArray)