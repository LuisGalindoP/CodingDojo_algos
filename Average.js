// How about this one: return the average value of an array of unsorted numbers.

let arr = [6,6,6];

const average = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(average(arr));