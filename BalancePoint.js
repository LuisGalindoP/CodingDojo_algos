// Write a function that returns whether the given array has a balance point between indices,
// where one side’s sum is equal to the other’s.
// Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.

const arr1 = [1,2,3,4,10];
const arr2 = [1,2,7,5,2,6,11];

const balancePoint = (arr) => {

    let index = 1;
    const length = arr.length
    for (let i = 0; i < length -1 ; i++) {

        let temp = [...arr];

        let end = temp.splice(index);
        let start = [...temp];

        let sumA = 0;
        start.map(value => {sumA += value});

        let sumB = 0;
        end.map(value => {sumB += value});

        if (sumA === sumB) {
            console.log(`Between indices ${index-1} and ${index} `);
            return true
        }
        index++;
    }
    return false;
}

console.log(balancePoint(arr2));